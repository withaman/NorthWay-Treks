"use client";

import { image } from "@/assets/assets";
import Image from "next/image";

export default function About() {
  return (
    <section className="relative w-full min-h-[60vh] lg:min-h-[60vh] flex items-center justify-center text-center text-white overflow-hidden mt-[-1.5rem]">
      
      {/* Background Image */}
      <Image
        src={image.servicebg}
        alt="About Us Background"
        fill
        priority
        className="object-cover"
      />

      {/* Green Overlay */}
      <div className="absolute inset-0 bg-green-900/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        
        {/* Small Heading */}
        <p className="uppercase tracking-widest text-sm mb-3 opacity-90">
          Welcome to Northway Treks
        </p>

        {/* Main Title */}
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">
          About Us
        </h1>

        {/* Description */}
        <p className="text-sm lg:text-base opacity-90 mb-6">
          We provide unforgettable travel experiences with professional service
          and trusted local expertise. Discover beautiful destinations with us.
        </p>

        {/* Breadcrumb */}
        <p className="text-sm">
          <span className="opacity-80">Home</span>
          <span className="mx-2">›</span>
          <span className="font-semibold">About Us</span>
        </p>

      </div>
    </section>
  );
}
