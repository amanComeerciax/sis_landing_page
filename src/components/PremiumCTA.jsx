"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Calendar, Phone } from "lucide-react";

export default function PremiumCTA() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen min-h-[800px] overflow-hidden flex flex-col justify-center items-center font-barlow"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260306_074215_04640ca7-042c-45d6-bb56-58b1e8a42489.mp4" type="video/mp4" />
      </video>

      {/* Content Container - with 250px bottom padding as requested */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 pb-[250px] flex flex-col items-center text-center mt-auto"
      >
        {/* Four Corner Accents */}
        <div className="absolute top-0 left-0 w-[7px] h-[7px] bg-white hidden md:block" />
        <div className="absolute top-0 right-0 w-[7px] h-[7px] bg-white hidden md:block" />
        <div className="absolute bottom-[250px] left-0 w-[7px] h-[7px] bg-white hidden md:block" />
        <div className="absolute bottom-[250px] right-0 w-[7px] h-[7px] bg-white hidden md:block" />

        <div className="relative w-full flex flex-col items-center pt-16">
          {/* Liquid Glass Badge */}
          <div className="mb-10 p-[2px] rounded-full bg-white/10 backdrop-blur-sm shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            <div className="px-5 py-2 rounded-full bg-white/90 backdrop-blur-md">
              <span className="text-xs font-bold tracking-widest uppercase text-[#171717]">
                Enterprise Solutions
              </span>
            </div>
          </div>

          {/* Dynamic Headline */}
          <h2 className="flex flex-col items-center justify-center gap-2 mb-8 text-center">
            <span className="font-light text-white text-[40px] md:text-[64px] leading-tight tracking-tight">
              Ready to Transform Your
            </span>
            <span className="font-instrument italic text-white text-[48px] md:text-[72px] leading-tight">
              Business Operations?
            </span>
          </h2>

          {/* Sub-headline */}
          <p className="text-white/75 text-lg md:text-xl font-normal max-w-3xl leading-relaxed mb-12 text-center">
            Join 500+ enterprises that have already streamlined their CPQ, CLM, CRM, and ERP processes with SISWIT. Get started with a personalized demo today.
          </p>

          {/* Interactive Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-5">
            <button className="group px-8 py-4 rounded-[2px] bg-[#f8f8f8] hover:bg-white text-[#171717] font-medium text-sm md:text-base transition-colors duration-300 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Schedule Demo
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="px-8 py-4 rounded-[2px] bg-transparent border border-white/30 text-white hover:bg-white/10 font-medium text-sm md:text-base transition-colors duration-300 flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Talk to Sales
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
