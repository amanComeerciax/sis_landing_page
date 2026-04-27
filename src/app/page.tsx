import { Demo as Navbar } from "@/components/Demo";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import WhyChoose from "@/components/WhyChoose";
import Architecture from "@/components/Architecture";
import Stats from "@/components/Stats";
import FinalCTA from "@/components/FinalCTA";
import PrismPage from "@/components/PrismPage";
import { Component as Footer } from "@/components/ui/flickering-footer";

export default function Home() {
  return (
    <main className="flex-1 bg-[#010101] pt-20">
      <Navbar />
      <Hero />
      <Capabilities />
      <WhyChoose />
      <Stats />
      <Architecture />
      <FinalCTA />
      <PrismPage />
      <Footer />
    </main>
  );
}
