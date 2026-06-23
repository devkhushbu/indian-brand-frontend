import { HomeBanner } from "./section/home-banner";
import { HomeFeatures } from "./section/home-features";
import { HomeCollections } from "./section/home-collections";
import { HomeCategoriesStrip } from "./section/home-categories-strip";
import { HomeProductsShowcase } from "./section/home-products-showcase";
import { HomeInitiatives } from "./section/home-initiatives";
import { HomeStatsStrip } from "./section/home-stats-strip";

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-start bg-background min-h-[500px]">
      <HomeBanner />
      <HomeFeatures />
      <HomeCollections />
      <HomeCategoriesStrip />
      <HomeProductsShowcase />
      <HomeInitiatives />
      <HomeStatsStrip />
      {/* We can add more sections (Categories, Trending, etc.) here later */}
    </main>
  );  
}
