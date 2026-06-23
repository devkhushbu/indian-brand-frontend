import React from "react";
import Image from "next/image";

export const HomeBottomBanner = ({ image, alt, className }: { image: string; alt: string; className?: string }) => {
  return (
    <div className={`relative w-full overflow-hidden bg-[#f4f4f4] rounded-2xl ${className || 'aspect-[2/1]'}`}>
      <Image src={image} alt={alt} fill unoptimized className="object-cover hover:scale-105 transition-transform duration-700" />
    </div>
  );
};
