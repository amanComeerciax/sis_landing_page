"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import WhyChoose from "@/components/WhyChoose";
import Architecture from "@/components/Architecture";
import Stats from "@/components/Stats";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Reveal sections on scroll
      const sections = gsap.utils.toArray(".gsap-reveal");
      
      sections.forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 80,
          scale: 0.95,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="flex-1 bg-[#010101] selection:bg-cyan-500/30">
      <Navbar />
      <Hero />
      <div className="gsap-reveal">
        <Capabilities />
      </div>
      <div className="gsap-reveal">
        <Architecture />
      </div>
      <div className="gsap-reveal">
        <WhyChoose />
      </div>
      <div className="gsap-reveal">
        <Stats />
      </div>
      <div className="gsap-reveal">
        <FinalCTA />
      </div>
      <Footer />
    </main>
  );
}
