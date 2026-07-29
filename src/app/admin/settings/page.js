"use client";

import { useState } from "react";
import {
  User,
  Lock,
  Globe,
  Mail,
  Phone,
  Image,
  Save,
  Upload,
} from "lucide-react";

export default function SettingsPage() {
  const [form, setForm] = useState({
    name: "Admin",
    username: "admin",
    email: "admin@example.com",
    phone: "+91 9876543210",
    website: "https://northwaytreks.com",
    logo: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);
  };

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h1 className="text-3xl font-bold">
          Admin Settings
        </h1>

        <p className="text-gray-500 mt-1">
          Manage your account, branding and website settings.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        {/* Profile */}

        <div className="bg-white rounded-2xl shadow-sm p-6">

          <div className="flex items-center gap-2 mb-5">
            <User size={20} />
            <h2 className="text-xl font-semibold">
              Profile
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <label className="text-sm font-medium">
                Full Name
              </label>

              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full mt-2 border rounded-xl p-3 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Username
              </label>

              <input
                name="username"
                value={form.username}
                onChange={handleChange}
                className="w-full mt-2 border rounded-xl p-3 outline-none"
              />
            </div>

          </div>

        </div>

        {/* Security */}

        <div className="bg-white rounded-2xl shadow-sm p-6">

          <div className="flex items-center gap-2 mb-5">
            <Lock size={20} />
            <h2 className="text-xl font-semibold">
              Change Password
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">

            <div>
              <label className="text-sm font-medium">
                Current Password
              </label>

              <input
                type="password"
                name="currentPassword"
                onChange={handleChange}
                className="w-full mt-2 border rounded-xl p-3"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                New Password
              </label>

              <input
                type="password"
                name="newPassword"
                onChange={handleChange}
                className="w-full mt-2 border rounded-xl p-3"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                className="w-full mt-2 border rounded-xl p-3"
              />
            </div>

          </div>

        </div>

        {/* Branding */}

        <div className="bg-white rounded-2xl shadow-sm p-6">

          <div className="flex items-center gap-2 mb-5">
            <Image size={20} />
            <h2 className="text-xl font-semibold">
              Website Branding
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div>

              <label className="text-sm font-medium">
                Upload Logo
              </label>

              <label className="mt-2 border-2 border-dashed rounded-xl h-40 flex flex-col items-center justify-center cursor-pointer">

                <Upload />

                <p className="mt-2 text-gray-500">
                  Click to Upload Logo
                </p>

                <input
                  type="file"
                  className="hidden"
                />

              </label>

            </div>

            <div>

              <label className="text-sm font-medium">
                Website Name
              </label>

              <input
                className="w-full mt-2 border rounded-xl p-3"
                defaultValue="NorthWay Treks"
              />

              <label className="text-sm font-medium mt-5 block">
                Website Tagline
              </label>

              <input
                className="w-full mt-2 border rounded-xl p-3"
                defaultValue="Explore The Himalayas"
              />

            </div>

          </div>

        </div>

        {/* Contact */}

        <div className="bg-white rounded-2xl shadow-sm p-6">

          <div className="flex items-center gap-2 mb-5">
            <Mail size={20} />
            <h2 className="text-xl font-semibold">
              Contact Information
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">

            <div>

              <label>Email</label>

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full mt-2 border rounded-xl p-3"
              />

            </div>

            <div>

              <label>Phone</label>

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full mt-2 border rounded-xl p-3"
              />

            </div>

          </div>

        </div>

        {/* Website */}

        <div className="bg-white rounded-2xl shadow-sm p-6">

          <div className="flex items-center gap-2 mb-5">
            <Globe size={20} />
            <h2 className="text-xl font-semibold">
              Website Settings
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">

            <div>

              <label>Website URL</label>

              <input
                name="website"
                value={form.website}
                onChange={handleChange}
                className="w-full mt-2 border rounded-xl p-3"
              />

            </div>

            <div>

              <label>Support Email</label>

              <input
                className="w-full mt-2 border rounded-xl p-3"
                defaultValue="support@northwaytreks.com"
              />

            </div>

          </div>

        </div>

        {/* Save */}

        <div className="flex justify-end">

          <button
            className="theme-color text-white px-8 py-3 rounded-xl flex items-center gap-2"
          >
            <Save size={18} />
            Save Changes
          </button>

        </div>

      </form>

    </div>
  );
}