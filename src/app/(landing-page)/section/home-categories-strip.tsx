import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { allCategories } from "@/app/(landing-page)/_components/nav-data";

export function HomeCategoriesStrip() {
  return (
    <section className="hidden lg:block w-full max-w-[1600px] mx-auto px-4 md:px-8 py-4 mb-2">
      {/* Header */}
      <div className="flex flex-row justify-between items-center mb-4 gap-2">
        <h2 className="text-base sm:text-[20px] font-bold uppercase tracking-wide text-foreground whitespace-nowrap">
          TOP CATEGORIES
        </h2>
        <a 
          href="#" 
          className="flex items-center text-[12px] sm:text-[14px] font-semibold text-foreground hover:text-primary transition-colors text-right"
        >
          View all <span className="hidden sm:inline ml-1">categories</span> <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-0.5" />
        </a>
      </div>

      {/* Categories Row */}
      <div className="flex justify-start xl:justify-center items-start gap-4 xl:gap-6 w-full overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden">
        {/* All Categories - Always First */}
        <div className="flex flex-col items-center gap-3 cursor-pointer group shrink-0">
          <div className="relative w-[110px] h-[110px] rounded-full overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:shadow-sm bg-pink-50/80 dark:bg-pink-950/40 backdrop-blur-sm">
            {/* Soft Glowing Orbs (Mix Blend) */}
            <div className="absolute top-0 right-0 w-16 h-16 rounded-full blur-[15px] -mr-4 -mt-4 transition-transform duration-700 ease-out group-hover:scale-150 bg-pink-300/40 dark:bg-pink-500/20 mix-blend-multiply dark:mix-blend-screen pointer-events-none z-0" />
            <div className="absolute bottom-0 left-0 w-12 h-12 rounded-full blur-[12px] -ml-2 -mb-2 transition-transform duration-700 ease-out group-hover:scale-150 bg-pink-300/40 dark:bg-pink-500/20 mix-blend-multiply dark:mix-blend-screen opacity-70 pointer-events-none z-0" />

            {/* Image */}
            <div className="relative w-[85%] h-[85%] transition-transform duration-300 group-hover:scale-110 z-10">
              <Image
                src="/category-icon/all-category-icon.webp"
                alt="All Categories"
                fill
                className="object-contain"
                sizes="100px"
              />
            </div>
          </div>
          <span className="text-[14px] font-semibold text-foreground/90 group-hover:text-primary transition-colors text-center leading-tight">
            All<br />Categories
          </span>
        </div>

        {allCategories.map((category, index) => (
          <div key={index} className="flex flex-col items-center gap-3 cursor-pointer group shrink-0">
            <div className={`relative w-[110px] h-[110px] rounded-full overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:shadow-sm ${category.bgColor} backdrop-blur-sm`}>
              
              {/* Soft Glowing Orbs (Mix Blend) */}
              {category.glowOrb && (
                <>
                  <div className={`absolute top-0 right-0 w-16 h-16 rounded-full blur-[15px] -mr-4 -mt-4 transition-transform duration-700 ease-out group-hover:scale-150 ${category.glowOrb} mix-blend-multiply dark:mix-blend-screen pointer-events-none z-0`} />
                  <div className={`absolute bottom-0 left-0 w-12 h-12 rounded-full blur-[12px] -ml-2 -mb-2 transition-transform duration-700 ease-out group-hover:scale-150 ${category.glowOrb} mix-blend-multiply dark:mix-blend-screen opacity-70 pointer-events-none z-0`} />
                </>
              )}

              {/* Image */}
              <div className="relative w-[85%] h-[85%] transition-transform duration-300 group-hover:scale-110 z-10">
                <Image
                  src={category.imgUrl}
                  alt={category.title}
                  fill
                  className="object-contain"
                  sizes="100px"
                />
              </div>
            </div>
            <span className="text-[14px] font-semibold text-foreground/90 group-hover:text-primary transition-colors text-center leading-tight">
              {category.title.includes(" ") ? (
                <>
                  {category.title.split(" ")[0]}<br />{category.title.split(" ")[1] || ""}
                </>
              ) : (
                category.title
              )}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
