"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

type EmblaApiType = NonNullable<ReturnType<typeof useEmblaCarousel>[1]>;

const mainSliderImages = [
  "/home-banner/home-banner-1.webp",
  "/home-banner/home-banner-2.webp",
];

const topSideImages = [
  "/home-banner/home-banner-3.webp",
  "/home-banner/home-banner-4.webp",
];

const bottomSideImages = [
  "/home-banner/home-banner-5.webp",
  "/home-banner/home-banner-6.webp",
];

function BentoCarousel({ images, priority = false, setApi }: { images: string[], priority?: boolean, setApi: (api: EmblaApiType) => void }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setApi(emblaApi);
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect, setApi]);

  return (
    <div className="w-full h-full relative group">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full touch-pan-y">
          {images.map((imgUrl, idx) => (
            <div key={idx} className="flex-[0_0_100%] min-w-0 relative h-full">
               <Image src={imgUrl} alt={`Promo Banner ${idx + 1}`} fill className="object-cover" unoptimized priority={priority && idx === 0} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Pagination Dots */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-1.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {images.map((_, idx) => (
          <div 
            key={idx} 
            className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${selectedIndex === idx ? "w-4 bg-primary" : "w-1.5 bg-white/60 backdrop-blur-sm"}`} 
          />
        ))}
      </div>
    </div>
  );
}

export function HomeBanner() {
  const [api1, setApi1] = useState<EmblaApiType>();
  const [api2, setApi2] = useState<EmblaApiType>();
  const [api3, setApi3] = useState<EmblaApiType>();

  // Master controller to sync all 3 carousels perfectly
  useEffect(() => {
    if (!api1 || !api2 || !api3) return;
    
    const interval = setInterval(() => {
      api1.scrollNext();
      api2.scrollNext();
      api3.scrollNext();
    }, 4000); // 4 seconds synchronized delay

    return () => clearInterval(interval);
  }, [api1, api2, api3]);

  return (
    <div className="w-full max-w-[1600px] mx-auto py-2 mb-4 mt-2 px-4 md:px-8">
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-4">
        
        {/* Main Carousel (Takes up 2/3 on Desktop) */}
        <div className="lg:col-span-2 relative rounded-xl md:rounded-2xl overflow-hidden bg-muted/20 h-[180px] sm:h-[280px] lg:h-[420px] cursor-pointer">
           <BentoCarousel images={mainSliderImages} priority={true} setApi={setApi1} />
        </div>

        {/* Right Side Stacked Banners (Takes up 1/3 on Desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-1 lg:grid-rows-2 gap-3 md:gap-4 h-[120px] sm:h-[180px] lg:h-[420px]">
          <div className="relative rounded-xl md:rounded-2xl overflow-hidden bg-muted/20 h-full cursor-pointer">
             <BentoCarousel images={topSideImages} setApi={setApi2} />
          </div>
          <div className="relative rounded-xl md:rounded-2xl overflow-hidden bg-muted/20 h-full cursor-pointer">
             <BentoCarousel images={bottomSideImages} setApi={setApi3} />
          </div>
        </div>

      </div>
    </div>
  );
}
