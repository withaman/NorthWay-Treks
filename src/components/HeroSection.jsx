"user client"
import React from 'react'
import { image } from "../assets/assets.js"
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative w-full py-4">
      <div className="relative w-full min-h-[100vh] lg:min-h-[85vh] rounded-3xl overflow-hidden">
        <Image
          alt="hero section"
          src={image.hero}
          fill
          priority
          className="object-cover"
        />
        {/* Overlay */}
        <div className="relative flex flex-col lg:flex-row bg-black/30 text-white min-h-[100vh] lg:min-h-[85vh]">
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-2/3 flex flex-col justify-center px-4 py-10 lg:py-0">
            <h1 className="text-6xl sm:text-6xl lg:text-7xl font-black tracking-tighter mb-4">
              Trek the Himalayas. Discover Your Limits.
            </h1>

            <p className="max-w-md text-base sm:text-lg mb-8 italic font-semibold">
              Discover breathtaking Himalayan destinations through expertly curated trekking tours. Explore scenic trails, remote villages, and iconic Himalayan landscapes across Uttarakhand with experienced local guides...
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-black px-6 py-3 rounded-full font-medium">
                Plan Your Trip
              </button>
              <button className="bg-white/20 backdrop-blur-md border border-white px-6 py-3 rounded-full font-medium">
                Explore Destinations
              </button>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="w-full lg:w-1/3 flex justify-center items-center px-4 pb-10 lg:pb-0">
            <form
              className="
      w-full max-w-md
      flex flex-col gap-3
      rounded-2xl
      px-6 py-6

      bg-white/15
      backdrop-blur-xl
      border border-white/30

      shadow-xl shadow-black/20
    "
            >
              <p className="text-lg font-semibold text-center text-white">
                Fill up the form and our travel experts will soon reach out to you.
              </p>

              {/* Inputs */}
              <input
                type="text"
                placeholder="Name"
                className="glass-input border p-2 rounded-full"
              />

              <input
                type="email"
                placeholder="Email"
                className="glass-input border p-2 rounded-full"
              />

              <input
                type="text"
                placeholder="Mobile"
                className="glass-input border p-2 rounded-full"
              />

              <textarea
                placeholder="Message"
                rows={3}
                className="glass-input resize-none border p-2 rounded-xl"
              />

              <p className="text-[11px] text-white/70">
                This site is protected by reCAPTCHA and the Google{" "}
                <span className="text-yellow-300 cursor-pointer">Privacy Policy</span> and{" "}
                <span className="text-yellow-300 cursor-pointer">Terms of Services</span> apply.
              </p>

              {/* Button */}
              <button
                className="
        mt-2
        rounded-full
        py-3
        font-medium
        text-white

        bg-white/20
        backdrop-blur-md
        border border-white/30

        hover:bg-white/30
        transition-all duration-300
      "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
