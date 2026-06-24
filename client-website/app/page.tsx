import Hero from "@/components/homepage/Hero";
import MarqueeBar from "@/components/homepage/MarqueeBar";
import IntroSection from "@/components/homepage/IntroSection";
import StatsStrip from "@/components/homepage/StatsStrip";
import ServicesSection from "@/components/homepage/ServicesSection";
import PortfolioPreview from "@/components/homepage/PortfolioPreview";
import WhyUs from "@/components/homepage/WhyUs";
import ProcessSection from "@/components/homepage/ProcessSection";
import IndustriesSection from "@/components/homepage/IndustriesSection";
import ContactSection from "@/components/homepage/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeBar />
      <IntroSection />
      <StatsStrip />
      <ServicesSection />
      <PortfolioPreview />
      <WhyUs />
      <ProcessSection />
      <IndustriesSection />
      <ContactSection />
    </>
  );
}