"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { allCategories } from "./nav-data";
import { AnimatePresence, motion } from "framer-motion";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Popular");

  // Dummy subcategories for right pane's "Popular" tab
  const popularFeatured = [
    { title: "Smartphones", imgUrl: "/category-icon/Smartphones.webp" },
    { title: "Top Brands", imgUrl: "/category-icon/Top Brands.webp" },
    { title: "Wedding Accessories", imgUrl: "/category-icon/Wedding Accessories.png" },
  ];

  const popularAll = [
    { title: "Fashion", imgUrl: "/category-icon/Fashion.png" },
    { title: "Kids & Toys", imgUrl: "/category-icon/kids-and-toys.webp" },
    { title: "Electronics", imgUrl: "/category-icon/Electronics.png" },
    { title: "Home & Kitchen", imgUrl: "/category-icon/Home.webp" },
    { title: "Bags", imgUrl: "/category-icon/Bags.png" },
    { title: "Beauty", imgUrl: "/category-icon/Beauty.png" },
    { title: "Grocery", imgUrl: "/category-icon/Groceries.png" },
    { title: "Jewelry", imgUrl: "/category-icon/Jwellery.png" },
    { title: "Furniture", imgUrl: "/category-icon/Furniture.png" },
  ];

  const activeCategory = allCategories.find((c) => c.title === activeTab);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="p-1 -ml-1">
          <Menu className="h-6 w-6 text-foreground" />
          <span className="sr-only">Toggle menu</span>
        </button>
      </SheetTrigger>
      {/* 
        To force full width, we must override the default shadcn max-w-sm class 
        We use !w-full to bypass data-[side=left] specificity.
      */}
      <SheetContent 
        side="left" 
        className="!w-full !max-w-[100vw] sm:!max-w-[100vw] p-0 flex flex-col bg-background border-none !gap-0" 
        showCloseButton={false}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-background min-h-[52px]">
          <SheetTitle asChild>
            <div className="flex flex-col items-start mt-0.5">
               <span className="text-[20px] font-extrabold text-foreground tracking-tight leading-none">
                 Indian<span className="text-primary">Brand</span><span className="text-[10px] font-semibold">.in</span>
               </span>
               <span className="text-[7.5px] text-muted-foreground font-medium tracking-wide mt-0.5">
                 Discover India. Buy India. Grow India.
               </span>
            </div>
          </SheetTitle>
          <button onClick={() => setOpen(false)} className="w-8 h-8 shrink-0 flex items-center justify-center rounded-full bg-muted hover:bg-muted/80 transition-colors">
            <X className="h-4 w-4 text-muted-foreground" strokeWidth={2} />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Left Sidebar */}
          <div className="w-[85px] bg-muted/30 border-r border-border overflow-y-auto hide-scrollbar flex flex-col shrink-0">
            {/* Popular Tab */}
            <button
              onClick={() => setActiveTab("Popular")}
              className={`w-full flex flex-col items-center justify-center py-3.5 px-1 border-b border-border/40 relative transition-colors ${
                activeTab === "Popular" ? "bg-background" : "bg-transparent"
              }`}
            >
              {activeTab === "Popular" && (
                <motion.div layoutId="active-indicator" className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
              )}
              <div className={`relative w-[42px] h-[42px] rounded-full flex items-center justify-center mb-1.5 overflow-hidden ${
                activeTab === "Popular" ? "bg-primary/10" : "bg-background border border-border/50"
              }`}>
                <Image src="/category-icon/Top Brands.webp" alt="Popular" fill className="object-cover" unoptimized />
              </div>
              <span className={`text-[10px] text-center leading-tight ${
                activeTab === "Popular" ? "text-primary font-semibold" : "text-muted-foreground font-medium"
              }`}>
                Popular
              </span>
            </button>

            {/* Dynamic Tabs */}
            {allCategories.map((tab) => {
              const isActive = activeTab === tab.title;
              return (
                <button
                  key={tab.title}
                  onClick={() => setActiveTab(tab.title)}
                  className={`w-full flex flex-col items-center justify-center py-3.5 px-1 border-b border-border/40 relative transition-colors ${
                    isActive ? "bg-background" : "bg-transparent"
                  }`}
                >
                  {isActive && (
                    <motion.div layoutId="active-indicator" className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
                  )}
                  <div className={`relative w-[42px] h-[42px] rounded-full flex items-center justify-center mb-1.5 overflow-hidden ${
                    isActive ? "bg-primary/10" : "bg-background border border-border/50"
                  }`}>
                    <Image src={tab.imgUrl} alt={tab.title} fill className="object-cover" unoptimized />
                  </div>
                  <span className={`text-[10px] text-center leading-tight break-words px-0.5 ${
                    isActive ? "text-primary font-semibold" : "text-muted-foreground font-medium"
                  }`}>
                    {tab.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Content Pane */}
          <div className="flex-1 bg-background overflow-y-auto hide-scrollbar">
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
                  <div className="px-3 pt-0 pb-6 m-0">
                    <div className="mb-6 mt-0">
                      <h3 className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest leading-none m-0 p-0 mb-5 flex items-center">
                        <span className="flex-1 border-b border-border/60 mr-3"></span>
                        POPULAR
                        <span className="flex-1 border-b border-border/60 ml-3"></span>
                      </h3>
                      
                      <h4 className="text-[13px] font-bold text-foreground mb-4">Featured On IndianBrand</h4>
                      <div className="grid grid-cols-3 gap-y-4 gap-x-2">
                        {popularFeatured.map((item, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <Link href="#" onClick={() => setOpen(false)} className="flex flex-col items-center group">
                              <div className="w-[68px] h-[68px] rounded-full border border-border flex items-center justify-center mb-1.5 group-hover:border-primary/50 transition-colors overflow-hidden">
                                <Image src={item.imgUrl} alt={item.title} width={48} height={48} className="object-cover rounded-full" unoptimized />
                              </div>
                              <span className="text-[10px] text-center font-medium text-foreground/80 leading-tight">
                                {item.title}
                              </span>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-[13px] font-bold text-foreground mb-4">All Popular</h4>
                      <div className="grid grid-cols-3 gap-y-6 gap-x-2">
                        {popularAll.map((item, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 + idx * 0.03 }}
                          >
                            <Link href="#" onClick={() => setOpen(false)} className="flex flex-col items-center group">
                              <div className="relative w-12 h-12 flex items-center justify-center mb-1 overflow-hidden">
                                <Image src={item.imgUrl} alt={item.title} fill className="object-cover rounded-md" unoptimized />
                              </div>
                              <span className="text-[10px] text-center font-medium text-foreground/80 leading-tight">
                                {item.title}
                              </span>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="px-3 pt-0 pb-6 m-0">
                    {activeCategory && (
                      <div className="mt-0">
                        <h3 className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest leading-none m-0 p-0 mb-5 flex items-center">
                            <span className="flex-1 border-b border-border/60 mr-3"></span>
                            {activeCategory.title.toUpperCase()}
                            <span className="flex-1 border-b border-border/60 ml-3"></span>
                        </h3>
                        <div className="grid grid-cols-3 gap-y-6 gap-x-2">
                          {activeCategory.subCategories.map((sub, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: idx * 0.03 }}
                            >
                              <Link href={`${activeCategory.href}/${sub.toLowerCase().replace(/\s+/g, '-')}`} onClick={() => setOpen(false)} className="flex flex-col items-center group">
                                <div className="relative w-12 h-12 flex items-center justify-center mb-1 overflow-hidden">
                                  <Image src={activeCategory.imgUrl} alt={sub} fill className="object-cover rounded-md" unoptimized />
                                </div>
                                <span className="text-[10px] text-center font-medium text-foreground/80 leading-tight">
                                  {sub}
                                </span>
                              </Link>
                            </motion.div>
                          ))}
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
