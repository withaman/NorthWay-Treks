"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { validateLogin } from "@/lib/validation";
import { Mail, Lock, Mountain, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const { admin, loading: authLoading, refreshAdmin } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");

  // Redirect if already logged in
  useEffect(() => {
    // Wait until authentication check is complete
    if (authLoading) return;

    // If already logged in, redirect to dashboard
    if (admin) {
      router.replace("/admin/dashboard");
    }
  }, [admin, authLoading, router]);

 const handleChange = (e) => {
  const { name, value } = e.target;

  setForm((prev) => ({
    ...prev,
    [name]: value,
  }));

  setErrors((prev) => ({
    ...prev,
    [name]: "",
  }));
};

  const handleLogin = async (e) => {
    e.preventDefault();

    const validationErrors = validateLogin(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);
    setApiError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setApiError(data?.message || "Login failed");
        return;
      }

      // Update Auth Context
      await refreshAdmin();

      // Don't redirect here.
      // The useEffect will automatically redirect
      // when admin becomes available.
    } catch (err) {
      console.error(err);
      setApiError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };
  // Wait while checking login status
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-2xl px-8 py-6">
          <p className="text-gray-600 font-medium">
            Checking authentication...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side */}

      <div className="hidden lg:flex lg:w-1/2 theme-color text-white p-16 flex-col justify-between">
        <div>
          <div className="flex items-center gap-3">
            <Mountain size={40} />

            <h1 className="text-4xl font-bold">NorthWay Treks</h1>
          </div>

          <p className="mt-6 text-xl opacity-90">
            Adventure Management Platform
          </p>
        </div>

        <div>
          <h2 className="text-5xl font-bold leading-tight">
            Manage Treks,
            <br />
            Blogs & SEO
            <br />
            From One Place.
          </h2>

          <p className="mt-6 text-lg opacity-90 max-w-lg">
            Control your trekking website, manage packages, publish blogs, track
            enquiries and grow your online presence.
          </p>
        </div>
      </div>

      {/* Right Side */}

      <div className="flex-1 bg-gray-100 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Welcome Back</h2>

            <p className="text-gray-500 mt-2">Login to your admin dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {apiError && (
              <div className="mb-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-600">
                {apiError}
              </div>
            )}
            {/* Email */}

            <div>
              <label className="text-sm font-medium">Email</label>

              <div className="relative mt-2">
                <Mail
                  size={18}
                  className="absolute left-3 top-3.5 text-gray-400"
                />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="admin@northwaytreks.com"
                  className={`w-full rounded-xl pl-10 pr-4 py-3 outline-none transition ${
                    errors.email
                      ? "border border-red-500 focus:ring-2 focus:ring-red-400"
                      : "border focus:ring-2 focus:ring-orange-400"
                  }`}
                />
              </div>

              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Password */}

            <div>
              <label className="text-sm font-medium">Password</label>

              <div className="relative mt-2">
                <Lock
                  size={18}
                  className="absolute left-3 top-3.5 text-gray-400"
                />

                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`w-full rounded-xl pl-10 pr-4 py-3 outline-none transition ${
                    errors.password
                      ? "border border-red-500 focus:ring-2 focus:ring-red-400"
                      : "border focus:ring-2 focus:ring-orange-400"
                  }`}
                />
              </div>

              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
              )}
            </div>

            {/* Forgot Password */}

            <div className="text-right">
              <button
                type="button"
                className="text-sm text-orange-600 hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}

            <button
              type="submit"
              disabled={loading}
              className="w-full theme-color text-white py-3 rounded-xl flex items-center justify-center gap-2 font-medium disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Login"}

              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
