"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Mountain,
  FileText,
  Search,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Treks",
    href: "/admin/treks",
    icon: Mountain,
  },
  {
    name: "Blogs",
    href: "/admin/blog",
    icon: FileText,
  },
  {
    name: "SEO",
    href: "/admin/seo",
    icon: Search,
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
      });

      if (res.ok) {
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <aside className="w-64 h-screen fixed left-0 top-0 flex flex-col text-white bg-[linear-gradient(45deg,#ff0c00_0%,#fd8925_60%,#ff9b26_100%)]">
      {/* Logo */}
      <div className="p-6 border-b border-white/20">
        <h1 className="text-xl font-bold">
          Northway Admin
        </h1>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition mb-2"
            >
              <Icon size={18} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-white/20">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-red-600 hover:bg-red-700 transition"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}