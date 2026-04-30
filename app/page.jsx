import Hero from "@/components/sections/landing/HeroSection";
import ServiceSection2 from "@/components/sections/landing/ServiceSection2";
import Services from "@/components/sections/landing/ServicesSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <ServiceSection2 />
    </div>
  );
}
