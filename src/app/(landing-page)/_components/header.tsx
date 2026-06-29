"use client";

import Link from "next/link";
import { 
  Heart, 
  ShoppingBag, 
  User, 
  Menu,
  MessageCircleQuestion,
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
  ChevronRight,
  ChevronDown,
  GitCompare
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { MobileHeader } from "@/app/(landing-page)/_components/MobileHeader";
import { allCategories, searchFilters } from "./nav-data";
import { useState } from "react";
import { usePathname } from "next/navigation";

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

const navItems = [
 { title: "Home", href: "/" },
  { title: "All Brands", href: "/brands" },
  { title: "All Blogs", href: "/blogs" },
  { title: "Offers", href: "/offers" },
  { title: "Men Clothing & Fashion", href: "/category/men-clothing-fashion" },
  { title: "Computer & Accessories", href: "/category/computer-accessories" },
  { title: "Electronics", href: "/category/electronics" },
];

export function Header() {
  const [searchCategory, setSearchCategory] = useState("All Categories");
  const [activeMegaCategory, setActiveMegaCategory] = useState(allCategories[0]);
  const [isDeptOpen, setIsDeptOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full flex flex-col font-sans bg-[#F7BA01] border-b border-black/10 shadow-sm relative z-10">
      <MobileHeader />
      {/* Top Bar */}
      <div className="hidden md:flex justify-between items-center px-4 py-2 bg-black/5 text-[11px] text-black font-semibold border-b border-black/5">
        <div className="flex items-center space-x-2">
          <MessageCircleQuestion className="h-4 w-4 text-black/70" />
          <span>All Over India Delivery</span>
        </div>
        <div className="flex items-center space-x-3">
          <Link href="#" className="hover:text-black/80 transition-colors">Become a Seller</Link>
          <span className="h-3 w-[1px] bg-black/10"></span>
          <Link href="#" className="hover:text-black/80 transition-colors">Buyer Protection</Link>
          <span className="h-3 w-[1px] bg-black/10"></span>
          <Link href="#" className="hover:text-black/80 transition-colors">Track Order</Link>
          <span className="h-3 w-[1px] bg-black/10"></span>
          <Link href="#" className="hover:text-black/80 transition-colors">Help Center</Link>
        </div>
      </div>

      {/* Main Header area */}
      <div className="hidden md:flex items-center justify-between px-4 py-4 md:px-8">

        {/* Logo */}
        <div className="flex flex-col items-start mr-4 md:mr-8 shrink-0 select-none">
          <Link href="/" className="flex items-center">
            <span className="text-3xl font-extrabold text-black">
              Indian<span className="text-white">Brand</span><span className="text-sm font-bold text-black">.in</span>
            </span>
          </Link>
          <span className="text-[10px] md:text-xs text-black/60 font-semibold hidden sm:block">
            Discover India. Buy India. Grow India.
          </span>
        </div>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex flex-1 max-w-xl mx-6 items-center">
          <div className="flex w-full h-[44px] rounded overflow-hidden bg-white shadow-sm focus-within:ring-2 focus-within:ring-black/10 transition-all">
            
            {/* Categories Dropdown (Left) */}
            <div className="flex items-center shrink-0 bg-gray-50 border-r border-gray-150 hover:bg-gray-100 transition-colors">
              <Select value={searchCategory} onValueChange={setSearchCategory}>
                <SelectTrigger className="w-[125px] border-none shadow-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 bg-transparent text-sm text-gray-800 font-bold rounded-none h-full px-3">
                  <SelectValue placeholder="All" />
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
              placeholder="I'm shopping for..." 
              className="flex-1 px-4 outline-none text-sm w-full bg-transparent h-full text-black placeholder:text-gray-400 font-semibold"
            />
            
            {/* Search Button (Right) */}
            <button className="bg-black hover:bg-black/90 text-white px-7 font-bold transition-colors text-sm h-full shrink-0 cursor-pointer">
              Search
            </button>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          {/* Compare Icon Button */}
          <Link href="/compare" className="relative flex items-center justify-center h-10 w-10 bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 rounded-full transition-all group cursor-pointer select-none">
            <GitCompare className="h-5.5 w-5.5 text-black dark:text-white stroke-[1.5]" />
            <span className="absolute -bottom-1 -right-1 bg-black text-white text-[8px] font-bold h-4 w-4 flex items-center justify-center rounded-full shadow-sm">
              0
            </span>
          </Link>

          {/* Wishlist Icon Button */}
          <Link href="/wishlist" className="relative flex items-center justify-center h-10 w-10 bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 rounded-full transition-all group cursor-pointer select-none">
            <Heart className="h-5.5 w-5.5 text-black dark:text-white stroke-[1.5]" />
            <span className="absolute -bottom-1 -right-1 bg-black text-white text-[8px] font-bold h-4 w-4 flex items-center justify-center rounded-full shadow-sm">
              0
            </span>
          </Link>

          {/* Cart Icon Button */}
          <Link href="/cart" className="relative flex items-center justify-center h-10 w-10 bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 rounded-full transition-all group cursor-pointer select-none">
            <ShoppingBag className="h-5.5 w-5.5 text-black dark:text-white stroke-[1.5]" />
            <span className="absolute -bottom-1 -right-1 bg-black text-white text-[8px] font-bold h-4 w-4 flex items-center justify-center rounded-full shadow-sm">
              0
            </span>
          </Link>

          {/* Profile Login/Register Trigger */}
          <div className="hidden lg:flex items-center space-x-2 cursor-pointer group select-none">
            <div className="flex items-center justify-center h-10 w-10 bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 rounded-full transition-all">
              <User className="h-5.5 w-5.5 text-black dark:text-white stroke-[1.5]" />
            </div>
            <div className="flex flex-col text-[11px] leading-tight font-bold text-black dark:text-white">
              <span className="hover:underline">Login</span>
              <span className="text-black/85 hover:underline">Register</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Menu (Premium Yellow Bar) */}
      <div className="hidden md:flex items-center px-4 md:px-8 bg-[#F7BA01] dark:bg-[#161616] border-t border-black/5 dark:border-white/5 relative h-12">
        
        {/* Shop by Categories Dropdown Wrapper */}
        <div 
          className="relative h-full"
          onMouseEnter={() => setIsDeptOpen(true)}
          onMouseLeave={() => setIsDeptOpen(false)}
        >
          {/* Shop by Department Trigger Button */}
          <button className="flex items-center space-x-2 text-black dark:text-white font-bold text-[13px] uppercase h-full px-5 hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer select-none border-none outline-none bg-transparent whitespace-nowrap shrink-0">
            <Menu className="h-4.5 w-4.5" />
            <span>Shop by Department</span>
          </button>

          {/* Mega Menu Dropdown */}
          {isDeptOpen && (
            <div className="absolute left-0 top-full w-[820px] bg-white dark:bg-zinc-950 shadow-[0_12px_36px_rgba(0,0,0,0.18)] border border-gray-150 dark:border-zinc-800 flex h-[480px] z-50 rounded-b-lg overflow-hidden animate-in fade-in slide-in-from-top-1.5 duration-200">
              
              {/* Left sidebar - Categories List */}
              <div className="w-[260px] bg-gray-50/40 dark:bg-zinc-900/30 border-r border-gray-100 dark:border-zinc-900 overflow-y-auto hide-scrollbar py-2 shrink-0">
                {allCategories.map((cat) => {
                  const CategoryIcon = getCategoryIcon(cat.title);
                  const isActive = activeMegaCategory.title === cat.title;
                  const hasSubCategories = (cat.groups && cat.groups.length > 0) || cat.subCategories.length > 0;
                  
                  return (
                    <button
                      key={cat.title}
                      onMouseEnter={() => setActiveMegaCategory(cat)}
                      onClick={() => setActiveMegaCategory(cat)}
                      className={`w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors cursor-pointer border-none outline-none ${
                        isActive 
                          ? "bg-[#F7BA01] text-white dark:text-black" 
                          : "text-gray-700 dark:text-zinc-300 hover:bg-gray-100/60 dark:hover:bg-zinc-900/50"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`h-8 w-8 rounded-full flex items-center justify-center transition-colors ${
                          isActive 
                            ? "bg-white/20 dark:bg-black/10" 
                            : "bg-black/5 dark:bg-white/5"
                        }`}>
                          <CategoryIcon className={`h-4 w-4 ${isActive ? "text-white dark:text-black" : "text-gray-500 dark:text-zinc-400"}`} />
                        </div>
                        <span className="text-[13px] font-bold tracking-wide">
                          {cat.title}
                        </span>
                      </div>
                      {hasSubCategories && (
                        <ChevronRight className={`h-3.5 w-3.5 ${isActive ? "text-white dark:text-black" : "text-gray-300 dark:text-zinc-500"}`} />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Right content pane - Grouped Subcategories */}
              <div className="flex-1 p-8 overflow-y-auto bg-white dark:bg-zinc-950 hide-scrollbar">
                <div className="flex items-center justify-between mb-6 pb-2.5 border-b border-gray-100 dark:border-zinc-800">
                  <h3 className="text-[15px] font-extrabold text-black dark:text-white tracking-wide">
                    {activeMegaCategory.title}
                  </h3>
                  <Link 
                    href={activeMegaCategory.href} 
                    className="text-[12px] font-extrabold text-[#F7BA01] hover:underline transition-colors"
                  >
                    View All
                  </Link>
                </div>
                
                {/* Columns Grid */}
                <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                  {/* Map groups if they exist */}
                  {activeMegaCategory.groups && activeMegaCategory.groups.map((group, gIdx) => (
                    <div key={gIdx} className="flex flex-col">
                      <h4 className="text-[12px] font-extrabold text-black dark:text-white uppercase tracking-wider mb-3">
                        {group.title}
                      </h4>
                      <div className="flex flex-col space-y-2">
                        {group.items.map((item, itemIdx) => (
                          <Link 
                            key={itemIdx}
                            href={`${activeMegaCategory.href}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-[12px] font-semibold text-gray-500 dark:text-zinc-400 hover:text-[#F7BA01] dark:hover:text-[#F7BA01] transition-colors py-0.5"
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Fallback to simple subcategories if no groups */}
                  {(!activeMegaCategory.groups || activeMegaCategory.groups.length === 0) && (
                    <div className="flex flex-col col-span-2">
                      <div className="grid grid-cols-2 gap-4">
                        {activeMegaCategory.subCategories.map((sub, sIdx) => (
                          <Link 
                            key={sIdx}
                            href={`${activeMegaCategory.href}/${sub.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-[12px] font-semibold text-gray-500 dark:text-zinc-400 hover:text-[#F7BA01] dark:hover:text-[#F7BA01] transition-colors py-1 block"
                          >
                            {sub}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Standard Nav Items */}
        <nav className="flex-1 flex items-center justify-start ml-4 space-x-4 h-full overflow-x-auto whitespace-nowrap hide-scrollbar">
          {navItems.map((item, idx) => {
            const isActive = item.href !== "#" && pathname === item.href;
            return (
              <Link 
                key={idx}
                href={item.href}
                className={`text-[13px] font-bold tracking-wide transition-colors inline-block py-3 px-2 shrink-0 ${
                  isActive 
                    ? "text-white dark:text-[#F7BA01]" 
                    : "text-black dark:text-zinc-300 hover:text-black/75 dark:hover:text-white"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* Right side items */}
        <div className="flex items-center space-x-3.5 ml-4 shrink-0 select-none">
          <Link href="/sell" className="text-black dark:text-zinc-300 font-bold text-[13px] hover:text-black/80 dark:hover:text-white whitespace-nowrap transition-colors">
            Sell on IndianBrand.in
          </Link>
          <span className="h-3.5 w-[1px] bg-black/15 dark:bg-white/15"></span>
          <Link href="/track-order" className="text-black dark:text-zinc-300 font-bold text-[13px] hover:text-black/80 dark:hover:text-white whitespace-nowrap transition-colors">
            Track your order
          </Link>
          <span className="h-3.5 w-[1px] bg-black/15 dark:bg-white/15"></span>
          <button className="flex items-center space-x-0.5 text-black dark:text-zinc-300 font-bold text-[13px] hover:text-black/80 dark:hover:text-white cursor-pointer transition-colors border-none outline-none bg-transparent whitespace-nowrap">
            <span>USD</span>
            <ChevronDown className="h-3 w-3" />
          </button>
          <span className="h-3.5 w-[1px] bg-black/15 dark:bg-white/15"></span>
          <button className="flex items-center space-x-1 text-black dark:text-zinc-300 font-bold text-[13px] hover:text-black/80 dark:hover:text-white cursor-pointer transition-colors border-none outline-none bg-transparent whitespace-nowrap">
            <span className="text-sm">🇺🇸</span>
            <span>English</span>
            <ChevronDown className="h-3 w-3" />
          </button>
        </div>
      </div>
    </header>
  );
}
