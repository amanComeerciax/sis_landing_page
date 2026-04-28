"use client";

import { useEffect, useRef, Suspense } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: true });
const Hero = dynamic(() => import("@/components/Hero"), { ssr: true });
const Capabilities = dynamic(() => import("@/components/Capabilities"), { ssr: false });
const WhyChoose = dynamic(() => import("@/components/WhyChoose"), { ssr: false });
const Architecture = dynamic(() => import("@/components/Architecture"), { ssr: false });
const Stats = dynamic(() => import("@/components/Stats"), { ssr: false });
const FaqSection = dynamic(() => import("@/components/FaqSection"), { ssr: false });
const PremiumCTA = dynamic(() => import("@/components/PremiumCTA"), { ssr: false });
const Footer = dynamic(() => import("@/components/ui/flickering-footer").then(mod => mod.Component), { ssr: false });

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const LoadingFallback = () => <div className="h-[200px] w-full bg-[#010101]" />;

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Reveal sections on scroll
      const sections = gsap.utils.toArray(".gsap-reveal");
      
      sections.forEach((section) => {
        gsap.to(section, {
          opacity: 1,
          visibility: "visible",
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Force a refresh after a small delay to catch dynamic content heights
      ScrollTrigger.refresh();
    }, containerRef);

    // Setup ResizeObserver to catch slow mobile network loads (e.g. Suspense resolving)
    let observer;
    if (typeof ResizeObserver !== 'undefined' && containerRef.current) {
      observer = new ResizeObserver(() => {
        ScrollTrigger.refresh();
      });
      observer.observe(containerRef.current);
    }

    return () => {
      ctx.revert();
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <main ref={containerRef} className="flex-1 bg-[#020617] selection:bg-indigo-500/30 relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Suspense fallback={<LoadingFallback />}>
        <div className="gsap-reveal relative" suppressHydrationWarning>
          <Capabilities />
        </div>
        <div className="gsap-reveal relative" suppressHydrationWarning>
          <Architecture />
        </div>
        <div className="gsap-reveal relative" suppressHydrationWarning>
          <WhyChoose />
        </div>
        <div className="gsap-reveal relative" suppressHydrationWarning>
          <Stats />
        </div>
        <div className="gsap-reveal relative" suppressHydrationWarning>
          <FaqSection />
        </div>
        <div className="gsap-reveal relative" suppressHydrationWarning>
          <PremiumCTA />
        </div>
        <Footer />
      </Suspense>
    </main>
  );
}
