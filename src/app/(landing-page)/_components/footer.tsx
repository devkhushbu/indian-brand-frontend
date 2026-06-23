export function Footer() {
  // A beautiful decorative wave and dot pattern that perfectly mimics the traditional Indian border
  const patternSvg = `data:image/svg+xml,%3Csvg width='40' height='12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 6 Q 10 0 20 6 T 40 6' fill='none' stroke='%23EAC2A5' stroke-width='1.5' opacity='0.8'/%3E%3Ccircle cx='10' cy='6' r='1.5' fill='%23EAC2A5' opacity='0.8'/%3E%3Ccircle cx='30' cy='6' r='1.5' fill='%23EAC2A5' opacity='0.8'/%3E%3C/svg%3E`;

  return (
    <footer className="w-full bg-[#FCF8F3] dark:bg-gray-950 pt-16 pb-8 flex flex-col items-center">
      {/* Proudly Indian Band */}
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 mb-16 flex items-center justify-center opacity-90">
        {/* Left Decorative Line */}
        <div 
          className="flex-1 h-[12px] bg-repeat-x bg-center opacity-80" 
          style={{ backgroundImage: `url("${patternSvg}")` }} 
        />
        
        {/* Center Text & Icon */}
        <div className="px-4 md:px-8 flex items-center space-x-3 md:space-x-4 text-gray-800 dark:text-gray-200">
          <span className="text-[15px] md:text-[17px] font-medium tracking-wide">Proudly Indian.</span>
          
          {/* Custom Lotus SVG Icon */}
          <svg className="w-5 h-5 md:w-6 md:h-6 text-[#F26E21] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2 C14 6 15 11 12 17 C9 11 10 6 12 2 Z" />
            <path d="M12 17 C10 12 5 10 2 12 C4 15 8 17 12 17 Z" />
            <path d="M12 17 C14 12 19 10 22 12 C20 15 16 17 12 17 Z" />
            <path d="M3 15 C5 18 10 20 12 22 C14 20 19 18 21 15 C18 17 14 17 12 18 C10 17 6 17 3 15 Z" opacity="0.8"/>
          </svg>

          <span className="text-[15px] md:text-[17px] font-medium tracking-wide">Proudly Global.</span>
        </div>

        {/* Right Decorative Line */}
        <div 
          className="flex-1 h-[12px] bg-repeat-x bg-center opacity-80" 
          style={{ backgroundImage: `url("${patternSvg}")` }} 
        />
      </div>

      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} IndianBrand.in. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
