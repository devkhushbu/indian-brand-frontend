import { HomeBanner } from "./section/home-banner";
import { HomeServices } from "./section/home-services";
import { HomeProductsShowcase } from "./section/home-products-showcase";

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-start bg-background min-h-[500px]">
      <HomeBanner />
      <HomeServices />
      <HomeProductsShowcase />

      {/* We can add more sections (Categories, Trending, etc.) here later */}
    </main>
  );  
}
