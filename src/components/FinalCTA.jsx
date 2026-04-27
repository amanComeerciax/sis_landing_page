"use client";

import { motion } from "motion/react";
import { ArrowRight, Award, Star, ShieldCheck, BadgeCheck } from "lucide-react";

const badges = [
  { icon: <Award className="w-4 h-4" />, label: "Fortune 500" },
  { icon: <Star className="w-4 h-4" />, label: "Gartner Recognized" },
  { icon: <ShieldCheck className="w-4 h-4" />, label: "SOC 2 Certified" },
  { icon: <BadgeCheck className="w-4 h-4" />, label: "ISO 27001" },
];

export default function FinalCTA() {
  return (
    <section className="relative w-full py-32 bg-[#010101] overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] bg-gradient-to-r from-blue-600/15 via-cyan-400/10 to-blue-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[12px] font-bold text-cyan-400/60 uppercase tracking-[0.25em] mb-6"
        >
          Get Started Today
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tighter"
        >
          Ready to Transform Your<br />
          <span className="text-cyan-400">Business Operations?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-8 text-white/40 text-[16px] sm:text-lg max-w-xl leading-relaxed"
        >
          Join 500+ enterprises that trust SISWIT for their mission-critical operations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group relative flex items-center gap-4 rounded-full bg-white px-10 py-5 text-[16px] font-black text-black transition-all duration-300 hover:shadow-[0_0_60px_rgba(34,211,238,0.4)] overflow-hidden cursor-pointer"
          >
            <span className="relative z-10">Get Started</span>
            <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600">
              <ArrowRight className="h-5 w-5 text-white transition-transform group-hover:translate-x-1" />
            </span>
          </motion.button>
        </motion.div>

        {/* Certification Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 flex flex-wrap justify-center gap-4"
        >
          {badges.map((b, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02] text-white/30 text-[11px] font-bold tracking-wide uppercase">
              {b.icon}
              {b.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
