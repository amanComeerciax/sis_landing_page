"use client";

import { useLayoutEffect, useRef, Suspense } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: true });
const Hero = dynamic(() => import("@/components/Hero"), { ssr: true });
const Capabilities = dynamic(() => import("@/components/Capabilities"), { ssr: false });
const WhyChoose = dynamic(() => import("@/components/WhyChoose"), { ssr: false });
const Architecture = dynamic(() => import("@/components/Architecture"), { ssr: false });
const Stats = dynamic(() => import("@/components/Stats"), { ssr: false });
const FinalCTA = dynamic(() => import("@/components/FinalCTA"), { ssr: false });
const PrismPage = dynamic(() => import("@/components/PrismPage"), { ssr: false });
const Footer = dynamic(() => import("@/components/ui/flickering-footer").then(mod => mod.Component), { ssr: false });

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const LoadingFallback = () => <div className="h-[200px] w-full bg-[#010101]" />;

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
      <Suspense fallback={<LoadingFallback />}>
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
        <div className="gsap-reveal">
          <PrismPage />
        </div>
        <Footer />
      </Suspense>
    </main>
  );
}
