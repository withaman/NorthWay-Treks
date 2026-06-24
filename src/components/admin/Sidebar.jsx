// components/admin/Sidebar.jsx

"use client";

import Link from "next/link";
import { LayoutDashboard, Mountain, FileText, Search, Settings } from "lucide-react";

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
  return (
    <aside className="w-64 text-white h-screen fixed left-0 top-0 bg-[linear-gradient(45deg,#ff0c00_0%,#fd8925_60%,#ff9b26_100%)]">
      <div className="p-6 border-b border-white-700">
        <h1 className="text-xl font-bold">
          Northway Admin
        </h1>
      </div>

      <nav className="p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-800 transition mb-2"
            >
              <Icon size={18} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}