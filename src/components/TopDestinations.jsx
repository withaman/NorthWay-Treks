import React from "react";
import Image from "next/image";
import { destinations } from "@/assets/assets";



export default function TopDestinations() {
  return (
    <main className="px-4 md:px-10 my-5">

      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
          Top Destination
        </h1>
        <p className="text-gray-500 italic font-medium">
          Explore our most popular Himalayan journeys
        </p>
      </div>

      {/* Grid Layout (SAME STYLE — NO CHANGE) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[200px]">

        {destinations.slice(0, 6).map((item, index) => {

          // Keep same grid styling pattern
          const gridClasses = [
            "md:col-span-3",
            "md:col-span-4 md:row-span-2",
            "md:col-span-5",
            "md:col-span-3",
            "md:col-span-2",
            "md:col-span-3",
          ];

          return (
            <div
              key={item.id}
              className={`${gridClasses[index]} relative rounded-[2.5rem] overflow-hidden group`}
            >
              <Image
                src={item.image[0]} // first image from array
                alt={item.title}
                fill
                priority={index === 1}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />

              {/* Rating */}
              <div className="absolute top-5 left-7 bg-white/30 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white font-bold">
                {item.rating}
              </div>

              {/* Content */}
              <div className="absolute bottom-8 left-8 text-white z-10">
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <p className="text-[10px] opacity-90 uppercase tracking-[0.2em] font-semibold max-w-[180px] leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            </div>
          );
        })}

      </div>
    </main>
  );
}