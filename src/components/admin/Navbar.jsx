// components/admin/Navbar.jsx

"use client";

import { Bell } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-64 right-0 h-20 bg-white border-b z-50 px-6 flex items-center justify-between">

      {/* Left */}
      <div>
        <h2 className="text-xl font-bold text-gray-800">
          Admin Dashboard
        </h2>

        <p className="text-sm text-gray-500">
          Welcome back, Anuj 👋
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        {/* Notification */}
        <button className="relative w-11 h-11 rounded-xl border flex items-center justify-center hover:bg-gray-50">
          <Bell size={20} />

          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 pl-2">

          <div className="text-right hidden md:block">
            <p className="font-medium text-sm">
              Anuj Rawat
            </p>

            <p className="text-xs text-gray-500">
              Administrator
            </p>
          </div>

          <div className="w-11 h-11 rounded-full theme-color text-white flex items-center justify-center font-semibold">
            A
          </div>

        </div>

      </div>
    </header>
  );
}