import Footer from "@/components/sections/landing/Footer";
import DetailServicesSection from "@/components/sections/service/DetailServices";
import HavexSection from "@/components/sections/service/HavexSection";
import PricingSection from "@/components/sections/service/PricingSection";
import ServiceHero from "@/components/sections/service/ServiceHero";
import StandardFeatures from "@/components/sections/service/StandardFeatures";
import VicidialSection2 from "@/components/sections/service/VicidailSection2";
import VicidailSolution from "@/components/sections/service/VicidailSolution";
import React from "react";

function ServicesPage() {
  return (
    <div>
      <ServiceHero />
      <DetailServicesSection />
      <PricingSection />
      <HavexSection />
      <VicidailSolution />
      <VicidialSection2 />
      <StandardFeatures />
      <Footer />
    </div>
  );
}

export default ServicesPage;
