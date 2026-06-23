"use client";

import { Heart, Search, ShoppingCart, MapPin, ChevronRight, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "@/app/(landing-page)/_components/mobile-nav";
import { allCategories } from "@/app/(landing-page)/_components/nav-data";

export function MobileHeader() {
  return (
    <div className="md:hidden flex flex-col w-full font-sans relative pb-2 z-10">
      {/* Animated Background with exact opacity fade mask to match original gradient fade */}
      <div className="absolute inset-0 bg-animated-gradient z-[-1] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.3)_50%,transparent_100%)] -webkit-mask-image-[linear-gradient(to_bottom,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.3)_50%,transparent_100%)] pointer-events-none"></div>
      {/* App Download Banner */}
      <div className="flex items-center justify-between px-3 py-2 bg-transparent">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-10 bg-primary rounded-md flex items-center justify-center text-primary-foreground font-bold relative overflow-hidden">
            <Smartphone className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-[13px] font-bold text-foreground leading-tight">Extra 35% off on First Order</span>
            <span className="text-[11px] text-muted-foreground">Only on app</span>
          </div>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-primary-foreground text-[11px] font-bold px-3 py-1.5 rounded-md transition-colors">
          Download Now
        </button>
      </div>

      {/* Main Header */}
      <div className="flex items-center justify-between px-3 py-2 bg-transparent">
        <div className="flex items-center space-x-2">
          <MobileNav />
          <Link href="/" className="flex flex-col items-start">
             <span className="text-[22px] font-extrabold text-foreground tracking-tight leading-none">
               Indian<span className="text-primary">Brand</span><span className="text-[11px] font-semibold">.in</span>
             </span>
             <span className="text-[8px] text-muted-foreground font-medium tracking-wide mt-0.5">
               Discover India. Buy India. Grow India.
             </span>
          </Link>
        </div>
        
        {/* Right Side Icons */}
        <div className="flex items-center space-x-3">
          <Link href="/wishlist" className="flex flex-col items-center group">
            <div className="flex items-center justify-center h-8 w-8 bg-primary/5 rounded-full border border-primary/10 group-hover:bg-primary/10 transition-colors mb-0.5">
              <Heart className="h-4 w-4 text-foreground group-hover:text-primary transition-colors" />
            </div>
            <span className="text-[8px] font-bold text-muted-foreground group-hover:text-primary transition-colors">Wishlist</span>
          </Link>
          <Link href="/cart" className="relative flex flex-col items-center group">
            <div className="flex items-center justify-center h-8 w-8 bg-primary/5 rounded-full border border-primary/10 group-hover:bg-primary/10 transition-colors mb-0.5">
              <ShoppingCart className="h-4 w-4 text-foreground group-hover:text-primary transition-colors" />
              <span className="absolute -top-1 -right-0.5 bg-primary text-primary-foreground text-[8px] font-bold h-[14px] w-[14px] flex items-center justify-center rounded-full border border-background shadow-sm">
                0
              </span>
            </div>
            <span className="text-[8px] font-bold text-muted-foreground group-hover:text-primary transition-colors">Cart</span>
          </Link>
        </div>
      </div>

      {/* Search */}
      <div className="px-4 py-3 bg-transparent">
        <div className="flex items-center w-full border-2 border-primary/60 rounded-xl px-3 py-2.5 bg-background shadow-sm focus-within:ring-4 focus-within:ring-primary/10 focus-within:border-primary transition-all">
          <Search className="h-5 w-5 text-primary mr-2" />
          <input 
            type="text" 
            placeholder="Search for Sarees, Kurtis, Cosmetics, etc." 
            className="flex-1 outline-none text-[13px] text-foreground bg-transparent placeholder:text-muted-foreground"
          />
        </div>
      </div>

      {/* Delivery Location */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-transparent mb-1 cursor-pointer hover:bg-black/5 transition-colors">
        <div className="flex items-center space-x-2">
          <MapPin className="h-[18px] w-[18px] text-primary" />
          <span className="text-xs font-semibold text-foreground">Add delivery location to check extra discount</span>
        </div>
        <div className="flex -space-x-1 text-muted-foreground/60">
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
          <span className="text-[10px] text-center font-medium text-foreground w-[56px] leading-tight line-clamp-2 group-hover:text-primary transition-colors">
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
            <span className="text-[10px] text-center font-medium text-foreground w-[56px] leading-tight line-clamp-2 group-hover:text-primary transition-colors">
              {cat.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
