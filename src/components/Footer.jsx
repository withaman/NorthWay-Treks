import { image } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  RiCellphoneFill,
  RiInstagramFill,
  RiMailFill,
} from 'react-icons/ri'

export default function Footer() {
  return (
    <footer className="relative w-full min-h-[50vh] flex items-center">
      
      {/* Background Image */}
      <Image
        src={image.hero}
        alt="Northway Treks"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-evenly w-full mx-auto px-6 py-12 gap-10 text-white">

        {/* Brand Section */}
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-semibold">NorthWay Treks</h1>
          <p className="italic text-lg leading-relaxed w-84">
            Every trail with Northway Treks is a journey into nature, culture,
            and unforgettable Himalayan memories.
          </p>
        </div>

            {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link href="/pack" className="hover:text-gray-300">Packages</Link></li>
            <li><Link href="/about" className="hover:text-gray-300">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-gray-300">About Us</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Contact</h3>

          <ul className="flex flex-col gap-4 text-sm">

            {/* Phone */}
            <li className="flex items-center gap-3 group">
              <RiCellphoneFill className="text-xl" />
              <a href="tel:+91994903093" className="hover:text-gray-300">
                +91 99490 3093
              </a>
            </li>

            {/* Email */}
            <li className="flex items-center gap-3 group">
              <RiMailFill className="text-xl" />
              <a
                href="mailto:northwaytrek@gmail.com"
                className="hover:text-gray-300"
              >
                northwaytrek@gmail.com
              </a>
            </li>

            {/* Instagram */}
            <li className="flex items-center gap-3 group">
              <RiInstagramFill className="text-xl" />
              <a
                href="https://instagram.com/northwaytrek"
                target="_blank"
                className="hover:text-gray-300"
              >
                @northwaytrek
              </a>
            </li>
          </ul>
        </div>
        </div>
    </footer>
  )
}
