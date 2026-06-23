"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HomeInitiatives() {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-4 md:px-8 py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
        
        {/* Card 1: Behind Every Brand */}
        <div className="relative bg-[#FDF8F3] dark:bg-gray-900 rounded-xl p-6 md:p-8 flex flex-col justify-between overflow-hidden min-h-[260px] md:min-h-[280px] group transition-all">
          {/* Mix Blend Glowing Orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[60px] -mr-16 -mt-16 bg-orange-300/40 dark:bg-orange-500/20 mix-blend-multiply dark:mix-blend-screen pointer-events-none z-0 transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-[40px] -ml-12 -mb-12 bg-rose-300/40 dark:bg-rose-500/20 mix-blend-multiply dark:mix-blend-screen opacity-70 pointer-events-none z-0 transition-transform duration-700 group-hover:scale-110" />

          <div className="relative z-10 w-[60%] flex flex-col h-full">
            <div>
              <h3 className="text-[15px] md:text-[16px] font-bold text-gray-900 mb-2.5 tracking-wide">BEHIND EVERY BRAND</h3>
              <p className="text-[14px] text-gray-800 mb-6 leading-relaxed">
                There is a passionate<br/>Indian story.
              </p>
            </div>
            <div className="mt-auto">
              <Link href="/stories" className="inline-flex items-center px-4 py-2 border border-[#EAC2A5] rounded-[4px] text-[13px] font-medium text-gray-800 hover:bg-white transition-colors w-fit">
                Read Stories <ArrowRight className="w-3.5 h-3.5 ml-2 text-primary" />
              </Link>
            </div>
          </div>
          {/* Collage Images (Absolute) */}
          <div className="absolute right-0 bottom-0 w-[55%] h-full flex items-end justify-end pointer-events-none">
            <div className="relative w-full h-[110%] mr-2 mb-2">
              {/* Top Photo */}
              <div className="absolute top-[5%] right-[12%] w-[100px] h-[100px] bg-white border-[3px] border-white shadow-sm rounded-sm rotate-6 z-10 group-hover:rotate-12 group-hover:scale-105 transition-all duration-500">
                <div className="relative w-full h-full bg-gray-200 overflow-hidden">
                   <Image src="https://picsum.photos/seed/artisan1/200/200" alt="Artisan 1" fill className="object-cover" unoptimized />
                </div>
              </div>
              {/* Bottom Left Photo */}
              <div className="absolute bottom-[10%] left-[5%] w-[95px] h-[120px] bg-white border-[3px] border-white shadow-sm rounded-sm -rotate-3 z-20 group-hover:-rotate-6 group-hover:scale-105 transition-all duration-500">
                <div className="relative w-full h-full bg-gray-200 overflow-hidden">
                   <Image src="https://picsum.photos/seed/artisan2/200/250" alt="Artisan 2" fill className="object-cover" unoptimized />
                </div>
              </div>
              {/* Bottom Right Photo */}
              <div className="absolute bottom-[5%] right-[5%] w-[100px] h-[95px] bg-white border-[3px] border-white shadow-sm rounded-sm rotate-3 z-30 group-hover:rotate-6 group-hover:scale-105 transition-all duration-500">
                <div className="relative w-full h-full bg-gray-200 overflow-hidden">
                   <Image src="https://picsum.photos/seed/artisan3/250/200" alt="Artisan 3" fill className="object-cover" unoptimized />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Become a Seller */}
        <div className="relative bg-[#FDF8F3] dark:bg-gray-900 rounded-xl p-6 md:p-8 flex flex-col justify-between overflow-hidden min-h-[260px] md:min-h-[280px] group transition-all">
          {/* Mix Blend Glowing Orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[60px] -mr-16 -mt-16 bg-blue-300/40 dark:bg-blue-500/20 mix-blend-multiply dark:mix-blend-screen pointer-events-none z-0 transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-[40px] -ml-12 -mb-12 bg-indigo-300/40 dark:bg-indigo-500/20 mix-blend-multiply dark:mix-blend-screen opacity-70 pointer-events-none z-0 transition-transform duration-700 group-hover:scale-110" />

          <div className="relative z-10 w-[60%] flex flex-col h-full">
            <div>
              <h3 className="text-[15px] md:text-[16px] font-bold text-gray-900 mb-2.5 tracking-wide">BECOME A SELLER</h3>
              <p className="text-[14px] text-gray-800 mb-6 leading-relaxed">
                Grow your brand with<br/>India&apos;s trusted platform.
              </p>
            </div>
            <div className="mt-auto">
              <Link href="/seller" className="inline-flex items-center px-4 py-2 border border-[#EAC2A5] rounded-[4px] text-[13px] font-medium text-gray-800 hover:bg-white transition-colors w-fit">
                Join Now <ArrowRight className="w-3.5 h-3.5 ml-2 text-primary" />
              </Link>
            </div>
          </div>
          {/* Seller Image (Absolute) */}
          <div className="absolute right-0 bottom-0 w-[55%] h-[95%] flex items-end justify-end pointer-events-none">
            <div className="relative w-full h-full overflow-hidden flex items-end justify-center">
               <Image src="https://picsum.photos/seed/seller/300/400" alt="Seller" width={200} height={300} className="object-cover object-top h-full w-auto group-hover:scale-105 transition-transform duration-500 [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]" unoptimized />
            </div>
          </div>
        </div>

        {/* Card 3: Vocal for Local */}
        <div className="relative bg-[#FDF8F3] dark:bg-gray-900 rounded-xl p-6 md:p-8 flex flex-col justify-between overflow-hidden min-h-[260px] md:min-h-[280px] group transition-all">
          {/* Mix Blend Glowing Orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[60px] -mr-16 -mt-16 bg-pink-300/40 dark:bg-pink-500/20 mix-blend-multiply dark:mix-blend-screen pointer-events-none z-0 transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-[40px] -ml-12 -mb-12 bg-orange-300/40 dark:bg-orange-500/20 mix-blend-multiply dark:mix-blend-screen opacity-70 pointer-events-none z-0 transition-transform duration-700 group-hover:scale-110" />

          <div className="relative z-10 w-[60%] flex flex-col h-full">
            <div>
              <h3 className="text-[15px] md:text-[16px] font-bold text-gray-900 mb-2.5 tracking-wide">VOCAL FOR LOCAL</h3>
              <p className="text-[14px] text-gray-800 mb-6 leading-relaxed">
                Every purchase<br/>empowers India.
              </p>
            </div>
            <div className="mt-auto">
              <Link href="/vocal-for-local" className="inline-flex items-center px-4 py-2 border border-[#EAC2A5] rounded-[4px] text-[13px] font-medium text-gray-800 hover:bg-white transition-colors w-fit">
                Know More <ArrowRight className="w-3.5 h-3.5 ml-2 text-primary" />
              </Link>
            </div>
          </div>
          {/* Map Image (Absolute) */}
          <div className="absolute right-[-10%] top-0 w-[60%] h-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="relative w-[120%] h-[120%] mix-blend-multiply flex items-center justify-center">
               <Image src="https://picsum.photos/seed/indiamap/300/300" alt="India Map" fill className="object-contain group-hover:scale-105 transition-transform duration-500 opacity-20" unoptimized />
               <div className="absolute inset-0 flex items-center justify-center -mt-4 ml-2">
                 <div className="w-4 h-4 bg-primary/20 rounded-full animate-ping absolute"></div>
                 <div className="w-3 h-3 text-primary flex items-center justify-center">
                   <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                     <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                   </svg>
                 </div>
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
