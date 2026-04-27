"use client";

import { motion } from "motion/react";

export default function Architecture() {
  return (
    <section className="relative w-full py-28 bg-[#010101] overflow-hidden">
      {/* Background Orb */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] bg-blue-600/[0.08] blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* Left: Content */}
          <div className="flex-1 w-full text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[12px] font-bold text-cyan-400/60 uppercase tracking-[0.25em] mb-4">
                Platform Design
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Unified{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                  Architecture
                </span>
              </h2>
              <p className="mt-6 text-white/40 text-[16px] sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                SISWIT replaces fragmented silos with a single, high-performance master data hub. Every contract, quote, and customer interaction flows through a unified digital nervous system.
              </p>

              <ul className="mt-10 space-y-4 inline-flex flex-col items-start">
                {["Proprietary Data Hub", "Seamless API Fabric", "Cross-Platform Sync"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/60 font-medium text-[15px]">
                    <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right: Visual Diagram */}
          <div className="flex-1 w-full flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full max-w-[420px] aspect-square"
            >
              {/* Orbits */}
              <div className="absolute inset-0 rounded-full border border-white/[0.04] animate-[spin_25s_linear_infinite]" />
              <div className="absolute inset-12 rounded-full border border-white/[0.06] animate-[spin_18s_linear_infinite_reverse]" />
              <div className="absolute inset-24 rounded-full border border-white/[0.08]" />

              {/* Core Hub */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_60px_rgba(0,186,255,0.4)] z-20">
                <span className="text-white font-black text-3xl">S</span>
              </div>

              {/* Satellite Nodes */}
              {[
                { label: "CRM", top: "0%", left: "50%", tx: "-50%", ty: "-50%" },
                { label: "CPQ", top: "100%", left: "50%", tx: "-50%", ty: "-50%" },
                { label: "CLM", top: "50%", left: "0%", tx: "-50%", ty: "-50%" },
                { label: "ERP", top: "50%", left: "100%", tx: "-50%", ty: "-50%" },
              ].map((node, i) => (
                <div
                  key={i}
                  className="absolute px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md text-white text-[11px] font-bold tracking-[0.15em] uppercase"
                  style={{
                    top: node.top,
                    left: node.left,
                    transform: `translate(${node.tx}, ${node.ty})`,
                  }}
                >
                  {node.label}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
