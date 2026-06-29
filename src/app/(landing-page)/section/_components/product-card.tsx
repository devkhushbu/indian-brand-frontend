"use client";
import React from "react";
import Image from "next/image";
import { useTouchHover } from "@/hooks/use-touch-hover";
import { ShoppingBag, Eye, Heart, GitCompare, Check } from "lucide-react";

interface ProductCardProps {
  image: string;
  hoverImage?: string;
  title: string;
  shortDescription?: string;
  inStock: boolean;
  rating: number; // 0-5
  originalPrice: number;
  discountedPrice: number;
  storeName?: string;
}

export const ProductCard = ({ 
  image, 
  hoverImage,
  title, 
  // inStock, 
  rating, 
  originalPrice, 
  discountedPrice, 
  storeName = "Indian Brand" 
}: ProductCardProps) => {
  const { isHovered, ref: cardRef, hoverProps } = useTouchHover<HTMLDivElement>();
  const discount = originalPrice > discountedPrice ? Math.round(((originalPrice - discountedPrice) / originalPrice) * 100) : 0;

  // Generate dummy sold metrics for visual completeness matching the screenshot
  const soldCount = Math.max(1, Math.round((discountedPrice * 7) % 8) + 1); // between 1 and 8
  const totalStock = 10;
  const soldPercentage = (soldCount / totalStock) * 100;

  return (
    <div 
      ref={cardRef}
      {...hoverProps}
      className="group relative flex flex-col gap-1.5 p-3 pb-2.5 bg-transparent hover:bg-white dark:hover:bg-zinc-900/40 rounded-xl transition-all duration-300 w-[200px] md:w-[220px] shrink-0 snap-center cursor-pointer hover:shadow-[0_8px_32px_rgba(0,0,0,0.03)] hover:-translate-y-1 select-none border-none"
    >
      {/* Image Container */}
      <div className={`relative w-full aspect-square rounded-lg flex items-center justify-center overflow-hidden transition-colors duration-300 z-10 ${isHovered ? 'bg-[#f5f5f5] dark:bg-zinc-900' : 'bg-transparent'}`}>
        
        {/* Badges - Left and Right opposite alignment */}
        {discount > 0 && (
          <div className="absolute top-1.5 left-1.5 z-10 select-none">
            <span className="bg-[#fc3b00] text-white text-[9.5px] font-extrabold px-2 py-0.5 rounded-sm tracking-wider uppercase">
              -{discount}%
            </span>
          </div>
        )}
        {rating >= 4.5 && (
          <div className="absolute top-1.5 right-1.5 z-10 select-none">
            <span className="bg-[#008a6c] text-white text-[9.5px] font-extrabold px-2 py-0.5 rounded-sm tracking-wider uppercase">
              New
            </span>
          </div>
        )}
        
        <div className="relative w-[90%] h-[90%] flex items-center justify-center">
          <Image 
            src={image} 
            alt={title} 
            fill
            unoptimized
            className={`object-contain mix-blend-multiply dark:mix-blend-normal transition-all duration-500 ${isHovered ? 'scale-105' : 'scale-100'} ${hoverImage && isHovered ? 'opacity-0' : 'opacity-100'}`} 
          />
          {hoverImage && (
            <Image 
              src={hoverImage} 
              alt={`${title} hover`} 
              fill
              unoptimized
              className={`object-contain mix-blend-multiply dark:mix-blend-normal transition-all duration-500 ${isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`} 
            />
          )}
        </div>

        {/* Hover Actions Overlay with Staggered Slide-up Animations (Glassy Style Bottom-Centered) */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center justify-center gap-1.5 z-20">
          {/* Add to Cart button (White Circle by default, turns Yellow on hover) */}
          <button 
            className={`bg-white/95 dark:bg-zinc-900/95 text-gray-600 dark:text-zinc-300 hover:bg-[#fcb800] hover:text-white h-7.5 w-7.5 rounded-full flex items-center justify-center border border-white/20 dark:border-zinc-800/40 shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-300 cursor-pointer outline-none ${
              isHovered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-3 scale-75 pointer-events-none'
            }`} 
            title="Add to Cart"
          >
            <ShoppingBag className="w-3.5 h-3.5 stroke-[2.25]" />
          </button>
          
          {/* Quick View (Eye) */}
          <button 
            className={`bg-white/95 dark:bg-zinc-900/95 text-gray-600 dark:text-zinc-300 hover:bg-[#fcb800] hover:text-white h-7.5 w-7.5 rounded-full flex items-center justify-center border border-white/20 dark:border-zinc-800/40 shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-300 delay-[40ms] cursor-pointer outline-none ${
              isHovered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-3 scale-75 pointer-events-none'
            }`} 
            title="Quick View"
          >
            <Eye className="w-3.5 h-3.5" />
          </button>
          
          {/* Wishlist (Heart) */}
          <button 
            className={`bg-white/95 dark:bg-zinc-900/95 text-gray-600 dark:text-zinc-300 hover:bg-[#fcb800] hover:text-white h-7.5 w-7.5 rounded-full flex items-center justify-center border border-white/20 dark:border-zinc-800/40 shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-300 delay-[80ms] cursor-pointer outline-none ${
              isHovered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-3 scale-75 pointer-events-none'
            }`} 
            title="Add to Wishlist"
          >
            <Heart className="w-3.5 h-3.5" />
          </button>
          
          {/* Compare (GitCompare) */}
          <button 
            className={`bg-white/95 dark:bg-zinc-900/95 text-gray-600 dark:text-zinc-300 hover:bg-[#fcb800] hover:text-white h-7.5 w-7.5 rounded-full flex items-center justify-center border border-white/20 dark:border-zinc-800/40 shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-300 delay-[120ms] cursor-pointer outline-none ${
              isHovered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-3 scale-75 pointer-events-none'
            }`} 
            title="Compare"
          >
            <GitCompare className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1 px-0.5 pb-0.5 z-10 relative flex-1">
        {/* Prices */}
        <div className="flex items-baseline mt-1 select-none">
          <span className="text-[#669900] font-bold text-[15px]">${discountedPrice.toFixed(2)}</span>
          {discount > 0 && (
            <span className="text-gray-400 line-through text-[11px] ml-1.5 font-medium">${originalPrice.toFixed(2)}</span>
          )}
        </div>

        {/* Sold By info */}
        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wide flex items-center mt-0.5 select-none">
          <span className="shrink-0">Sold By:</span>
          <span className="text-gray-600 dark:text-zinc-400 ml-1 hover:underline cursor-pointer truncate max-w-[95px]">{storeName}</span>
          <span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-[#0066cc] text-white ml-1 shrink-0">
            <Check className="w-2 h-2 stroke-[3.5]" />
          </span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-[13px] leading-snug text-[#0066cc] dark:text-blue-400 line-clamp-2 mt-0.5 hover:text-[#fcb800] dark:hover:text-[#fcb800] transition-colors cursor-pointer" title={title}>
          {title}
        </h3>
        
        {/* Rating Stars */}
        <div className="flex items-center gap-0.5 mt-0.5 select-none">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg 
              key={star} 
              className={`w-[11px] h-[11px] ${star <= rating ? 'text-[#fcb800] fill-current' : 'text-gray-200 fill-current dark:text-zinc-800'}`} 
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          ))}
          <span className="text-[10px] text-gray-400 ml-1.5 font-semibold">({rating >= 4.5 ? 10 : 9})</span>
        </div>

        {/* Inventory Progress Bar with Balance Sold/Available Labels */}
        <div className="flex flex-col gap-1.5 mt-2.5 w-full select-none">
          <div className="w-full h-1.5 bg-gray-100 dark:bg-zinc-850 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#fcb800] rounded-full transition-all duration-500" 
              style={{ width: `${soldPercentage}%` }}
            />
          </div>
          <div className="flex justify-between items-center text-[10px] text-gray-400 font-bold">
            <span>Sold: {soldCount}</span>
            <span>Available: {totalStock - soldCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
