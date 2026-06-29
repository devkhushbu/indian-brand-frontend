"use client";
import React from "react";
import { ProductCard } from "./_components/product-card";
import { popularProducts } from "@/data/product-data";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const HomeProductsShowcase = () => {
  const popularScrollRef = React.useRef<HTMLDivElement>(null);
  const newScrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (ref: React.RefObject<HTMLDivElement | null>, direction: "left" | "right") => {
    if (ref.current) {
      const scrollAmount = 460; // Scroll approximately 2 card widths
      ref.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="w-full max-w-[1600px] mx-auto px-4 md:px-8 py-4 md:py-6 relative">
      <div className="flex flex-col gap-10 md:gap-12 min-w-0">
        
        {/* 1. Popular Products Area */}
        <div className="flex flex-col gap-2 md:gap-4 min-w-0">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 md:gap-6 border-b pb-2 md:pb-4">
            <div className="shrink-0">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-foreground">Popular Products</h2>
              <p className="text-[13px] md:text-[15px] text-muted-foreground mt-1">Do not miss the current offers until the end of March.</p>
            </div>
            
            {/* Horizontal Scrollable Categories */}
            <div className="relative w-full md:w-[400px] lg:w-[450px] xl:w-[500px] shrink-0 ml-auto">
              <div className="flex items-center gap-4 md:gap-6 text-[14px] md:text-[15px] font-semibold overflow-x-auto pb-1 w-full snap-x scroll-smooth [&::-webkit-scrollbar]:hidden pr-10 md:pr-12">
                {["Books", "Furniture", "Home", "Bags", "Stationery", "Beauty", "Sports", "Gadgets"].map((category, index) => (
                  <button 
                    key={category} 
                    className={`whitespace-nowrap transition-colors snap-start shrink-0 ${index === 0 ? 'text-[#fcb800] border-b-2 border-[#fcb800] pb-1 md:ml-auto' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              {/* Floating Right Arrow */}
              <div className="flex absolute right-0 top-0 bottom-1 items-center justify-end bg-background pl-2">
                <button 
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center w-7 h-7 rounded-full bg-muted hover:bg-muted/80"
                  onClick={(e) => {
                    const container = e.currentTarget.parentElement?.previousElementSibling;
                    if (container) container.scrollBy({ left: 200, behavior: 'smooth' });
                  }}
                >
                  <ChevronRight className="w-4 h-4 ml-0.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Popular Products List Container with Side Navigation Arrows */}
          <div className="relative w-full mt-1 group/list">
            {/* Left Scroll Button */}
            <button 
              onClick={() => scroll(popularScrollRef, "left")}
              className="absolute left-0 top-[38%] -translate-y-1/2 z-20 h-10 w-10 bg-white dark:bg-zinc-900 border border-border rounded-full flex items-center justify-center shadow-lg text-foreground hover:bg-[#fcb800] hover:text-white hover:border-[#fcb800] transition-all duration-300 opacity-0 group-hover/list:opacity-100 cursor-pointer -ml-4"
              title="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right Scroll Button */}
            <button 
              onClick={() => scroll(popularScrollRef, "right")}
              className="absolute right-0 top-[38%] -translate-y-1/2 z-20 h-10 w-10 bg-white dark:bg-zinc-900 border border-border rounded-full flex items-center justify-center shadow-lg text-foreground hover:bg-[#fcb800] hover:text-white hover:border-[#fcb800] transition-all duration-300 opacity-0 group-hover/list:opacity-100 cursor-pointer -mr-4"
              title="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div 
              ref={popularScrollRef}
              className="flex gap-2 md:gap-4 overflow-x-auto px-2 pb-8 pt-4 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden -mx-2"
            >
              {popularProducts.map((product) => (
                <ProductCard 
                  key={product.id}
                  title={product.title}
                  shortDescription={product.shortDescription}
                  image={product.image}
                  hoverImage={product.hoverImage}
                  inStock={product.inStock}
                  rating={product.rating}
                  originalPrice={product.originalPrice}
                  discountedPrice={product.discountedPrice}
                />
              ))}
              {/* Spacer for proper right padding on mobile scroll */}
              <div className="w-[1px] shrink-0 sm:hidden"></div>
            </div>
          </div>
        </div>

        {/* 2. New Products Area */}
        <div className="flex flex-col gap-2 md:gap-4 min-w-0">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 md:gap-6 border-b pb-2 md:pb-4">
            <div className="shrink-0">
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-foreground">New Products</h3>
              <p className="text-[13px] md:text-[15px] text-muted-foreground mt-1">New products with updated stocks.</p>
            </div>

            {/* Horizontal Scrollable Categories */}
            <div className="relative w-full md:w-[400px] lg:w-[450px] xl:w-[500px] shrink-0 ml-auto">
              <div className="flex items-center gap-4 md:gap-6 text-[14px] md:text-[15px] font-semibold overflow-x-auto pb-1 w-full snap-x scroll-smooth [&::-webkit-scrollbar]:hidden pr-10 md:pr-12">
                {["All", "Clothing", "Shoes", "Watches", "Jewelry", "Glasses", "Perfumes", "Bags"].map((category, index) => (
                  <button 
                    key={category} 
                    className={`whitespace-nowrap transition-colors snap-start shrink-0 ${index === 0 ? 'text-[#fcb800] border-b-2 border-[#fcb800] pb-1 md:ml-auto' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              {/* Floating Right Arrow */}
              <div className="flex absolute right-0 top-0 bottom-1 items-center justify-end bg-background pl-2">
                <button 
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center w-7 h-7 rounded-full bg-muted hover:bg-muted/80"
                  onClick={(e) => {
                    const container = e.currentTarget.parentElement?.previousElementSibling;
                    if (container) container.scrollBy({ left: 200, behavior: 'smooth' });
                  }}
                >
                  <ChevronRight className="w-4 h-4 ml-0.5" />
                </button>
              </div>
            </div>
          </div>

          {/* New Products List Container with Side Navigation Arrows */}
          <div className="relative w-full mt-1 group/list">
            {/* Left Scroll Button */}
            <button 
              onClick={() => scroll(newScrollRef, "left")}
              className="absolute left-0 top-[38%] -translate-y-1/2 z-20 h-10 w-10 bg-white dark:bg-zinc-900 border border-border rounded-full flex items-center justify-center shadow-lg text-foreground hover:bg-[#fcb800] hover:text-white hover:border-[#fcb800] transition-all duration-300 opacity-0 group-hover/list:opacity-100 cursor-pointer -ml-4"
              title="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right Scroll Button */}
            <button 
              onClick={() => scroll(newScrollRef, "right")}
              className="absolute right-0 top-[38%] -translate-y-1/2 z-20 h-10 w-10 bg-white dark:bg-zinc-900 border border-border rounded-full flex items-center justify-center shadow-lg text-foreground hover:bg-[#fcb800] hover:text-white hover:border-[#fcb800] transition-all duration-300 opacity-0 group-hover/list:opacity-100 cursor-pointer -mr-4"
              title="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div 
              ref={newScrollRef}
              className="flex gap-2 md:gap-4 overflow-x-auto px-2 pb-8 pt-4 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden -mx-2"
            >
              {[...popularProducts].reverse().map((product) => (
                <ProductCard 
                  key={product.id + "-new"}
                  title={product.title}
                  shortDescription={product.shortDescription}
                  image={product.image}
                  hoverImage={product.hoverImage}
                  inStock={product.inStock}
                  rating={product.rating}
                  originalPrice={product.originalPrice}
                  discountedPrice={product.discountedPrice}
                />
              ))}
              {/* Spacer for proper right padding on mobile scroll */}
              <div className="w-[1px] shrink-0 sm:hidden"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
