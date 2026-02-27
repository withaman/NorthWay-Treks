"use client";

import Image from "next/image";
import { image } from "@/assets/assets";
import { MapPin, Users, Globe, ShieldCheck, Mountain } from "lucide-react";

export default function About() {
  return (
    <div className="w-full bg-gray-50">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
        {/* Background Image */}
        <Image
          src={image.about}
          alt="About Us Background"
          fill
          priority
          className="object-cover"
        />

        {/* Green Overlay */}
        <div className="absolute inset-0 bg-green-900/10"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-6">
          <p className="uppercase tracking-widest text-sm mb-3 opacity-90">
            Welcome to Northway Treks
          </p>

          <h1 className="text-4xl lg:text-6xl font-bold mb-4">About Us</h1>

          <p className="text-sm lg:text-base opacity-90 mb-6">
            We provide unforgettable trekking and travel experiences with
            professional service and trusted local expertise.
          </p>

          <p className="text-sm">
            <span className="opacity-80">Home</span>
            <span className="mx-2">›</span>
            <span className="font-semibold">About Us</span>
          </p>
        </div>

        {/* Curved Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 500 110"
            preserveAspectRatio="none"
            className="w-full h-20"
          >
            <path
              d="M0,0 C150,80 350,0 500,80 L500,00 L0,0 Z"
              className="fill-gray-50"
            />
          </svg>
        </div>
      </section>

      {/* ================= SERVICE ICONS ================= */}
      <section className="relative -mt-12 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {[
              { icon: Mountain, label: "Adventure Treks" },
              { icon: MapPin, label: "Top Destinations" },
              { icon: Users, label: "Expert Guides" },
              { icon: Globe, label: "Pan India Tours" },
              { icon: ShieldCheck, label: "Safe & Secure" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-white shadow-lg rounded-full w-20 h-20 flex items-center justify-center">
                  <item.icon className="text-green-700" size={28} />
                </div>
                <p className="mt-3 font-medium text-gray-700 text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT CONTENT ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={image.about1}
              alt="About Northway Treks"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Northway Treks was founded with a passion for mountains and
              exploration. We specialize in Himalayan treks, nature adventures,
              and immersive cultural journeys.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our experienced team ensures safety, comfort, and authentic local
              experiences so that every traveler returns with unforgettable
              memories.
            </p>

            <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full transition">
              Explore Our Treks
            </button>
          </div>
        </div>
      </section>
      {/* ================= OUR TEAM SECTION ================= */}
      <section className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Heading */}
          <p className="uppercase tracking-widest text-sm text-green-700 mb-2">
            Meet Our Experts
          </p>

          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Team</h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Our experienced and passionate team ensures every journey is safe,
            enjoyable, and unforgettable.
          </p>

          {/* Team Cards */}
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                name: "Aman Rawat",
                role: "Founder & Trek Leader",
                image: "/team1.jpg",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="group bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >
                {/* Image */}
                <div className="relative h-50 w-60 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Info */}
                <div className="p-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-green-700 text-sm mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
