"use client";

import { motion } from "motion/react";

const stats = [
  { val: "99.9%", label: "Platform Uptime" },
  { val: "40%", label: "Faster Sales Cycle" },
  { val: "500+", label: "Enterprise Clients" },
  { val: "24/7", label: "Priority Support" },
];

export default function Stats() {
  return (
    <section className="relative w-full py-24 bg-[#010101] border-y border-white/[0.05]">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-cyan-400 mb-3">
                {s.val}
              </div>
              <div className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-white/30 uppercase">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
