"use client";

import {
  Mountain,
  FileText,
  Search,
  Activity,
  Plus,
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="space-y-6">

      {/* Welcome */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h1 className="text-3xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="text-gray-500 mt-1">
          Manage your treks, blogs and SEO from one place.
        </p>
      </div>

      {/* Stats */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">

        <div className="bg-white rounded-2xl p-5 shadow-sm border-l-4 border-orange-500">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500">Total Treks</p>
              <h2 className="text-3xl font-bold mt-2">24</h2>
            </div>

            <Mountain size={30} />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border-l-4 border-blue-500">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500">Published Blogs</p>
              <h2 className="text-3xl font-bold mt-2">12</h2>
            </div>

            <FileText size={30} />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border-l-4 border-green-500">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500">SEO Pages</p>
              <h2 className="text-3xl font-bold mt-2">8</h2>
            </div>

            <Search size={30} />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border-l-4 border-purple-500">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500">Activities</p>
              <h2 className="text-3xl font-bold mt-2">17</h2>
            </div>

            <Activity size={30} />
          </div>
        </div>

      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* Recent Treks */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-5">
            Recent Treks
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between items-center border-b pb-3">
              <div>
                <h3 className="font-medium">
                  Kedarkantha Trek
                </h3>
                <p className="text-sm text-gray-500">
                  Added 2 hours ago
                </p>
              </div>

              <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                Active
              </span>
            </div>

            <div className="flex justify-between items-center border-b pb-3">
              <div>
                <h3 className="font-medium">
                  Har Ki Dun Trek
                </h3>
                <p className="text-sm text-gray-500">
                  Added yesterday
                </p>
              </div>

              <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                Active
              </span>
            </div>

          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-5">
            Quick Actions
          </h2>

          <div className="space-y-3">

            <Link
              href="/admin/treks/add"
              className="flex items-center gap-3 p-3 rounded-xl theme-color text-white"
            >
              <Plus size={18} />
              Add Trek
            </Link>

            <Link
              href="/admin/blog/add"
              className="flex items-center gap-3 p-3 rounded-xl border"
            >
              <Plus size={18} />
              Add Blog
            </Link>

            <Link
              href="/admin/seo"
              className="flex items-center gap-3 p-3 rounded-xl border"
            >
              <Search size={18} />
              Update SEO
            </Link>

          </div>
        </div>

      </div>

      {/* Recent Blogs */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-5">
          Recent Blog Articles
        </h2>

        <div className="space-y-4">

          <div className="flex justify-between border-b pb-3">
            <div>
              <h3 className="font-medium">
                Best Treks in Uttarakhand
              </h3>

              <p className="text-sm text-gray-500">
                Published on 22 June 2026
              </p>
            </div>

            <span className="text-green-600">
              Published
            </span>
          </div>

          <div className="flex justify-between">
            <div>
              <h3 className="font-medium">
                Kedarkantha Trek Guide
              </h3>

              <p className="text-sm text-gray-500">
                Draft
              </p>
            </div>

            <span className="text-yellow-600">
              Draft
            </span>
          </div>

        </div>
      </div>

      {/* SEO Overview */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-5">
          SEO Overview
        </h2>

        <div className="grid md:grid-cols-3 gap-4">

          <div className="border rounded-xl p-4">
            <p className="text-gray-500">
              Indexed Pages
            </p>
            <h3 className="text-2xl font-bold">
              32
            </h3>
          </div>

          <div className="border rounded-xl p-4">
            <p className="text-gray-500">
              Missing Meta Titles
            </p>
            <h3 className="text-2xl font-bold text-red-500">
              2
            </h3>
          </div>

          <div className="border rounded-xl p-4">
            <p className="text-gray-500">
              Missing Descriptions
            </p>
            <h3 className="text-2xl font-bold text-orange-500">
              4
            </h3>
          </div>

        </div>
      </div>

    </div>
  );
}