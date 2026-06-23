"use client";

import React from "react";
import { Smile, Store, ShoppingBag, Building2, Star } from "lucide-react";

export function HomeStatsStrip() {
  const stats = [
    {
      icon: <Smile className="w-5 h-5 md:w-6 md:h-6 text-primary" strokeWidth={2} />,
      value: "10L+",
      label: "Happy Customers",
    },
    {
      icon: <Store className="w-5 h-5 md:w-6 md:h-6 text-primary" strokeWidth={2} />,
      value: "50K+",
      label: "Indian Brands",
    },
    {
      icon: <ShoppingBag className="w-5 h-5 md:w-6 md:h-6 text-primary" strokeWidth={2} />,
      value: "2L+",
      label: "Products",
    },
    {
      icon: <Building2 className="w-5 h-5 md:w-6 md:h-6 text-primary" strokeWidth={2} />,
      value: "500+",
      label: "Cities Delivered",
    },
    {
      icon: <Star className="w-5 h-5 md:w-6 md:h-6 text-primary" strokeWidth={2} />,
      value: "4.8",
      label: "Avg. Rating",
      hasStarSuffix: true,
    },
  ];

  return (
    <section className="w-full max-w-[1600px] mx-auto px-4 md:px-8 py-2 mb-8">
      <div className="relative w-full bg-[#FDF8F3] dark:bg-gray-900 rounded-xl py-4 px-1 md:px-4 border border-orange-900/5 dark:border-gray-800 overflow-hidden">
        {/* Mix Blend Glowing Orbs */}
        <div className="absolute top-[-50%] left-[5%] w-64 h-64 rounded-full blur-[60px] bg-orange-300/40 dark:bg-orange-500/20 mix-blend-multiply dark:mix-blend-screen pointer-events-none z-0" />
        <div className="absolute bottom-[-50%] right-[10%] w-80 h-80 rounded-full blur-[60px] bg-rose-300/30 dark:bg-rose-500/20 mix-blend-multiply dark:mix-blend-screen pointer-events-none z-0" />
        <div className="absolute top-[-10%] left-[45%] w-64 h-64 rounded-full blur-[50px] bg-indigo-200/40 dark:bg-indigo-500/20 mix-blend-multiply dark:mix-blend-screen pointer-events-none z-0" />

        <div className="relative z-10 grid grid-cols-2 gap-y-6 md:flex md:flex-row md:items-center md:overflow-x-auto hide-scrollbar md:divide-x divide-orange-900/10 dark:divide-gray-800 w-full py-4 md:py-0">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className={`flex items-center md:justify-center space-x-2.5 md:space-x-4 px-1 md:px-2 lg:px-6 md:flex-1 group md:pl-0 ${
                idx === stats.length - 1 && stats.length % 2 !== 0 ? "col-span-2 justify-center pl-0" : "justify-start pl-4"
              }`}
            >
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center border border-orange-100/50 dark:border-gray-700 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-[16px] md:text-[18px] lg:text-[20px] font-extrabold text-foreground flex items-center leading-none mb-1">
                  {stat.value}
                  {stat.hasStarSuffix && <Star className="w-3.5 h-3.5 md:w-4 md:h-4 ml-1 fill-foreground text-foreground" />}
                </span>
                <span className="text-[11px] md:text-[12px] text-muted-foreground font-semibold whitespace-nowrap leading-none tracking-wide">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
