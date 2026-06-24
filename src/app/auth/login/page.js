"use client";

import { useState } from "react";
import {
  Mail,
  Lock,
  User,
  Mountain,
  ArrowRight,
} from "lucide-react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex">

      {/* Left Side */}
      <div className="hidden lg:flex lg:w-1/2 theme-color text-white p-16 flex-col justify-between">

        <div>
          <div className="flex items-center gap-3">
            <Mountain size={40} />
            <h1 className="text-4xl font-bold">
              Northway Treks
            </h1>
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
            Control your trekking website, manage
            packages, publish blogs, track enquiries
            and grow your online presence.
          </p>
        </div>

        {/* <div className="flex gap-8">
          <div>
            <h3 className="text-3xl font-bold">50+</h3>
            <p>Trek Packages</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">100+</h3>
            <p>Blog Articles</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">10K+</h3>
            <p>Travellers</p>
          </div>
        </div> */}

      </div>

      {/* Right Side */}
      <div className="flex-1 bg-gray-100 flex items-center justify-center p-6">

        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

          <div className="text-center mb-8">

            <h2 className="text-3xl font-bold">
              {isLogin ? "Welcome Back" : "Create Account"}
            </h2>

            <p className="text-gray-500 mt-2">
              {isLogin
                ? "Login to continue"
                : "Register your admin account"}
            </p>

          </div>

          <form className="space-y-5">

            {!isLogin && (
              <div>
                <label className="text-sm font-medium">
                  Full Name
                </label>

                <div className="relative mt-2">
                  <User
                    size={18}
                    className="absolute left-3 top-3.5 text-gray-400"
                  />

                  <input
                    type="text"
                    placeholder="Aman Rawat"
                    className="w-full border rounded-xl pl-10 pr-4 py-3"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="text-sm font-medium">
                Email
              </label>

              <div className="relative mt-2">
                <Mail
                  size={18}
                  className="absolute left-3 top-3.5 text-gray-400"
                />

                <input
                  type="email"
                  placeholder="admin@northwaytreks.com"
                  className="w-full border rounded-xl pl-10 pr-4 py-3"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">
                Password
              </label>

              <div className="relative mt-2">
                <Lock
                  size={18}
                  className="absolute left-3 top-3.5 text-gray-400"
                />

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full border rounded-xl pl-10 pr-4 py-3"
                />
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="text-sm font-medium">
                  Confirm Password
                </label>

                <div className="relative mt-2">
                  <Lock
                    size={18}
                    className="absolute left-3 top-3.5 text-gray-400"
                  />

                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full border rounded-xl pl-10 pr-4 py-3"
                  />
                </div>
              </div>
            )}

            {isLogin && (
              <div className="text-right">
                <button
                  type="button"
                  className="text-sm text-orange-600"
                >
                  Forgot Password?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full theme-color text-white py-3 rounded-xl flex items-center justify-center gap-2 font-medium"
            >
              {isLogin ? "Login" : "Create Account"}
              <ArrowRight size={18} />
            </button>

          </form>

          <div className="text-center mt-6">

            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-orange-600 font-medium"
            >
              {isLogin
                ? "Create New Account"
                : "Already have an account?"}
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}