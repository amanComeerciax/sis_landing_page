"use client";

import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="relative w-full py-20 px-6 bg-[#010101] flex justify-center">
      <div className="max-w-6xl w-full rounded-3xl bg-gradient-to-r from-[#9574ec] via-[#817de2] to-[#688bd8] px-6 py-20 text-center shadow-2xl flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight max-w-3xl">
          Need help choosing the right solution track?
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-2xl">
          We will map your goals, team size, and systems to a rollout plan that fits.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="flex items-center gap-2 px-6 py-3 bg-white text-[#7b7ae0] rounded-xl font-medium hover:bg-white/90 transition-colors shadow-sm">
            Talk to an Expert <ArrowRight className="w-4 h-4" />
          </button>
          <button className="px-6 py-3 border border-white/30 text-white rounded-xl font-medium hover:bg-white/10 transition-colors">
            Compare Pricing
          </button>
        </div>
      </div>
    </section>
  );
}
