"use client";
import React from "react";
import Image from "next/image";
import { useTouchHover } from "@/hooks/use-touch-hover";

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
  shortDescription,
  // inStock, 
  rating, 
  originalPrice, 
  discountedPrice, 
  storeName = "Indian Brand" 
}: ProductCardProps) => {
  const { isHovered, ref: cardRef, hoverProps } = useTouchHover<HTMLDivElement>();
  const discount = originalPrice > discountedPrice ? Math.round(((originalPrice - discountedPrice) / originalPrice) * 100) : 0;

  return (
    <div 
      ref={cardRef}
      {...hoverProps}
      className={`group relative flex flex-col gap-2 p-1.5 bg-transparent border rounded-2xl transition-all duration-300 w-[200px] md:w-[260px] shrink-0 snap-center cursor-pointer ${isHovered ? 'border-primary shadow-sm' : 'border-transparent'}`}
    >
      {/* Separator Line that hides on hover */}
      <div className={`absolute -right-0 top-4 bottom-4 w-px bg-border transition-opacity duration-300 pointer-events-none z-0 ${isHovered ? 'opacity-0' : 'opacity-100'}`} />

      {/* Image Container */}
      <div className={`relative w-full aspect-[4/3] rounded-lg p-0 flex items-center justify-center overflow-hidden transition-colors duration-300 z-10 ${isHovered ? 'bg-secondary' : 'bg-background'}`}>
        {discount > 0 && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[11px] font-semibold px-2 py-0.5 rounded z-10">
            -{discount}%
          </span>
        )}
        
        <div className="relative w-full h-full flex items-center justify-center">
          <Image 
            src={image} 
            alt={title} 
            fill
            unoptimized
            className={`object-contain mix-blend-multiply transition-all duration-500 ${isHovered ? 'scale-105' : 'scale-100'} ${hoverImage && isHovered ? 'opacity-0' : 'opacity-100'}`} 
          />
          {hoverImage && (
            <Image 
              src={hoverImage} 
              alt={`${title} hover`} 
              fill
              unoptimized
              className={`object-contain mix-blend-multiply transition-all duration-500 ${isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`} 
            />
          )}
        </div>

        {/* Hover Actions */}
        <div className={`absolute right-2 top-2 flex flex-col gap-1.5 md:gap-2 transition-all duration-300 z-20 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
          <button className="bg-background/90 backdrop-blur-md p-1.5 md:p-2.5 rounded-lg md:rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.08)] text-muted-foreground hover:text-primary hover:bg-background hover:scale-110 transition-all duration-300" title="Wishlist">
            <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </button>
          <button className="bg-background/90 backdrop-blur-md p-1.5 md:p-2.5 rounded-lg md:rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.08)] text-muted-foreground hover:text-primary hover:bg-background hover:scale-110 transition-all duration-300" title="Compare">
            <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
            </svg>
          </button>
          <button className="bg-background/90 backdrop-blur-md p-1.5 md:p-2.5 rounded-lg md:rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.08)] text-muted-foreground hover:text-primary hover:bg-background hover:scale-110 transition-all duration-300" title="Quick View">
            <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-0.5 px-1 pb-1 z-10 relative flex-1">
        <h3 className="font-medium text-[15px] leading-tight text-foreground line-clamp-1 cursor-pointer hover:text-primary transition-colors" title={title}>
          {title}
        </h3>
        
        {shortDescription && (
          <p className="text-[13px] text-muted-foreground line-clamp-2 leading-tight" title={shortDescription}>
            {shortDescription}
          </p>
        )}
        
        {/* Rating (Hidden until hovered) */}
        <div className={`flex gap-0.5 text-muted/30 transition-all duration-300 ${isHovered ? 'mt-0.5 opacity-100 max-h-10' : 'mt-0 opacity-0 max-h-0 overflow-hidden'}`}>
          {[1, 2, 3, 4, 5].map((star) => (
            <svg 
              key={star} 
              className={`w-[13px] h-[13px] ${star <= rating ? 'text-primary fill-current' : 'fill-current'}`} 
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          ))}
        </div>

        {/* Prices */}
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="text-primary font-bold text-[16px]">${discountedPrice.toFixed(2)}</span>
          {discount > 0 && (
            <span className="text-muted-foreground line-through text-[12px] font-medium">${originalPrice.toFixed(2)}</span>
          )}
        </div>

        {/* Store Name (Hidden until hovered) */}
        <div className={`flex items-center gap-1.5 cursor-pointer group/store transition-all duration-300 ${isHovered ? 'mt-1 opacity-100 max-h-10' : 'mt-0 opacity-0 max-h-0 overflow-hidden'}`}>
          <div className="w-[18px] h-[18px] rounded-full bg-primary/10 flex items-center justify-center overflow-hidden shrink-0">
            <svg className="w-2.5 h-2.5 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
            </svg>
          </div>
          <span className="text-[13px] text-primary group-hover/store:underline">{storeName}</span>
        </div>
        
        {/* Add to Cart Button (Hidden until hovered) */}
        <div className={`mt-auto w-full transition-all duration-300 ${isHovered ? 'pt-2 opacity-100 max-h-20' : 'pt-0 opacity-0 max-h-0 overflow-hidden'}`}>
          <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-[14px] font-medium py-2 px-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md transform active:scale-95 group/btn">
            <svg className="w-4 h-4 transition-transform group-hover/btn:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

