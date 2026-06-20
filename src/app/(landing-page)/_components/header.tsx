"use client";

import Link from "next/link";
import { 
  Heart, 
  Search, 
  ShoppingCart, 
  User, 
  Menu,
  MessageCircleQuestion,
  Store
} from "lucide-react";

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

import { MobileNav } from "./mobile-nav";
import { allCategories, mainNav, searchFilters } from "./nav-data";
import { useState } from "react";

export function Header() {
  const [searchCategory, setSearchCategory] = useState("All Categories");

  return (
    <header className="w-full flex flex-col font-sans">
      {/* Top Bar */}
      <div className="hidden md:flex justify-between items-center px-4 py-2 bg-[#f8f9fa] text-xs text-gray-600 border-b">
        <div className="flex items-center space-x-2">
          <MessageCircleQuestion className="h-4 w-4" />
          <span>All Over India Delivery</span>
        </div>
        <div className="flex items-center space-x-4 divide-x divide-gray-300">
          <Link href="#" className="hover:text-primary pl-4 first:pl-0">Become a Seller</Link>
          <Link href="#" className="hover:text-primary pl-4">Buyer Protection</Link>
          <Link href="#" className="hover:text-primary pl-4">Track Order</Link>
          <Link href="#" className="hover:text-primary pl-4">Help Center</Link>
        </div>
      </div>

      {/* Main Header area */}
      <div className="flex items-center justify-between px-4 py-4 md:px-8 bg-white border-b">
        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center">
          <MobileNav />
        </div>

        {/* Logo */}
        <div className="flex flex-col items-start mr-4 md:mr-8 flex-shrink-0">
          <Link href="/" className="flex items-center">
            <span className="text-3xl font-extrabold text-[#1f2937]">
              Indian<span className="text-[#f97316]">Brand</span><span className="text-sm font-semibold">.in</span>
            </span>
          </Link>
          <span className="text-[10px] md:text-xs text-gray-500 font-medium hidden sm:block">
            Discover India. Buy India. Grow India.
          </span>
        </div>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex flex-1 max-w-2xl mx-4">
          <div className="flex w-full border border-[#f97316] rounded-md overflow-hidden bg-white group focus-within:ring-1 focus-within:ring-[#f97316] transition-all">
            <input 
              type="text" 
              placeholder="Search products, brands, manufacturers..." 
              className="flex-1 px-4 py-2 outline-none text-sm w-full"
            />
            <div className="flex items-center border-l border-gray-200 bg-white">
              <Select value={searchCategory} onValueChange={setSearchCategory}>
                <SelectTrigger className="w-[150px] border-none shadow-none focus:ring-0 bg-transparent text-sm text-gray-600 rounded-none h-full hover:bg-gray-50 focus:bg-gray-50 transition-colors">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All Categories">All Categories</SelectItem>
                  {searchFilters.map((filter) => (
                    <SelectItem key={filter} value={filter}>{filter}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <button className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-2 font-medium transition-colors">
              Search
            </button>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-6 md:space-x-8">
          <div className="hidden lg:flex items-center space-x-3 cursor-pointer group">
            <div className="flex items-center justify-center h-[42px] w-[42px] bg-[#f1f5f9] rounded-full group-hover:bg-slate-200 transition-colors duration-300">
              <User className="h-[20px] w-[20px] text-[#1e293b] group-hover:text-[#ea580c] transition-colors" />
            </div>
            <div className="flex flex-col text-sm">
              <span className="text-gray-500 text-[11px] uppercase tracking-wider font-semibold">Login / Signup</span>
              <span className="font-bold text-[#0f172a] group-hover:text-[#ea580c] transition-colors">My Account</span>
            </div>
          </div>

          <Link href="/wishlist" className="hidden sm:flex flex-col items-center cursor-pointer group hover:text-[#ea580c] transition-colors">
            <div className="flex items-center justify-center h-[42px] w-[42px] bg-[#f1f5f9] rounded-full group-hover:bg-slate-200 transition-colors duration-300 mb-1">
              <Heart className="h-[20px] w-[20px] text-[#1e293b] group-hover:text-[#ea580c] transition-colors" />
            </div>
            <span className="text-[11px] font-bold text-[#0f172a] group-hover:text-[#ea580c] transition-colors">Wishlist</span>
          </Link>

          <Link href="/cart" className="flex flex-col items-center cursor-pointer group hover:text-[#ea580c] transition-colors relative">
            <div className="relative flex items-center justify-center h-[42px] w-[42px] bg-[#f1f5f9] rounded-full group-hover:bg-slate-200 transition-colors duration-300 mb-1">
              <ShoppingCart className="h-[20px] w-[20px] text-[#1e293b] group-hover:text-[#ea580c] transition-colors" />
              <span className="absolute -top-1 -right-1 bg-[#ea580c] text-white text-[10px] font-bold h-[18px] w-[18px] flex items-center justify-center rounded-full border-2 border-white">
                0
              </span>
            </div>
            <span className="text-[11px] font-bold text-[#0f172a] group-hover:text-[#ea580c] transition-colors">Cart</span>
          </Link>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden p-4 bg-white border-b">
        <div className="flex w-full border border-gray-300 rounded-md overflow-hidden bg-white">
          <input 
            type="text" 
            placeholder="Search products..." 
            className="flex-1 px-3 py-2 outline-none text-sm"
          />
          <button className="bg-[#f97316] text-white px-4 py-2">
            <Search className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Bottom Navigation Menu */}
      <div className="hidden md:flex items-center px-4 md:px-8 border-b bg-white relative">
        <NavigationMenu>
          <NavigationMenuList>
            {/* Shop by Categories Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-slate-100 text-slate-900 hover:bg-slate-200 hover:text-slate-900 data-[state=open]:bg-slate-200 rounded-none h-12 px-6 font-medium">
                <Menu className="h-5 w-5 mr-2" />
                Shop by Categories
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 p-6 w-[650px] bg-white rounded-xl shadow-2xl border border-slate-100">
                  {allCategories.map((cat) => (
                    <Link
                      key={cat.title}
                      href={cat.href}
                      className="group flex items-start space-x-4 select-none rounded-lg p-3 transition-colors hover:bg-orange-50 focus:bg-orange-50 outline-none"
                    >
                      <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[10px] bg-slate-50 text-orange-500 border border-slate-100 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-colors duration-300">
                        {cat.icon && <cat.icon className="h-[20px] w-[20px]" />}
                      </div>
                      <div className="flex flex-col justify-center space-y-1 mt-0.5">
                        <span className="text-sm font-bold text-slate-800 group-hover:text-orange-600 transition-colors">
                          {cat.title}
                        </span>
                        <span className="text-[11px] font-medium text-slate-500 line-clamp-1">
                          {cat.subtitle}
                        </span>
                      </div>
                    </Link>
                  ))}
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
              className="text-[13px] font-bold text-slate-700 hover:text-[#ea580c] transition-all duration-300 py-4 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#ea580c] hover:after:w-full after:transition-all after:duration-300"
            >
              {nav.title}
            </Link>
          ))}
        </nav>

        {/* Sell on IndianBrand */}
        <Link href="/sell" className="flex items-center text-[#f97316] font-bold text-sm hover:underline ml-4 whitespace-nowrap">
          <Store className="h-4 w-4 mr-2" />
          Sell on IndianBrand.in
        </Link>
      </div>
    </header>
  );
}
