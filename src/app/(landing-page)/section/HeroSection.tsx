"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const bannerImages = [
  "/home-banner/home-banner-1.webp",
  "/home-banner/home-banner-2.webp",
  "/home-banner/home-banner-3.webp",
  "/home-banner/home-banner-4.webp",
  "/home-banner/home-banner-5.webp",
  "/home-banner/home-banner-6.webp",
];

export function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", skipSnaps: false },
    [Autoplay({ delay: 3500, stopOnInteraction: true })]
  );
  
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full relative py-2 mb-4 mt-2">
      {/* Embla Carousel Viewport */}
      <div className="overflow-hidden px-4 md:px-8" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {bannerImages.map((imgUrl, idx) => (
            <div 
              key={idx} 
              className="flex-[0_0_92%] sm:flex-[0_0_85%] md:flex-[0_0_70%] lg:flex-[0_0_60%] min-w-0 mr-3 relative h-[160px] md:h-[280px] rounded-xl md:rounded-2xl overflow-hidden bg-muted/20"
            >
               <Image src={imgUrl} alt={`Promo Banner ${idx + 1}`} fill className="object-cover" unoptimized />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center space-x-1.5 mt-4">
        {bannerImages.map((_, idx) => (
          <div 
            key={idx} 
            className={`h-1.5 rounded-full transition-all duration-300 ${selectedIndex === idx ? "w-5 bg-primary/80" : "w-1.5 bg-muted-foreground/30"}`} 
          />
        ))}
      </div>
    </div>
  );
}
