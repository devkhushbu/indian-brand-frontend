import React from "react";
import { Rocket, RotateCcw, CreditCard, MessageCircle, Gift } from "lucide-react";

const SERVICES = [
  {
    icon: Rocket,
    title: "Free Delivery",
    subtitle: "For all orders over $99",
  },
  {
    icon: RotateCcw,
    title: "90 Days Return",
    subtitle: "If goods have problems",
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    subtitle: "100% secure payment",
  },
  {
    icon: MessageCircle,
    title: "24/7 Support",
    subtitle: "Dedicated support",
  },
  {
    icon: Gift,
    title: "Gift Service",
    subtitle: "Support gift service",
  },
];

export function HomeServices() {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-4 md:px-8 mt-6 mb-4 select-none">
      <div className="bg-background border border-border rounded-lg grid grid-cols-2 md:grid-cols-5 py-6 px-4 md:px-8 gap-y-6 md:gap-y-0 gap-x-4">
        {SERVICES.map((service, index) => {
          const IconComp = service.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center text-center px-2 py-2 flex-1 w-full group cursor-pointer"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#fcb800]/8 dark:bg-[#fcb800]/15 mb-4 transition-transform duration-300 group-hover:scale-105">
                <IconComp className="w-6 h-6 text-[#fcb800] stroke-[1.5]" />
              </div>
              <h4 className="text-[14px] font-bold text-foreground tracking-tight leading-tight transition-colors group-hover:text-[#fcb800]">
                {service.title}
              </h4>
              <p className="text-[12px] text-muted-foreground leading-tight mt-1 font-medium">
                {service.subtitle}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
