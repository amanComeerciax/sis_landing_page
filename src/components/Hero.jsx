"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Zap, ArrowRight, ChevronRight, Shield, Cpu, Cloud, BrainCircuit } from "lucide-react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

/* ── Video Source ── */
const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260308_114720_3dabeb9e-2c39-4907-b747-bc3544e2d5b7.mp4";

/* ── Floating Tags ── */
const floatingTags = ["CPQ", "ERP", "CLM", "CRM"];

/* ── Trust Bar Logos ── */
const trustLogos = [
  "Jira", "HubSpot", "SAP", "Stripe", "QuickBooks",
  "Zendesk", "Trello", "Zoom", "GitHub", "Atlassian",
];

/* ── Trust Mini Icons ── */
const trustMiniItems = [
  { icon: <Shield className="w-3.5 h-3.5" />, label: "Secure" },
  { icon: <Zap className="w-3.5 h-3.5" />, label: "Fast" },
  { icon: <Cloud className="w-3.5 h-3.5" />, label: "Cloud" },
  { icon: <BrainCircuit className="w-3.5 h-3.5" />, label: "AI" },
];

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.src = VIDEO_URL;
    videoRef.current.play().catch(() => {});
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#010101] overflow-hidden flex flex-col">

      {/* ── Background Video Layer (z-10) ── */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <video
          ref={videoRef}
          className="min-w-full min-h-full object-cover video-blend opacity-70 scale-125 translate-y-[10%]"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#010101] via-transparent to-[#010101] z-20" />
      </div>

      {/* ── Text Content Layer (z-30) ── */}
      <div className="relative z-30 flex-1 flex flex-col items-center justify-center w-full px-6 pt-28 pb-16 text-center">
        <div className="max-w-5xl w-full flex flex-col items-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-500/5 pl-1.5 pr-5 py-1.5 backdrop-blur-xl">
              <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                <Cpu className="h-3.5 w-3.5 text-white" />
              </span>
              <span className="text-[12px] font-bold text-cyan-100/60 tracking-[0.15em] uppercase">
                V2.0 Enterprise Ecosystem
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(15px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col items-center"
          >
            <span className="gradient-text-hero block text-[clamp(2.2rem,9vw,5.5rem)] font-black leading-[1] tracking-tighter">
              The Intelligent Fabric
            </span>
            <span className="gradient-text-hero block text-[clamp(2.2rem,9vw,5.5rem)] font-black leading-[1] tracking-tighter">
              for Global Scale
            </span>
          </motion.h1>

          {/* Floating Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {floatingTags.map((tag, i) => (
              <motion.span
                key={tag}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
                className="px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/[0.06] text-cyan-300/80 text-[13px] font-bold tracking-[0.1em] backdrop-blur-sm"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="mt-8 max-w-2xl text-[15px] sm:text-[18px] leading-relaxed text-white/50 font-medium"
          >
            Unify your entire operational ecosystem into a single, high-performance
            flow. Automate complexities, eliminate friction, and scale with absolute confidence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row items-center gap-4"
          >
            {/* Primary CTA */}
            <div className="relative inline-flex group">
              <div className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-500" />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative flex items-center gap-4 rounded-full bg-white px-8 py-4 text-[15px] font-extrabold text-black transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] cursor-pointer overflow-hidden"
              >
                <span className="relative z-10">Get Started Now</span>
                <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_4px_15px_rgba(0,186,255,0.4)]">
                  <ArrowRight className="h-4 w-4 text-white" />
                </span>
              </motion.button>
            </div>

            {/* Secondary CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.03] px-7 py-4 text-[15px] font-bold text-white/70 backdrop-blur-sm hover:bg-white/[0.07] hover:border-cyan-500/30 transition-all cursor-pointer"
            >
              Explore Platform
              <ChevronRight className="h-4 w-4 text-white/40" />
            </motion.button>
          </motion.div>

          {/* Trust Mini Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-10 flex items-center gap-2 text-white/25 text-[11px] font-bold tracking-[0.15em] uppercase"
          >
            <span>Enterprise Secured By</span>
            <span className="text-white/10">|</span>
            {trustMiniItems.map((item, i) => (
              <span key={i} className="flex items-center gap-1.5 text-white/30">
                {item.icon}
                {item.label}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Trust Bar / Logo Cloud ── */}
      <div className="relative z-30 w-full border-t border-cyan-500/10 bg-white/[0.02] backdrop-blur-2xl py-10">
        <div className="mx-auto max-w-7xl flex flex-col items-center gap-8 px-6 md:flex-row">
          <div className="shrink-0 text-center md:pr-10">
            <p className="text-[11px] font-black text-cyan-400 uppercase tracking-[0.2em]">
              Powering the world&apos;s most ambitious teams
            </p>
          </div>
          <div className="hidden h-12 w-px bg-white/15 md:block md:mx-8" />
          <div className="flex-1 w-full min-w-0">
            <InfiniteSlider speed={30}>
              {trustLogos.map((name) => (
                <span key={name} className="shrink-0 text-[14px] font-bold tracking-[0.2em] text-white/50 uppercase hover:text-white transition-colors duration-300 select-none cursor-default">
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
