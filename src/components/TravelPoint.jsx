
import { image } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'



export default function TravelPoint() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center px-4 py-5">

      {/* IMAGE SECTION */}
      <div className="w-full md:w-1/2 flex justify-center relative mb-10 md:mb-0">
        <Image
          src={image.t1}
          alt="travel point"
          width={320}
          height={320}
          className="rounded-full object-cover md:absolute md:top-[-250px]"
        />

        <Image
          src={image.t2}
          alt="travel point"
          width={280}
          height={280}
          className="rounded-full object-cover border-4 border-white absolute top-35 md:top-[-50px] md:left-20"
        />
      </div>

      {/* TEXT SECTION */}
      <div className="w-full mt-23 md:mt-0 md:w-1/2 text-center md:text-left">
        <h2 className="text-yellow-400 font-semibold text-md">TravelPoint</h2>

        <p className="text-3xl md:text-4xl font-bold tracking-wider md:w-[500px] mx-auto md:mx-0">
          We Helping You Find Your Dream Vacation
        </p>

        <div className="flex flex-col justify-start mt-4 space-y-4">

          <div className="md:w-[550px]">
            <h3 className="font-semibold">🌄 Adventure-Focused</h3>
            <p className="italic">
              We curate unforgettable trekking experiences that take you closer to nature, adventure, and yourself—one trail at a time.
            </p>
            <hr className="bg-gray-700 h-[2px] w-50 m-auto md:mr-0 my-2 md:block" />
          </div>

          <div className="md:w-[550px]">
            <h3 className="font-semibold">🏔️ Emotional & Inspiring</h3>
            <p className="italic">
              From peaceful mountain trails to thrilling high-altitude adventures, we help you turn your travel dreams into lifelong memories.
            </p>
            <hr className="bg-gray-700 h-[2px] w-50 m-auto md:mr-0 my-2 md:block" />
          </div>

          <div className="md:w-[550px]">
            <h3 className="font-semibold">🧭 Professional & Trust-Building</h3>
            <p className="italic">
              Expert-planned treks, experienced guides, and seamless journeys—so you can focus on enjoying the mountains while we handle the rest.
            </p>
            <hr className="bg-gray-700 h-[2px] w-50 m-auto md:mr-0 my-2 md:block" />
          </div>

          <div className="md:w-[550px]">
            <h3 className="font-semibold">🥾 Youth & Explorer Vibe</h3>
            <p className="italic">
              Your journey to the mountains starts here—guided treks, raw nature, and stories worth telling.
            </p>
          </div>

        </div>
      </div>
    </div>

  )
}
