"use client";

import { destinations } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function PackPage() {
  const [search, setSearch] = useState("");

  // ✅ Filter by title + location
  const filteredDestinations = destinations.filter((item) =>
    `${item.title} ${item.location}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <section className="bg-gray-100 p-7 mx-7 mb-10 rounded-2xl mt-20">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 text-black gap-6">

        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">
            Our Packages
          </h2>
          <p className="md:w-96 text-center md:text-left font-medium text-gray-700 mt-2">
            From island escapes to cool mountain towns, discover where your next
            journey will take you.
          </p>
        </div>

        {/* Search Box */}
        <div className="w-full md:w-72 relative">
          <input
            type="text"
            placeholder="Search your next Trip here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition"
          />
          <span className="absolute left-3 top-2.5 text-gray-400">
            🔍
          </span>
        </div>
      </div>

      {/* Cards */}
      {filteredDestinations.length === 0 ? (
        <div className="text-center py-10 text-gray-500 text-lg">
          No destinations found 😔
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDestinations.map((item) => (
            <Link
              href={`/pack/${item.id}`}
              key={item.id}
              className="relative h-[340px] rounded-2xl overflow-hidden group cursor-pointer shadow-lg"
            >
              <Image
                src={item.image?.[0] || "/hero.jpg"}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Price */}
              <span className="absolute top-3 right-3 bg-white text-xs px-3 py-1 rounded-full font-semibold shadow">
                Starts at ₹{item.price}
              </span>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 flex flex-col justify-end text-white">
                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-200">
                  {item.subtitle}
                </p>

                <div className="flex items-center justify-between mt-2 text-sm">
                  <span>
                    ⭐ {item.rating} ({item.reviews})
                  </span>
                  <span className="text-xs text-gray-300">
                    📍 {item.location}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}