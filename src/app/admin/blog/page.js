"use client";

import Link from "next/link";
import { Plus, Search, Edit, Trash2, FileText } from "lucide-react";

export default function BlogsPage() {
const blogs = [
{
id: 1,
title: "Kedarkantha Trek Complete Guide",
category: "Trek Guide",
status: "Published",
date: "24 Jun 2026",
},
{
id: 2,
title: "Best Treks in Uttarakhand",
category: "Travel Tips",
status: "Draft",
date: "20 Jun 2026",
},
];

return ( <div className="space-y-6">

  {/* Header */}
  <div className="flex justify-between items-center">
    <div>
      <h1 className="text-3xl font-bold">
        Blogs
      </h1>

      <p className="text-gray-500">
        Manage all blog articles
      </p>
    </div>

    <Link
      href="/admin/blog/add"
      className="theme-color text-white px-5 py-3 rounded-xl flex items-center gap-2"
    >
      <Plus size={18} />
      Add Blog
    </Link>
  </div>

  {/* Search */}
  <div className="bg-white rounded-2xl p-4 shadow-sm">

    <div className="relative max-w-sm">
      <Search
        size={18}
        className="absolute left-3 top-3 text-gray-400"
      />

      <input
        type="text"
        placeholder="Search blogs..."
        className="w-full border rounded-lg pl-10 pr-4 py-2"
      />
    </div>

  </div>

  {/* Blog Table */}
  <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

    <table className="w-full">

      <thead className="bg-gray-50">
        <tr>
          <th className="text-left p-4">
            Blog
          </th>

          <th className="text-left p-4">
            Category
          </th>

          <th className="text-left p-4">
            Date
          </th>

          <th className="text-left p-4">
            Status
          </th>

          <th className="text-right p-4">
            Action
          </th>
        </tr>
      </thead>

      <tbody>

        {blogs.map((blog) => (
          <tr
            key={blog.id}
            className="border-t hover:bg-gray-50"
          >
            <td className="p-4">

              <div className="flex items-center gap-3">

                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <FileText size={20} />
                </div>

                <div>
                  <h3 className="font-medium">
                    {blog.title}
                  </h3>
                </div>

              </div>

            </td>

            <td className="p-4">
              {blog.category}
            </td>

            <td className="p-4">
              {blog.date}
            </td>

            <td className="p-4">

              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  blog.status === "Published"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {blog.status}
              </span>

            </td>

            <td className="p-4">

              <div className="flex justify-end gap-2">

                <Link
                  href={`/admin/blogs/edit/${blog.id}`}
                  className="p-2 bg-blue-100 rounded-lg"
                >
                  <Edit size={16} />
                </Link>

                <button
                  className="p-2 bg-red-100 rounded-lg"
                >
                  <Trash2 size={16} />
                </button>

              </div>

            </td>

          </tr>
        ))}

      </tbody>

    </table>

  </div>

</div>

);
}
