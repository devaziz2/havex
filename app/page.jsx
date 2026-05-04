import Hero from "@/components/sections/landing/HeroSection";
import ServiceSection2 from "@/components/sections/landing/ServiceSection2";
import Services from "@/components/sections/landing/ServicesSection";
import VisionMissionSection from "@/components/sections/landing/VisionMissionSection";
import PricingSection from "@/components/sections/landing/PricingSection";
import Image from "next/image";
import ReviewsSection from "@/components/sections/landing/ReviewSection";
import CTASection from "@/components/sections/landing/CTASection";
import Footer from "@/components/sections/landing/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <ServiceSection2 />
      <VisionMissionSection />
      <PricingSection />
      <ReviewsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
