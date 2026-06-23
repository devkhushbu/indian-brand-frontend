import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const COLLECTIONS = [
  {
    title: "Handloom",
    subtitle: "The ethnic elegance",
    bgColor: "bg-gradient-to-br from-orange-50/80 to-orange-100/30 dark:from-secondary/40 dark:to-background/20",
    glowOrb: "bg-orange-300/40 dark:bg-orange-500/20",
    textColor: "text-orange-950 dark:text-foreground",
    subTextColor: "text-orange-900/60 dark:text-muted-foreground",
    image: "/category-icon/Fashion.png",
  },
  {
    title: "Ayurveda",
    subtitle: "Skin Care, Hair Care...",
    bgColor: "bg-gradient-to-br from-green-50/80 to-green-100/30 dark:from-secondary/40 dark:to-background/20",
    glowOrb: "bg-green-300/40 dark:bg-green-500/20",
    textColor: "text-green-950 dark:text-foreground",
    subTextColor: "text-green-900/60 dark:text-muted-foreground",
    image: "/category-icon/Beauty.png",
  },
  {
    title: "Home Decor",
    subtitle: "Live with living",
    bgColor: "bg-gradient-to-br from-blue-50/80 to-blue-100/30 dark:from-secondary/40 dark:to-background/20",
    glowOrb: "bg-blue-300/40 dark:bg-blue-500/20",
    textColor: "text-blue-950 dark:text-foreground",
    subTextColor: "text-blue-900/60 dark:text-muted-foreground",
    image: "/category-icon/Home.png",
  },
  {
    title: "Menswear",
    subtitle: "The ethnic styling",
    bgColor: "bg-gradient-to-br from-slate-50/80 to-slate-100/30 dark:from-secondary/40 dark:to-background/20",
    glowOrb: "bg-slate-300/40 dark:bg-slate-500/20",
    textColor: "text-slate-900 dark:text-foreground",
    subTextColor: "text-slate-600 dark:text-muted-foreground",
    image: "/category-icon/Bags.png",
  },
  {
    title: "Organic Food",
    subtitle: "Bite of health",
    bgColor: "bg-gradient-to-br from-amber-50/80 to-amber-100/30 dark:from-secondary/40 dark:to-background/20",
    glowOrb: "bg-amber-300/40 dark:bg-amber-500/20",
    textColor: "text-amber-950 dark:text-foreground",
    subTextColor: "text-amber-900/70 dark:text-muted-foreground",
    image: "/category-icon/Groceries.png",
  },
  {
    title: "Indian Craft",
    subtitle: "Piece making at its peak",
    bgColor: "bg-gradient-to-br from-rose-50/80 to-rose-100/30 dark:from-secondary/40 dark:to-background/20",
    glowOrb: "bg-rose-300/40 dark:bg-rose-500/20",
    textColor: "text-rose-950 dark:text-foreground",
    subTextColor: "text-rose-900/60 dark:text-muted-foreground",
    image: "/category-icon/Gifts.png",
  },
];

export function HomeCollections() {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-4 md:px-8 py-4 mb-2">
      {/* Header */}
      <div className="flex flex-row justify-between items-center mb-4 gap-2">
        <h2 className="text-base sm:text-lg md:text-[22px] font-bold uppercase tracking-tight text-foreground whitespace-nowrap">
          Indian Collections
        </h2>
        <a 
          href="#" 
          className="flex items-center text-[12px] sm:text-[13px] font-semibold text-muted-foreground hover:text-primary transition-colors text-right"
        >
          View all <span className="hidden sm:inline ml-1">collections</span> <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-0.5" />
        </a>
      </div>

      {/* Collections Grid / Scroll Area */}
      <div className="relative w-full mt-2 md:mt-4">
        <div className="flex xl:grid xl:grid-cols-6 gap-3 md:gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden">
          {COLLECTIONS.map((collection, index) => (
            <div
              key={index}
              className={`relative h-[160px] md:h-[180px] w-[220px] sm:w-[240px] xl:w-auto shrink-0 snap-center xl:snap-align-none rounded-[20px] overflow-hidden cursor-pointer group transition-all duration-500 border border-white/60 dark:border-white/10 hover:shadow-lg hover:shadow-black/5 ${collection.bgColor} backdrop-blur-md`}
            >
              {/* Soft Glowing Orbs (Mix Blend) */}
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[30px] -mr-10 -mt-10 transition-transform duration-700 ease-out group-hover:scale-150 ${collection.glowOrb} mix-blend-multiply dark:mix-blend-screen`} />
              <div className={`absolute bottom-0 left-0 w-24 h-24 rounded-full blur-[24px] -ml-8 -mb-8 transition-transform duration-700 ease-out group-hover:scale-150 ${collection.glowOrb} mix-blend-multiply dark:mix-blend-screen opacity-70`} />

              {/* Text Content */}
              <div className="absolute top-4 left-4 z-10 w-[70%] drop-shadow-sm">
                <h3 className={`font-bold text-[15px] md:text-[17px] tracking-tight leading-tight mb-1 ${collection.textColor}`}>
                  {collection.title}
                </h3>
                <p className={`text-[11px] md:text-[12px] leading-snug font-medium ${collection.subTextColor}`}>
                  {collection.subtitle}
                </p>
              </div>

              {/* Image Container */}
              <div className="absolute bottom-0 right-0 w-[85%] h-[85%] flex items-end justify-end pointer-events-none transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-x-2 group-hover:-translate-y-1 z-10">
                {collection.image && (
                  <Image 
                    src={collection.image} 
                    alt={collection.title} 
                    fill 
                    className="object-contain object-bottom drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]"
                    sizes="(max-width: 768px) 200px, 250px"
                    priority={index < 4}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      

    </section>
  );
}
