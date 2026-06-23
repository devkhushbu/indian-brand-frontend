import React from "react";

const IndiaFlagIcon = () => (
  <svg viewBox="0 0 3 2" className="w-7 h-[18px] rounded-[2px] shadow-sm drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
    <rect width="3" height="2" fill="#138808"/>
    <rect width="3" height="1.3333" fill="#ffffff"/>
    <rect width="3" height="0.6667" fill="#f93"/>
    <circle cx="1.5" cy="1" r="0.3" fill="#000080"/>
  </svg>
);

const FEATURES = [
  {
    icon: <span className="text-2xl">🌿</span>,
    title: "HANDPICKED",
    subtitle: "Curated Indian Brands",
  },
  {
    icon: <span className="text-2xl">🏪</span>,
    title: "DIRECT FROM MAKERS",
    subtitle: "No Middlemen",
  },
  {
    icon: <IndiaFlagIcon />,
    title: "MADE IN INDIA",
    subtitle: "Vocal for Local",
  },
  {
    icon: <span className="text-2xl">⭐</span>,
    title: "EMPOWERING INDIA",
    subtitle: "Stronger Together",
  },
];

export function HomeFeatures() {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-4 md:px-8 mb-4">
      <div className="bg-muted/40 rounded-xl md:rounded-2xl grid grid-cols-2 md:flex md:flex-row items-center justify-between py-4 md:py-6 px-2 md:px-8 gap-y-4 md:gap-y-0">
        {FEATURES.map((feature, index) => (
          <div
            key={index}
            className={`relative flex items-center gap-2 md:gap-4 px-1 sm:px-2 md:px-4 py-2 md:py-0 w-full md:w-auto flex-1 justify-center md:justify-start lg:justify-center ${
              index !== FEATURES.length - 1
                ? "md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-1/2 md:after:-translate-y-1/2 md:after:h-[60%] md:after:w-px md:after:bg-border"
                : ""
            } ${
              index % 2 === 0
                ? "max-md:after:content-[''] max-md:after:absolute max-md:after:right-0 max-md:after:top-1/2 max-md:after:-translate-y-1/2 max-md:after:h-[60%] max-md:after:w-px max-md:after:bg-border"
                : ""
            }`}
          >
            <div className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 shrink-0">{feature.icon}</div>
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-xs md:text-sm font-bold text-foreground tracking-wider uppercase leading-tight md:leading-normal">
                {feature.title}
              </span>
              <span className="text-[9px] sm:text-[10px] md:text-xs text-muted-foreground leading-tight md:leading-normal mt-0.5 md:mt-0">
                {feature.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
