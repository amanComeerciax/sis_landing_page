import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import WhyChoose from "@/components/WhyChoose";
import Architecture from "@/components/Architecture";
import Stats from "@/components/Stats";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1 bg-[#010101]">
      <Navbar />
      <Hero />
      <Capabilities />
      <WhyChoose />
      <Stats />
      <Architecture />
      <FinalCTA />
      <Footer />
    </main>
  );
}
