import AboutHero from "@/components/sections/about/AboutHero";
import AboutIntroSection from "@/components/sections/about/AboutIntroSection";
import AboutFeaturesSection from "@/components/sections/about/AboutFeaturesSection";
import AboutWhyHavexSection from "@/components/sections/about/AboutWhyHavexSection";
import AboutContactSection from "@/components/sections/about/AboutContactSection";
import Footer from "@/components/sections/landing/Footer";

export const metadata = {
  title: "About Us | HAVEX",
  description: "Learn more about HAVEX and our mission.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AboutHero />
      <AboutIntroSection />
      <AboutFeaturesSection />
      <AboutWhyHavexSection />
      <AboutContactSection />
      <Footer />
    </div>
  );
}
