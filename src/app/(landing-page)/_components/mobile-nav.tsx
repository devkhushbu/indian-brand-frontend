"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"
import { allCategories, mainNav } from "./nav-data"
import { useState } from "react"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[350px] p-0 flex flex-col">
        <SheetHeader className="p-4 border-b text-left">
          <SheetTitle className="text-xl font-bold text-[#1f2937]">
            Indian<span className="text-[#f97316]">Brand</span>.in
          </SheetTitle>
          <SheetDescription className="sr-only">Navigation Menu</SheetDescription>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col p-4 space-y-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-gray-500 uppercase tracking-wider">Main Menu</h4>
              <nav className="flex flex-col space-y-2">
                {mainNav.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-base font-medium text-gray-800 hover:text-[#f97316] transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </div>
            
            <div className="h-px bg-gray-200" />
            
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-gray-500 uppercase tracking-wider">Categories</h4>
              <nav className="flex flex-col space-y-2">
                {allCategories.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-base text-gray-700 hover:text-[#f97316] transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
