import Hero from "@/components/Hero";
import MarqueeBar from "@/components/MarqueeBar";
import IntroSection from "@/components/IntroSection";
import StatsStrip from "@/components/StatsStrip";
import ServicesSection from "@/components/ServicesSection";
import PortfolioPreview from "@/components/PortfolioPreview";
import WhyUs from "@/components/WhyUs";
import ProcessSection from "@/components/ProcessSection";
import IndustriesSection from "@/components/IndustriesSection";
import ContactSection from "@/components/ContactSection";

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