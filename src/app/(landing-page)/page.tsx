import { HeroSection } from "./section/HeroSection";

export default function LandingPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-start bg-background min-h-[500px]">
      <HeroSection />
      
      {/* We can add more sections (Categories, Trending, etc.) here later */}
    </main>
  );  
}
