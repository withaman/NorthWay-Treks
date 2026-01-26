import { image, trekkingServices } from '@/assets/assets'
import React from 'react'
import Image from "next/image";

export default function TrekkingServices() {
  return (
    <section className="relative w-full px-6 py-6 overflow-hidden">
      {/* Background Image */}
      <Image
        src={image.servicebg}
        alt="Himalayan trekking destinations"
        fill
        priority
        className="object-cover"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto ">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 text-black">
          <h2 className="text-2xl md:text-3xl font-bold">
            Our Trekking Services
          </h2>
          <p className="md:w-96 text-center md:text-left font-semibold text-gray-800/90 mt-2 md:mt-0 italic">
            From island escapes to cool mountain towns, discover where your next
            journey will take you.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {trekkingServices.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-center items-center w-[350px] min-h-[150px] rounded-2xl 
              bg-white/20 backdrop-blur-md 
              shadow-2xl 
              px-4 py-4 text-center
              hover:bg-white/30 hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-white">
                {service.title}
              </h3>
              <p className="text-sm mt-2 text-gray-800/90">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

