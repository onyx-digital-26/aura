import LiquidHero from "@/components/visuals/LiquidHero";
import ProductCarousel from "@/components/shop/ProductCarousel";
import AboutTeaser from "@/components/home/AboutTeaser";
import JournalSection from "@/components/home/JournalSection";
// 1. Import the new component
import VelocityScroll from "@/components/visuals/VelocityScroll";

export default function Home() {
  return (
    <>
      <LiquidHero />
      <ProductCarousel />

      {/* 2. Add Velocity Scroll here as a visual break */}
      <VelocityScroll />

      <AboutTeaser />
      <JournalSection />
    </>
  );
}
