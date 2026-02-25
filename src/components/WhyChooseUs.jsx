import { image } from '@/assets/assets';
import Image from 'next/image';
import React from 'react'
import { RiFacebookCircleFill, RiInstagramFill, RiWhatsappFill } from "react-icons/ri";

export default function WhyChooseUs() {
    return (
        <div className='flex flex-col md:flex-row justify-center lg:px-20 mt-10'>
            <div className='w-full md:w-3/4 mb-3'>
                <h2 className='text-3xl font-semibold'>Why Thousands of Travelers Choose <br className='hidden md:block' /><span className='font-bold text-red-600'>NORTHWAY TREKS</span> for Their Extreme Adventures.</h2>
                <p className='my-3 text-justify w-full md:w-[700px] italic leading-8 text-gray-700'>From breathtaking trails to personalized support, <span className='font-semibold text-red-600'>NORTHWAY TREKS</span> delivers adventure with trust, comfort, and memories that last a lifetime.With experienced local guides, carefully planned routes, top-quality safety standards, and a deep love for the mountains, we ensure every trek is thrilling yet reliable.</p>
                <div className='flex gap-5'>
                    <RiInstagramFill className='w-6 h-6 text-gray-800' />
                    <RiFacebookCircleFill className='w-6 h-6 text-gray-800' />
                    <RiWhatsappFill className='w-6 h-6 text-gray-800' />
                </div>
            </div>
            <div className="flex flex-col gap-6 w-full md:w-1/2 lg:w-1/3 text-white">
                {/* Card 1 */}
                <div className="flex items-center gap-4 bg-gray-600 rounded-xl p-2">
                    <div className="relative bg-white min-w-[80px] h-20 rounded-xl flex-shrink-0 overflow-hidden">
                        <Image
                            src={image.guide} // replace with your image
                            alt="thumbnail"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h3 className="font-semibold">Local Expertise</h3>
                        <p className="text-xs pt-1">
                            Led by experienced locals who know the trails and terrain perfectly.
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="flex items-center gap-4 bg-gray-600 rounded-xl p-2">
                    <div className="relative bg-white min-w-[80px] h-20 rounded-xl flex-shrink-0 overflow-hidden">
                        <Image
                            src={image.compass} // replace with your image
                            alt="thumbnail"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h3 className="font-semibold">All-in-One Booking</h3>
                        <p className="text-xs pt-1">
                            From pickup to summit, we handle it all.
                        </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="flex items-center gap-4 bg-gray-600 rounded-xl p-2">
                    <div className="relative bg-white min-w-[80px] h-20 rounded-xl flex-shrink-0 overflow-hidden">
                        <Image
                            src={image.support} // replace with your image
                            alt="thumbnail"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h3 className="font-semibold">24/7 Support</h3>
                        <p className="text-xs pt-1">
                            Help whenever you need it on the journey.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
