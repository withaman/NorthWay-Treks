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
            <form className="flex flex-col gap-5 border px-5 py-5 rounded-lg w-full max-w-md">
              <p className="text-lg font-bold">
                Fill up the form and our travel experts will soon reach out to you.
              </p>

              <input
                type="text"
                placeholder="Name"
                className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-xl outline-none text-lg font-semibold"
              />
              <input
                type="mail"
                placeholder="Email"
                className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-xl outline-none text-lg font-semibold"
              />
              <input
                type="text"
                placeholder="Mobile"
                className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-xl outline-none text-lg font-semibold"
              />
              <textarea
                placeholder="Message"
                className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-xl outline-none text-lg font-semibold"
              />

              <p className="text-[11px]">
                This site is protected by reCAPTCHA and the Google{" "}
                <span className="text-yellow-300">Privacy Policy</span> and{" "}
                <span className="text-yellow-300">Terms of Services</span> apply.
              </p>

              <button className="bg-white/20 backdrop-blur-md border border-white px-6 py-3 rounded-full font-medium">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
