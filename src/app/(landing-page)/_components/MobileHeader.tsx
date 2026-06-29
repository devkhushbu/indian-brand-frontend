"use client";

import { Heart, Search, ShoppingBag, MapPin, ChevronRight, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "@/app/(landing-page)/_components/mobile-nav";
import { allCategories } from "@/app/(landing-page)/_components/nav-data";

export function MobileHeader() {
  return (
    <div className="md:hidden flex flex-col w-full font-sans bg-[#F7BA01] dark:bg-zinc-950 border-b border-black/10 dark:border-zinc-850 relative pb-2.5 z-10 select-none">
      
      {/* App Download Banner */}
      <div className="flex items-center justify-between px-3 py-2 bg-black/5 dark:bg-white/5 border-b border-black/5 dark:border-white/5">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-9 bg-black/5 dark:bg-white/5 rounded flex items-center justify-center text-black dark:text-white font-bold">
            <Smartphone className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-[12px] font-bold text-black dark:text-white leading-tight">Extra 35% off on First Order</span>
            <span className="text-[10px] text-black/60 dark:text-zinc-400">Only on app</span>
          </div>
        </div>
        <button className="bg-black hover:bg-black/90 dark:bg-[#F7BA01] dark:hover:bg-[#F7BA01]/90 text-white dark:text-black text-[11px] font-extrabold px-3 py-1.5 rounded transition-colors cursor-pointer border-none outline-none">
          Download Now
        </button>
      </div>

      {/* Main Header */}
      <div className="flex items-center justify-between px-3 py-2 bg-transparent">
        <div className="flex items-center space-x-2">
          <MobileNav />
          <Link href="/" className="flex flex-col items-start">
             <span className="text-[22px] font-extrabold text-black dark:text-white tracking-tight leading-none">
               Indian<span className="text-white dark:text-[#F7BA01]">Brand</span><span className="text-[11px] font-bold">.in</span>
             </span>
             <span className="text-[8.5px] text-black/60 dark:text-zinc-400 font-semibold tracking-wide mt-0.5">
               Discover India. Buy India. Grow India.
             </span>
          </Link>
        </div>
        
        {/* Right Side Icons */}
        <div className="flex items-center space-x-2.5">
          <Link href="/wishlist" className="relative flex items-center justify-center h-9 w-9 bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 rounded-full transition-all group cursor-pointer select-none">
            <Heart className="h-4.5 w-4.5 text-black dark:text-white stroke-[1.5]" />
            <span className="absolute -bottom-1 -right-1 bg-black text-white text-[8px] font-bold h-4 w-4 flex items-center justify-center rounded-full shadow-sm">
              0
            </span>
          </Link>
          <Link href="/cart" className="relative flex items-center justify-center h-9 w-9 bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 rounded-full transition-all group cursor-pointer select-none">
            <ShoppingBag className="h-4.5 w-4.5 text-black dark:text-white stroke-[1.5]" />
            <span className="absolute -bottom-1 -right-1 bg-black text-white text-[8px] font-bold h-4 w-4 flex items-center justify-center rounded-full shadow-sm">
              0
            </span>
          </Link>
        </div>
      </div>

      {/* Search */}
      <div className="px-3.5 py-2 bg-transparent">
        <div className="flex items-center w-full bg-white dark:bg-zinc-900 border border-transparent dark:border-zinc-800 rounded-md px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-black/15 transition-all">
          <Search className="h-4.5 w-4.5 text-gray-400 mr-2" />
          <input 
            type="text" 
            placeholder="Search for Sarees, Kurtis, Cosmetics, etc..." 
            className="flex-1 outline-none text-[13px] text-black dark:text-white bg-transparent placeholder:text-gray-400 dark:placeholder:text-zinc-500 font-semibold"
          />
        </div>
      </div>

      {/* Delivery Location */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-transparent cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
        <div className="flex items-center space-x-2">
          <MapPin className="h-4.5 w-4.5 text-black dark:text-white" />
          <span className="text-xs font-bold text-black/75 dark:text-zinc-300">Add delivery location to check extra discount</span>
        </div>
        <div className="flex -space-x-1 text-black/40 dark:text-zinc-500">
            <ChevronRight className="h-4 w-4" />
            <ChevronRight className="h-4 w-4" />
            <ChevronRight className="h-4 w-4" />
        </div>
      </div>

      {/* Scrollable Categories */}
      <div className="flex overflow-x-auto hide-scrollbar px-4 pb-2 space-x-4 bg-transparent">
        {/* All Categories - Always First */}
        <div className="flex flex-col items-center shrink-0 group cursor-pointer">
          <div className="relative w-[56px] h-[56px] rounded-full overflow-hidden flex items-center justify-center mb-1 group-hover:scale-105 transition-transform duration-300 bg-pink-50/80 dark:bg-pink-950/40 backdrop-blur-sm">
            {/* Soft Glowing Orbs */}
            <div className={`absolute top-0 right-0 w-8 h-8 rounded-full blur-[8px] -mr-2 -mt-2 bg-pink-300/40 dark:bg-pink-500/20 mix-blend-multiply dark:mix-blend-screen pointer-events-none z-0`} />
            <div className={`absolute bottom-0 left-0 w-6 h-6 rounded-full blur-[6px] -ml-1 -mb-1 bg-pink-300/40 dark:bg-pink-500/20 mix-blend-multiply dark:mix-blend-screen opacity-70 pointer-events-none z-0`} />
            
            <div className="relative w-[85%] h-[85%] z-10">
              <Image src="/category-icon/all-category-icon.webp" alt="All Categories" fill className="object-contain" unoptimized />
            </div>
          </div>
          <span className="text-[10px] text-center font-bold text-black/85 dark:text-zinc-300 w-[56px] leading-tight line-clamp-2 group-hover:text-black dark:group-hover:text-white transition-colors">
            All Categories
          </span>
        </div>

        {allCategories.map((cat, index) => (
          <Link href={cat.href} key={index} className="flex flex-col items-center shrink-0 group cursor-pointer">
            <div className={`relative w-[56px] h-[56px] rounded-full overflow-hidden flex items-center justify-center mb-1 group-hover:scale-105 transition-transform duration-300 backdrop-blur-sm ${cat.bgColor || 'bg-primary/10'}`}>
               {/* Soft Glowing Orbs */}
               {cat.glowOrb && (
                 <>
                   <div className={`absolute top-0 right-0 w-8 h-8 rounded-full blur-[8px] -mr-2 -mt-2 ${cat.glowOrb} mix-blend-multiply dark:mix-blend-screen pointer-events-none z-0`} />
                   <div className={`absolute bottom-0 left-0 w-6 h-6 rounded-full blur-[6px] -ml-1 -mb-1 ${cat.glowOrb} mix-blend-multiply dark:mix-blend-screen opacity-70 pointer-events-none z-0`} />
                 </>
               )}
               
               <div className="relative w-[85%] h-[85%] z-10">
                 {cat.imgUrl && <Image src={cat.imgUrl} alt={cat.title} fill className="object-contain" unoptimized />}
               </div>
            </div>
            <span className="text-[10px] text-center font-bold text-black/85 dark:text-zinc-300 w-[56px] leading-tight line-clamp-2 group-hover:text-black dark:group-hover:text-white transition-colors">
              {cat.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
