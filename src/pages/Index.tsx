import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import CategoriesSection from "@/components/CategoriesSection";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CategoriesSection />
      <ProductGrid />
      <AboutSection />
    </div>
  );
};

export default Index;
