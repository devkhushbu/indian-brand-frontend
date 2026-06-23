"use client";
import React from "react";
import { ProductCard } from "./_components/product-card";
import { HomeLeftSideBanner } from "./_components/home-left-side-banner";
import { HomeBottomBanner } from "./_components/home-battom-banner";
import { popularProducts } from "@/data/product-data";
import { ChevronRight } from "lucide-react";

export const HomeProductsShowcase = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 py-4 md:py-6 relative">
      {/* CSS Grid for advanced responsive ordering */}
      <div className="grid grid-cols-1 xl:grid-cols-[320px_1fr] gap-4 md:gap-6 items-start">
        
        {/* 1. Popular Products Area (Mobile: Order 1, Desktop: Right Column Row 1) */}
        <div className="order-1 xl:order-none xl:col-start-2 flex flex-col gap-2 md:gap-4 min-w-0">
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
                    className={`whitespace-nowrap transition-colors snap-start shrink-0 ${index === 0 ? 'text-primary border-b-2 border-primary pb-1 md:ml-auto' : 'text-muted-foreground hover:text-foreground'}`}
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

          {/* Popular Products List */}
          <div className="relative w-[calc(100%+32px)] -ml-4 sm:w-full sm:ml-0 mt-1">
            <div className="flex gap-2 md:gap-4 overflow-x-auto px-4 sm:px-0 pb-4 pt-1 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden">
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

        {/* 2. Left Sidebar Bento Grid (Mobile: Order 2, Desktop: Left Column Spanning All Rows) */}
        <div className="order-2 xl:order-none xl:col-start-1 xl:row-start-1 xl:row-span-3 w-full flex flex-col gap-4 shrink-0 xl:sticky xl:top-6">
          <HomeLeftSideBanner 
            image="/home-banner/sidebar-banner1.jpg" 
            alt="Fashion Wear 50% Off" 
            className="w-full shrink-0 aspect-[16/9] sm:aspect-[21/9] xl:aspect-[3/4]"
          />
          <div className="grid grid-cols-2 gap-4 w-full shrink-0">
            <HomeLeftSideBanner 
              image="/home-banner/sidebar-banner-2.jpg" 
              alt="Mobile Offer" 
              className="aspect-square"
            />
            <HomeLeftSideBanner 
              image="/home-banner/sidebar-banner3.jpg" 
              alt="Gadget Offer" 
              className="aspect-square"
            />
          </div>
        </div>

        {/* 3. New Products Area (Mobile: Order 3, Desktop: Right Column Row 2) */}
        <div className="order-3 xl:order-none xl:col-start-2 flex flex-col gap-2 md:gap-4 mt-2 xl:mt-0 min-w-0">
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
                    className={`whitespace-nowrap transition-colors snap-start shrink-0 ${index === 0 ? 'text-primary border-b-2 border-primary pb-1 md:ml-auto' : 'text-muted-foreground hover:text-foreground'}`}
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

          {/* New Products List */}
          <div className="relative w-[calc(100%+32px)] -ml-4 sm:w-full sm:ml-0 mt-1">
            <div className="flex gap-2 md:gap-4 overflow-x-auto px-4 sm:px-0 pb-4 pt-1 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden">
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

        {/* 4. Bottom Banners (Mobile: Order 4, Desktop: Right Column Row 3) */}
        <div className="order-4 xl:order-none xl:col-start-2 mt-2 min-w-0">
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <div className="w-full flex-1 min-w-0">
              <HomeBottomBanner 
                image="/home-banner/bottom-banner1.jpg" 
                alt="Black Friday Sale" 
              />
            </div>
            <div className="w-full flex-1 min-w-0">
              <HomeBottomBanner 
                image="/home-banner/bottom-banner2.jpg" 
                alt="Super Discount Mobile" 
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
