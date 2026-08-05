"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Search, Plus, Edit, Trash2, Mountain } from "lucide-react";

export default function TreksPage() {
  const [treks, setTreks] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTreks = async () => {
    try {
      const res = await fetch("/api/treks", {
        cache: "no-store",
      });

      const data = await res.json();

      if (data.success) {
        setTreks(data.treks);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTreks();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-80 text-lg">
        Loading Treks...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Treks Management</h1>

          <p className="text-gray-500">Manage all trekking packages</p>
        </div>

        <Link
          href="/admin/treks/add"
          className="theme-color text-white px-5 py-3 rounded-xl flex items-center gap-2"
        >
          <Plus size={18} />
          Add Trek
        </Link>
      </div>

      {/* Stats */}

      <div className="grid grid-cols-4 gap-5">
        <div className="bg-white rounded-2xl shadow-sm p-5">
          <h3 className="text-gray-500 text-sm">Total Treks</h3>

          <p className="text-3xl font-bold mt-2">{treks.length}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-5">
          <h3 className="text-gray-500 text-sm">Active</h3>

          <p className="text-3xl font-bold mt-2">
            {treks.filter((trek) => trek.published).length}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-5">
          <h3 className="text-gray-500 text-sm">Draft</h3>

          <p className="text-3xl font-bold mt-2">
            {treks.filter((trek) => !trek.published).length}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-5">
          <h3 className="text-gray-500 text-sm">Featured</h3>

          <p className="text-3xl font-bold mt-2">0</p>
        </div>
      </div>

      {/* Search */}

      <div className="bg-white p-4 rounded-2xl shadow-sm flex justify-between">
        <div className="relative w-80">
          <Search size={18} className="absolute left-3 top-3 text-gray-400" />

          <input
            type="text"
            placeholder="Search trek..."
            className="w-full border rounded-xl pl-10 pr-4 py-2"
          />
        </div>

        <select className="border rounded-xl px-4 py-2">
          <option>All Difficulty</option>
          <option>Easy</option>
          <option>Moderate</option>
          <option>Difficult</option>
        </select>
      </div>

      {/* Table */}

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-6 py-4">Trek</th>
              <th className="text-left px-6 py-4">Duration</th>
              <th className="text-left px-6 py-4">Difficulty</th>
              <th className="text-left px-6 py-4">Price</th>
              <th className="text-left px-6 py-4">Status</th>
              <th className="text-right px-6 py-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {treks.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-10 text-gray-500">
                  No treks found.
                </td>
              </tr>
            ) : (
              treks.map((trek) => (
                <tr key={trek._id} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                        <Mountain size={22} />
                      </div>

                      <div>
                        <h3 className="font-semibold">{trek.title}</h3>

                        <p className="text-sm text-gray-500">{trek.slug}</p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">{trek.duration || "-"}</td>

                  <td className="px-6 py-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      {trek.difficulty || "-"}
                    </span>
                  </td>

                  <td className="px-6 py-4 font-semibold">
                    ₹{trek.price || 0}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        trek.published
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {trek.published ? "Active" : "Draft"}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-2">
                      <Link
                        href={`/admin/treks/edit/${trek._id}`}
                        className="p-2 bg-blue-100 rounded-lg"
                      >
                        <Edit size={16} />
                      </Link>

                      <button className="p-2 bg-red-100 rounded-lg hover:bg-red-200">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
