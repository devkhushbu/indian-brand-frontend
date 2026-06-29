"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { 
  Menu, 
  X,
  Star,
  Shirt,
  Laptop,
  Smartphone,
  Utensils,
  Lamp,
  Sparkles,
  Gem,
  Armchair,
  Gamepad2,
  BookOpen,
  Briefcase,
  Gift,
  Heart
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { allCategories } from "./nav-data";
import { AnimatePresence, motion } from "framer-motion";

function getCategoryIcon(title: string) {
  switch (title) {
    case "Fashion":
    case "Kurtis & Dress":
      return Shirt;
    case "Electronics":
      return Laptop;
    case "Smartphones":
      return Smartphone;
    case "Groceries":
      return Utensils;
    case "Home & Kitchen":
      return Lamp;
    case "Beauty & Personal Care":
      return Sparkles;
    case "Jewelry":
      return Gem;
    case "Furniture":
      return Armchair;
    case "Kids & Toys":
      return Gamepad2;
    case "Books":
      return BookOpen;
    case "Bags & Luggage":
      return Briefcase;
    case "Gifts":
      return Gift;
    case "Wedding":
      return Heart;
    case "Top Brands":
      return Star;
    default:
      return Star;
  }
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Popular");

  // Dummy subcategories for right pane's "Popular" tab
  const popularFeatured = [
    { title: "Smartphones", imgUrl: "/category-icon/Smartphones.png", bgColor: "bg-gray-100/80 dark:bg-gray-800/50", glowOrb: "bg-gray-300/40 dark:bg-gray-500/20" },
    { title: "Top Brands", imgUrl: "/category-icon/Top_Brands.png", bgColor: "bg-slate-50/80 dark:bg-slate-900/40", glowOrb: "bg-slate-300/40 dark:bg-slate-500/20" },
    { title: "Wedding Accessories", imgUrl: "/category-icon/Wedding Accessories.png", bgColor: "bg-pink-50/80 dark:bg-pink-950/40", glowOrb: "bg-pink-300/40 dark:bg-pink-500/20" },
  ];

  const popularAll = [
    { title: "Fashion", imgUrl: "/category-icon/Fashion.png", bgColor: "bg-orange-50/80 dark:bg-orange-950/40", glowOrb: "bg-orange-300/40 dark:bg-orange-500/20" },
    { title: "Kids & Toys", imgUrl: "/category-icon/kids-and-toys.png", bgColor: "bg-indigo-50/80 dark:bg-indigo-950/40", glowOrb: "bg-indigo-300/40 dark:bg-indigo-500/20" },
    { title: "Electronics", imgUrl: "/category-icon/Electronics.png", bgColor: "bg-blue-50/80 dark:bg-blue-950/40", glowOrb: "bg-blue-300/40 dark:bg-blue-500/20" },
    { title: "Home & Kitchen", imgUrl: "/category-icon/Home.png", bgColor: "bg-cyan-50/80 dark:bg-cyan-950/40", glowOrb: "bg-cyan-300/40 dark:bg-cyan-500/20" },
    { title: "Bags", imgUrl: "/category-icon/Bags.png", bgColor: "bg-rose-50/80 dark:bg-rose-950/40", glowOrb: "bg-rose-300/40 dark:bg-rose-500/20" },
    { title: "Beauty", imgUrl: "/category-icon/Beauty.png", bgColor: "bg-green-50/80 dark:bg-green-950/40", glowOrb: "bg-green-300/40 dark:bg-green-500/20" },
    { title: "Grocery", imgUrl: "/category-icon/Groceries.png", bgColor: "bg-amber-50/80 dark:bg-amber-950/40", glowOrb: "bg-amber-300/40 dark:bg-amber-500/20" },
    { title: "Jewelry", imgUrl: "/category-icon/Jwellery.png", bgColor: "bg-yellow-50/80 dark:bg-yellow-950/40", glowOrb: "bg-yellow-300/40 dark:bg-yellow-500/20" },
    { title: "Furniture", imgUrl: "/category-icon/Furniture.png", bgColor: "bg-stone-50/80 dark:bg-stone-900/40", glowOrb: "bg-stone-300/40 dark:bg-stone-500/20" },
  ];

  const activeCategory = allCategories.find((c) => c.title === activeTab);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="h-9 w-9 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 transition-colors border-none outline-none cursor-pointer select-none">
          <Menu className="h-5 w-5 text-black dark:text-white" />
          <span className="sr-only">Toggle menu</span>
        </button>
      </SheetTrigger>
      
      <SheetContent 
        side="left" 
        className="!w-full !max-w-[100vw] sm:!max-w-[100vw] p-0 flex flex-col bg-white dark:bg-zinc-950 border-none !gap-0 select-none" 
        showCloseButton={false}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 min-h-[56px]">
          <SheetTitle asChild>
            <div className="flex flex-col items-start mt-0.5">
               <span className="text-[20px] font-extrabold text-black dark:text-white tracking-tight leading-none">
                 Indian<span className="text-white bg-black dark:bg-[#F7BA01] dark:text-black px-1.5 py-0.5 rounded ml-1">Brand</span><span className="text-[10px] font-bold ml-0.5">.in</span>
               </span>
               <span className="text-[8px] text-black/50 dark:text-zinc-400 font-semibold tracking-wide mt-1">
                 Discover India. Buy India. Grow India.
               </span>
            </div>
          </SheetTitle>
          <button onClick={() => setOpen(false)} className="w-8 h-8 shrink-0 flex items-center justify-center rounded-full bg-gray-100 dark:bg-zinc-900 hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors cursor-pointer border-none outline-none">
            <X className="h-4 w-4 text-gray-500 dark:text-zinc-400" strokeWidth={2.5} />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Left Sidebar */}
          <div className="w-[90px] bg-gray-50/50 dark:bg-zinc-900/30 border-r border-gray-100 dark:border-zinc-900 overflow-y-auto hide-scrollbar flex flex-col shrink-0">
            {/* Popular Tab */}
            <button
              onClick={() => setActiveTab("Popular")}
              className={`w-full flex flex-col items-center justify-center py-4 px-1 border-b border-gray-100 dark:border-zinc-900/50 relative transition-colors border-none outline-none cursor-pointer ${
                activeTab === "Popular" ? "bg-white dark:bg-zinc-950" : "bg-transparent"
              }`}
            >
              {activeTab === "Popular" && (
                <motion.div layoutId="active-indicator" className="absolute left-0 top-0 bottom-0 w-1 bg-[#F7BA01]" />
              )}
              <div className={`relative w-[40px] h-[40px] rounded-full flex items-center justify-center mb-1.5 overflow-hidden transition-all duration-300 bg-black/5 dark:bg-white/5`}>
                <div className="relative w-[70%] h-[70%] z-10">
                  <Image src="/category-icon/Top_Brands.png" alt="Popular" fill className="object-contain" unoptimized />
                </div>
              </div>
              <span className={`text-[10px] text-center leading-tight tracking-wide font-extrabold ${
                activeTab === "Popular" ? "text-[#F7BA01]" : "text-gray-500 dark:text-zinc-400"
              }`}>
                Popular
              </span>
            </button>

            {/* Dynamic Tabs */}
            {allCategories.map((tab) => {
              const isActive = activeTab === tab.title;
              const TabIcon = getCategoryIcon(tab.title);
              return (
                <button
                  key={tab.title}
                  onClick={() => setActiveTab(tab.title)}
                  className={`w-full flex flex-col items-center justify-center py-4 px-1 border-b border-gray-100 dark:border-zinc-900/50 relative transition-colors border-none outline-none cursor-pointer ${
                    isActive ? "bg-white dark:bg-zinc-950" : "bg-transparent"
                  }`}
                >
                  {isActive && (
                    <motion.div layoutId="active-indicator" className="absolute left-0 top-0 bottom-0 w-1 bg-[#F7BA01]" />
                  )}
                  <div className={`relative w-[40px] h-[40px] rounded-full flex items-center justify-center mb-1.5 overflow-hidden transition-all duration-300 ${
                    isActive ? "bg-[#F7BA01]/10 dark:bg-[#F7BA01]/20" : "bg-black/5 dark:bg-white/5"
                  }`}>
                    <TabIcon className={`h-4.5 w-4.5 ${isActive ? "text-[#F7BA01]" : "text-gray-500 dark:text-zinc-400"}`} />
                  </div>
                  <span className={`text-[10px] text-center leading-tight tracking-wide font-extrabold break-words px-0.5 ${
                    isActive ? "text-[#F7BA01]" : "text-gray-500 dark:text-zinc-400"
                  }`}>
                    {tab.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Content Pane */}
          <div className="flex-1 bg-white dark:bg-zinc-950 overflow-y-auto hide-scrollbar">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="w-full h-full"
              >
                {activeTab === "Popular" ? (
                  <div className="px-4 py-4 m-0 flex flex-col space-y-6">
                    <div>
                      <h3 className="text-[10px] font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-widest leading-none m-0 p-0 mb-4 flex items-center">
                        <span className="flex-1 border-b border-gray-100 dark:border-zinc-900 mr-3"></span>
                        Featured Brands
                        <span className="flex-1 border-b border-gray-100 dark:border-zinc-900 ml-3"></span>
                      </h3>
                      
                      <div className="grid grid-cols-2 gap-3">
                        {popularFeatured.map((item, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <Link 
                              href="#" 
                              onClick={() => setOpen(false)} 
                              className="flex flex-col items-center group bg-gray-50 dark:bg-zinc-900/60 border border-gray-100 dark:border-zinc-900/80 rounded-xl p-3 aspect-square justify-center text-center cursor-pointer hover:border-[#F7BA01]/60 transition-all duration-300"
                            >
                              <div className="relative w-12 h-12 rounded-full bg-white dark:bg-zinc-950 flex items-center justify-center mb-2 shadow-sm">
                                <div className="relative w-[70%] h-[70%] z-10">
                                  <Image src={item.imgUrl} alt={item.title} fill className="object-contain" unoptimized />
                                </div>
                              </div>
                              <span className="text-[10px] font-bold text-gray-700 dark:text-zinc-300 leading-tight line-clamp-2">
                                {item.title}
                              </span>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-[10px] font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-widest leading-none m-0 p-0 mb-4 flex items-center">
                        <span className="flex-1 border-b border-gray-100 dark:border-zinc-900 mr-3"></span>
                        Popular Categories
                        <span className="flex-1 border-b border-gray-100 dark:border-zinc-900 ml-3"></span>
                      </h3>
                      
                      <div className="grid grid-cols-2 gap-3">
                        {popularAll.map((item, idx) => {
                          const IconComp = getCategoryIcon(item.title);
                          return (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.1 + idx * 0.03 }}
                            >
                              <Link 
                                href="#" 
                                onClick={() => setOpen(false)} 
                                className="flex flex-col items-center group bg-gray-50 dark:bg-zinc-900/60 border border-gray-100 dark:border-zinc-900/80 rounded-xl p-3 aspect-square justify-center text-center cursor-pointer hover:border-[#F7BA01]/60 transition-all duration-300"
                              >
                                <div className="w-10 h-10 rounded-full bg-[#F7BA01]/10 dark:bg-[#F7BA01]/20 flex items-center justify-center mb-2">
                                  <IconComp className="h-4.5 w-4.5 text-[#F7BA01]" />
                                </div>
                                <span className="text-[10px] font-bold text-gray-700 dark:text-zinc-300 leading-tight line-clamp-2">
                                  {item.title}
                                </span>
                              </Link>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="px-4 py-4 m-0">
                    {activeCategory && (
                      <div className="mt-0">
                        <h3 className="text-[10px] font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-widest leading-none m-0 p-0 mb-4 flex items-center">
                            <span className="flex-1 border-b border-gray-100 dark:border-zinc-900 mr-3"></span>
                            {activeCategory.title}
                            <span className="flex-1 border-b border-gray-100 dark:border-zinc-900 ml-3"></span>
                        </h3>
                        
                        <div className="grid grid-cols-2 gap-3">
                          {activeCategory.subCategories.map((sub, idx) => {
                            const TabIcon = getCategoryIcon(activeCategory.title);
                            return (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.03 }}
                              >
                                <Link 
                                  href={`${activeCategory.href}/${sub.toLowerCase().replace(/\s+/g, '-')}`} 
                                  onClick={() => setOpen(false)} 
                                  className="flex flex-col items-center group bg-gray-50 dark:bg-zinc-900/60 border border-gray-100 dark:border-zinc-900/80 rounded-xl p-3 aspect-square justify-center text-center cursor-pointer hover:border-[#F7BA01]/60 transition-all duration-300"
                                >
                                  <div className="w-10 h-10 rounded-full bg-[#F7BA01]/10 dark:bg-[#F7BA01]/20 flex items-center justify-center mb-2 transition-transform duration-300 group-hover:scale-105">
                                    <TabIcon className="h-4.5 w-4.5 text-[#F7BA01]" />
                                  </div>
                                  <span className="text-[10.5px] font-bold text-gray-700 dark:text-zinc-300 leading-tight mt-1 line-clamp-2 group-hover:text-[#F7BA01] transition-colors">
                                    {sub}
                                  </span>
                                </Link>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
