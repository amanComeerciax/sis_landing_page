"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative w-full py-32 bg-[#010101] overflow-hidden">
      {/* Background Spotlight */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] bg-gradient-to-r from-blue-600/15 via-cyan-400/10 to-blue-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 text-center">
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
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tighter"
        >
          Ready to <span className="text-cyan-400">Revolutionize</span><br />Your Sales?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-8 text-white/40 text-[16px] sm:text-lg max-w-xl mx-auto leading-relaxed"
        >
          Join hundreds of leading enterprises that trust SISWIT for their mission-critical sales operations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group relative flex items-center gap-4 rounded-full bg-white px-10 py-5 text-[16px] font-black text-black transition-all duration-300 hover:shadow-[0_0_60px_rgba(34,211,238,0.4)] overflow-hidden cursor-pointer"
          >
            <span className="relative z-10">Start Your Trial</span>
            <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600">
              <ArrowRight className="h-5 w-5 text-white transition-transform group-hover:translate-x-1" />
            </span>
          </motion.button>

          <button className="text-white/60 font-bold tracking-wide border-b border-white/20 pb-1 hover:text-cyan-400 hover:border-cyan-400 transition-colors cursor-pointer">
            Contact Sales Team
          </button>
        </motion.div>
      </div>
    </section>
  );
}
