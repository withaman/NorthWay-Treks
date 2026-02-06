import { destinations } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

export default function Packages() {
  return (
    <section className="bg-gray-300 md:p-6 rounded-2xl md:mt-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 text-black">
        <h2 className="text-2xl md:text-3xl font-bold">
          Our Packages
        </h2>
        <p className="md:w-96 text-center md:text-left font-semibold text-gray-800/90 mt-2 md:mt-0">
          From island escapes to cool mountain towns, discover where your next
          journey will take you.
        </p>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {destinations.slice(0, 4).map((item) => (
          <div
            key={item.id}
            className="relative h-[340px] rounded-2xl overflow-hidden group cursor-pointer"
          >
            {/* Image */}
            <Image
              src={item.image?.[0] || "/hero.jpg"}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Price */}
            <span className="absolute top-3 right-3 bg-white/90 text-xs px-3 py-1 rounded-full font-medium">
              starts at {item.price}
            </span>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 flex flex-col justify-end text-white">
              <h3 className="text-md font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-200">{item.subtitle}</p>

              <div className="flex items-center justify-between mt-2 text-sm">
                <span>⭐ {item.rating} </span>
                <span className="text-xs text-gray-300">
                  📍 {item.location}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="hidden sm:block bg-gray-800 text-white px-4 py-2 rounded-full text-sm mt-4">
        <Link href="/pack">View more</Link>
      </button>
    </section>
  );
}
