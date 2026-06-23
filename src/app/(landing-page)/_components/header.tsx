"use client";

import Link from "next/link";
import { 
  Heart, 
  ShoppingCart, 
  User, 
  Menu,
  MessageCircleQuestion,
  Store
} from "lucide-react";
import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { MobileHeader } from "@/app/(landing-page)/_components/MobileHeader";
import { allCategories, mainNav, searchFilters } from "./nav-data";
import { useState } from "react";

export function Header() {
  const [searchCategory, setSearchCategory] = useState("All Categories");
  const [activeMegaCategory, setActiveMegaCategory] = useState(allCategories[0]);

  return (
    <header className="w-full flex flex-col font-sans relative z-10">
      {/* Animated Background with exact opacity fade mask to match original gradient fade */}
      <div className="absolute inset-0 bg-animated-gradient z-[-1] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.3)_50%,transparent_100%)] -webkit-mask-image-[linear-gradient(to_bottom,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.3)_50%,transparent_100%)] pointer-events-none"></div>
      <MobileHeader />
      {/* Top Bar */}
      <div className="hidden md:flex justify-between items-center px-4 py-2 bg-transparent text-xs text-muted-foreground border-b border-border/50">
        <div className="flex items-center space-x-2">
          <MessageCircleQuestion className="h-4 w-4" />
          <span>All Over India Delivery</span>
        </div>
        <div className="flex items-center space-x-3">
          <Link href="#" className="hover:text-primary transition-colors">Become a Seller</Link>
          <span className="h-3 w-[1px] bg-border/60"></span>
          <Link href="#" className="hover:text-primary transition-colors">Buyer Protection</Link>
          <span className="h-3 w-[1px] bg-border/60"></span>
          <Link href="#" className="hover:text-primary transition-colors">Track Order</Link>
          <span className="h-3 w-[1px] bg-border/60"></span>
          <Link href="#" className="hover:text-primary transition-colors">Help Center</Link>
        </div>
      </div>

      {/* Main Header area */}
      <div className="hidden md:flex items-center justify-between px-4 py-4 md:px-8 bg-transparent border-b border-border/50">

        {/* Logo */}
        <div className="flex flex-col items-start mr-4 md:mr-8 shrink-0">
          <Link href="/" className="flex items-center">
            <span className="text-3xl font-extrabold text-foreground">
              Indian<span className="text-primary">Brand</span><span className="text-sm font-semibold text-foreground">.in</span>
            </span>
          </Link>
          <span className="text-[10px] md:text-xs text-muted-foreground font-medium hidden sm:block">
            Discover India. Buy India. Grow India.
          </span>
        </div>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex flex-1 max-w-xl mx-6 items-center">
          <div className="flex w-full h-[46px] border border-primary/50 rounded-xl overflow-hidden bg-white focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
            
            {/* Categories Dropdown (Left) */}
            <div className="flex items-center shrink-0 bg-muted/50 border-r border-border hover:bg-muted transition-colors">
              <Select value={searchCategory} onValueChange={setSearchCategory}>
                <SelectTrigger className="w-[150px] border-none shadow-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 bg-transparent text-sm text-foreground font-medium rounded-none h-full">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent position="popper" sideOffset={4}>
                  <SelectItem value="All Categories">All Categories</SelectItem>
                  {searchFilters.map((filter) => (
                    <SelectItem key={filter} value={filter}>{filter}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Search Input Box (Middle) */}
            <input 
              type="text" 
              placeholder="Search products, brands, manufacturers..." 
              className="flex-1 px-5 outline-none text-sm w-full bg-transparent h-full text-foreground"
            />
            
            {/* Search Button (Right) */}
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 font-bold transition-colors text-sm h-full shrink-0">
              Search
            </button>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-6 md:space-x-8">
          <div className="hidden lg:flex items-center space-x-3 cursor-pointer group">
            <div className="flex items-center justify-center h-[42px] w-[42px] bg-primary/10 rounded-full group-hover:bg-primary/20 transition-all duration-300">
              <User className="h-[20px] w-[20px] text-primary group-hover:text-primary/80 transition-colors" />
            </div>
            <div className="flex flex-col text-sm">
              <span className="text-muted-foreground text-[10px] uppercase tracking-wider font-bold">Login / Signup</span>
              <span className="font-extrabold text-foreground group-hover:text-primary transition-colors text-[13px]">My Account</span>
            </div>
          </div>

          <Link href="/wishlist" className="hidden sm:flex flex-col items-center cursor-pointer group hover:text-primary transition-colors">
            <div className="flex items-center justify-center h-[42px] w-[42px] bg-primary/10 rounded-full group-hover:bg-primary/20 transition-all duration-300 mb-1">
              <Heart className="h-[18px] w-[18px] text-primary group-hover:text-primary/80 transition-colors" />
            </div>
            <span className="text-[11px] font-bold text-foreground group-hover:text-primary transition-colors">Wishlist</span>
          </Link>

          <Link href="/cart" className="flex flex-col items-center cursor-pointer group hover:text-primary transition-colors relative">
            <div className="relative flex items-center justify-center h-[42px] w-[42px] bg-primary/10 rounded-full group-hover:bg-primary/20 transition-all duration-300 mb-1">
              <ShoppingCart className="h-[18px] w-[18px] text-primary group-hover:text-primary/80 transition-colors" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-bold h-[18px] w-[18px] flex items-center justify-center rounded-full border-2 border-background">
                0
              </span>
            </div>
            <span className="text-[11px] font-bold text-foreground group-hover:text-primary transition-colors">Cart</span>
          </Link>
        </div>
      </div>


      {/* Bottom Navigation Menu */}
      <div className="hidden md:flex items-center px-4 md:px-8 bg-background relative border-b border-border/50">
        <NavigationMenu>
          <NavigationMenuList>
            {/* Shop by Categories Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground rounded-none h-12 px-6 font-bold text-[13px] tracking-wider transition-colors">
                <Menu className="h-5 w-5 mr-2" />
                SHOP BY CATEGORY
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="flex w-[750px] bg-popover rounded-xl shadow-2xl border border-border h-[480px] overflow-hidden">
                  {/* Left Categories List */}
                  <div className="w-[260px] bg-muted/30 border-r border-border overflow-y-auto hide-scrollbar">
                    {allCategories.map((cat) => (
                      <button
                        key={cat.title}
                        onMouseEnter={() => setActiveMegaCategory(cat)}
                        onClick={() => setActiveMegaCategory(cat)}
                        className={`w-full flex items-center space-x-3 px-4 py-3.5 text-left transition-colors border-l-4 ${
                          activeMegaCategory.title === cat.title 
                            ? "bg-popover border-primary" 
                            : "border-transparent hover:bg-muted"
                        }`}
                      >
                        <div className={`relative w-8 h-8 rounded-full overflow-hidden shrink-0 transition-colors duration-300 ${
                          activeMegaCategory.title === cat.title ? (cat.bgColor || "bg-primary/10") : "bg-transparent border border-border"
                        }`}>
                          {activeMegaCategory.title === cat.title && cat.glowOrb && (
                            <>
                              <div className={`absolute top-0 right-0 w-6 h-6 rounded-full blur-[6px] -mr-1 -mt-1 ${cat.glowOrb} mix-blend-multiply dark:mix-blend-screen pointer-events-none z-0`} />
                              <div className={`absolute bottom-0 left-0 w-4 h-4 rounded-full blur-[4px] -ml-0.5 -mb-0.5 ${cat.glowOrb} mix-blend-multiply dark:mix-blend-screen opacity-70 pointer-events-none z-0`} />
                            </>
                          )}
                          <div className="relative w-[80%] h-[80%] z-10 m-[10%]">
                            <Image src={cat.imgUrl} alt={cat.title} fill className="object-contain" unoptimized />
                          </div>
                        </div>
                        <div className="flex flex-col pr-2">
                          <span className={`text-[13px] font-bold leading-tight ${activeMegaCategory.title === cat.title ? 'text-primary' : 'text-foreground'}`}>
                            {cat.title}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Right Subcategories List */}
                  <div className="flex-1 p-6 overflow-y-auto bg-popover hide-scrollbar">
                    <div className="flex items-center justify-between mb-6 pb-2 border-b border-border/50">
                      <h3 className="text-base font-bold text-popover-foreground">{activeMegaCategory.title}</h3>
                      <Link href={activeMegaCategory.href} className="text-xs font-bold text-primary hover:text-primary/80 hover:underline transition-colors">
                        View All
                      </Link>
                    </div>
                    <div className="grid grid-cols-3 gap-y-8 gap-x-4">
                      {activeMegaCategory.subCategories.map((sub, idx) => (
                        <Link 
                          key={idx} 
                          href={`${activeMegaCategory.href}/${sub.toLowerCase().replace(/\s+/g, '-')}`}
                          className="flex flex-col items-center group"
                        >
                          <div className="relative w-[60px] h-[60px] rounded-full bg-muted/50 border border-border flex items-center justify-center overflow-hidden mb-2 group-hover:border-primary group-hover:shadow-md transition-all duration-300">
                            <Image src={`https://picsum.photos/seed/${sub.replace(/\s+/g, '')}/150/150`} alt={sub} fill className="object-cover" unoptimized />
                          </div>
                          <span className="text-[11px] text-center font-semibold text-muted-foreground group-hover:text-primary transition-colors leading-tight">
                            {sub}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Standard Nav Items */}
        <nav className="flex-1 flex items-center justify-start ml-6 space-x-8 overflow-x-auto whitespace-nowrap hide-scrollbar">
          {mainNav.map((nav) => (
            <Link 
              key={nav.title} 
              href={nav.href}
              className="text-[13px] font-bold text-foreground hover:text-primary transition-all duration-300 py-4 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
            >
              {nav.title}
            </Link>
          ))}
        </nav>

        {/* Sell on IndianBrand */}
        <Link href="/sell" className="flex items-center text-primary font-bold text-sm hover:underline ml-4 whitespace-nowrap transition-all">
          <Store className="h-4 w-4 mr-2" />
          Sell on IndianBrand.in
        </Link>
      </div>
    </header>
  );
}
