import { image } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div className="relative w-full min-h-[40vh] md:min-h-[50vh] flex items-center">

            {/* Background Image */}
            <Image
                src={image.hero}   // put image in /public/images
                alt="Northway Treks"
                fill
                priority
                className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative w-full flex flex-col md:flex-row justify-evenly z-10 px-0 md:px-0">
                <div className='flex flex-col gap-2 w-96'>
                    <h1 className='text-white text-base md:text-4xl leading-relaxed'>NorthWay Treks</h1>
                    <p>Every trail with Northway Treks is a journey into nature, culture, and unforgettable Himalayan memories.</p></div>
                <div className=''>
                    <h3 className='text-white text-lg font-semibold mb-2'>Quick Links</h3>
                    <ul className="flex flex-col items-start md:items-center text-white gap-4">
                        <li><Link href="/" className="" >Home</Link></li>
                        <li><Link href="/trails" className="" >Trails</Link></li>
                        <li><Link href="/pack" className="" >Packages</Link></li>
                        <li><Link href="/about" className="" >About Us</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
