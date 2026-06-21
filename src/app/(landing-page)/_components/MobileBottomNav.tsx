"use client";

import Link from "next/link";
import { Home, LayoutGrid, Heart, User, Package } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const bottomNavItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: LayoutGrid, label: "Categories", href: "/categories" },
  { icon: Heart, label: "Wishlist", href: "/wishlist" },
  { icon: User, label: "Account", href: "/account" },
  { icon: Package, label: "Orders", href: "/orders" },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-background border-t border-border z-50 pb-safe pt-2">
      <div className="flex justify-between items-center w-full px-1">
        {bottomNavItems.map((item) => {
          // Ensure exact match for Home, otherwise active if pathname starts with href
          const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

          return (
            <Link 
              key={item.label} 
              href={item.href}
              className="flex flex-col items-center justify-center flex-1 group"
            >
              <div className={cn(
                "px-4 py-1 rounded-full transition-all duration-300",
                isActive 
                  ? "bg-primary/15 text-primary" 
                  : "text-muted-foreground group-hover:bg-accent group-hover:text-accent-foreground"
              )}>
                <item.icon className="h-[22px] w-[22px]" strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className={cn(
                "text-[10px] font-semibold transition-colors mt-1 mb-1",
                isActive ? "text-primary" : "text-muted-foreground"
              )}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
