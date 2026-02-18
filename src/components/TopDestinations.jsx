import React from 'react';
import Image from 'next/image';
import { image } from '@/assets/assets';

export default function TopDestinations() {
  return (
    <main className="py-5 px-4 md:px-10 ">
      {/*Header & Filters */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">Top Destination</h1>
        <p className="text-gray-500 italic font-medium">specific reasons why this should be your main goal</p>
      </div>

      {/*Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[200px]">
        
        {/* Wildlife Experience */}
        <div className="md:col-span-3 relative rounded-[2.5rem] overflow-hidden group">
          <Image 
            src={image.hero}
            alt="Komodo" 
            fill 
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
          <div className="absolute top-5 left-7 bg-white/30 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white font-bold">4.5</div>
          <div className="absolute bottom-8 left-8 text-white z-10">
            <h2 className="text-2xl font-bold">NTB</h2>
            <p className="text-[10px] opacity-90 uppercase tracking-[0.2em] font-semibold">Wildlife Experience</p>
          </div>
        </div>

        {/* Traditional Sumbanese Village (Tall Center) */}
        <div className="md:col-span-4 md:row-span-2 relative rounded-[2.5rem] overflow-hidden group">
          <Image 
            src={image.hero}
            alt="Village" 
            fill 
            priority
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
          <div className="absolute top-5 left-7 bg-white/30 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white font-bold">4.5</div>
          <div className="absolute bottom-10 left-8 text-white z-10">
            <h2 className="text-2xl font-bold">NTB</h2>
            <p className="text-[10px] opacity-90 uppercase tracking-[0.2em] font-semibold max-w-[150px] leading-relaxed">Traditional Sumbanese Village</p>
          </div>
        </div>

        {/* Misty Mountain Village (Top Wide) */}
        <div className="md:col-span-5 relative rounded-[2.5rem] overflow-hidden group">
          <Image 
            src={image.hero}
            alt="Misty" 
            fill 
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
          <div className="absolute top-5 left-7 bg-white/30 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white font-bold">4.5</div>
          <div className="absolute bottom-8 left-8 text-white z-10">
            <h2 className="text-2xl font-bold">NTB</h2>
            <p className="text-[10px] opacity-90 uppercase tracking-[0.2em] font-semibold">Misty Mountain Village</p>
          </div>
        </div>

        {/* Warrior Tradition (Bottom Left) */}
        <div className="md:col-span-3 relative rounded-[2.5rem] overflow-hidden group">
          <Image 
            src={image.hero}
            alt="Warrior" 
            fill 
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
          <div className="absolute top-5 left-7 bg-white/30 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white font-bold">4.5</div>
          <div className="absolute bottom-8 left-8 text-white z-10">
            <h2 className="text-2xl font-bold">NTB</h2>
            <p className="text-[10px] opacity-90 uppercase tracking-[0.2em] font-semibold">Warrior Tradition</p>
          </div>
        </div>

        {/* Waterfall (Small Bottom Center) */}
        <div className="md:col-span-2 relative rounded-[2.5rem] overflow-hidden group">
          <Image 
            src={image.hero}
            alt="Waterfall" 
            fill 
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
          <div className="absolute top-5 left-7 bg-white/30 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white font-bold">4.5</div>
          <div className="absolute bottom-8 left-8 text-white z-10">
            <h2 className="text-2xl font-bold">NTB</h2>
            <p className="text-[10px] opacity-90 uppercase tracking-[0.2em] font-semibold">Waterfall</p>
          </div>
        </div>

        {/* Traditional Attire (Bottom Right) */}
        <div className="md:col-span-3 relative rounded-[2.5rem] overflow-hidden group">
          <Image 
            src={image.hero}
            alt="Attire" 
            fill 
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
          <div className="absolute top-5 left-7 bg-white/30 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white font-bold">4.5</div>
          <div className="absolute bottom-8 left-8 text-white z-10">
            <h2 className="text-2xl font-bold">NTB</h2>
            <p className="text-[10px] opacity-90 uppercase tracking-[0.2em] font-semibold">Traditional Attire</p>
          </div>
        </div>

      </div>
    </main>
  );
}