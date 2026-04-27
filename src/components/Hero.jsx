"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Zap, ArrowRight } from "lucide-react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

/* ── Video Source ── */
const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260308_114720_3dabeb9e-2c39-4907-b747-bc3544e2d5b7.mp4";

const logoNames = [
  "OpenAI", "NVIDIA", "GitHub", "Stripe",
  "Vercel", "Linear", "Notion", "Figma",
  "Supabase", "Slack",
];

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.src = VIDEO_URL;
    videoRef.current.play().catch(() => {});
  }, []);

  return (
    <section className="relative w-full h-[110vh] min-h-[800px] bg-[#010101] overflow-hidden flex flex-col items-center">
      
      {/* ── Background Video Layer (z-10) ── */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <video
          ref={videoRef}
          className="min-w-full min-h-full object-cover video-blend opacity-80 scale-125 translate-y-[10%]"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        {/* Fades for layering */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#010101] via-transparent to-[#010101] z-20" />
      </div>

      {/* ── Text Content Layer (z-30) ── */}
      <div className="relative z-30 flex flex-col items-center justify-center w-full h-full px-6 pt-20 text-center">
        <div className="max-w-5xl flex flex-col items-center mt-20">
          
          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-500/5 pl-1.5 pr-5 py-1.5 backdrop-blur-xl">
              <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                <Zap className="h-3.5 w-3.5 text-white" fill="white" strokeWidth={0} />
              </span>
              <span className="text-[13px] font-medium text-cyan-100/60 tracking-wide">
                Used by founders. Loved by devs.
              </span>
            </div>
          </motion.div>

          {/* Headline — Positioned to overlap video waves */}
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(15px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col items-center"
          >
            <span className="gradient-text-hero block text-[clamp(2.5rem,10vw,6.5rem)] font-black leading-[1] tracking-tighter">
              Your Vision
            </span>
            <span className="gradient-text-hero block text-[clamp(2.5rem,10vw,6.5rem)] font-black leading-[1] tracking-tighter">
              Our Digital Reality.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 max-w-xl text-[16px] sm:text-[20px] leading-relaxed text-cyan-50/60 font-medium"
          >
            We turn bold ideas into modern designs that don&apos;t just look
            amazing — they grow your business fast.
          </motion.p>

          {/* CTA — Premium Upgrade */}
          <div className="mt-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative inline-flex group"
            >
              {/* Outer Glow & Glass Ring */}
              <div className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-500" />
              <div className="absolute -inset-[1px] rounded-full bg-gradient-to-b from-white/20 to-transparent" />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative flex items-center gap-5 rounded-full bg-white px-8 py-4.5 text-[16px] font-extrabold text-black transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] cursor-pointer overflow-hidden"
              >
                {/* Subtle Shimmer */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-100/30 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
                
                <span className="relative z-10 tracking-tight">Book a 15-min call</span>
                
                {/* Enhanced Arrow Circle */}
                <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_4px_15px_rgba(0,186,255,0.4)] transition-transform duration-300 group-hover:rotate-[-10deg]">
                  <ArrowRight className="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Logo Cloud (Fixed at bottom of Hero) ── */}
      <div className="relative z-30 w-full border-t border-white/[0.05] bg-black/60 backdrop-blur-2xl py-10">
        <div className="mx-auto max-w-7xl flex flex-col items-center gap-6 px-6 md:flex-row">
          <div className="shrink-0 text-center md:pr-10">
            <p className="text-[12px] font-bold text-cyan-400/50 uppercase tracking-widest">
              Powering the best teams
            </p>
          </div>
          <div className="hidden h-10 w-px bg-white/10 md:block md:mx-10" />
          <div className="flex-1 w-full">
            <InfiniteSlider speed={35}>
              {logoNames.map((name) => (
                <span key={name} className="text-[13px] font-bold tracking-[0.2em] text-white/30 uppercase">
                  {name}
                </span>
              ))}
            </InfiniteSlider>
          </div>
        </div>
      </div>
    </section>
  );
}
