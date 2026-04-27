"use client";

import { motion } from "motion/react";
import { Database, ShieldCheck, Zap, BarChart3, Layers, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Unified Cloud Platform",
    desc: "Seamlessly integrate CPQ, CLM, and CRM into one powerful hub.",
    icon: <Layers className="w-6 h-6 text-cyan-400" />,
    span: "md:col-span-2",
  },
  {
    title: "Enterprise Grade Security",
    desc: "Your data is protected by bank-level encryption and compliance.",
    icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
    span: "",
  },
  {
    title: "Real-time Analytics",
    desc: "Get deep insights into your sales cycle with AI-driven reports.",
    icon: <BarChart3 className="w-6 h-6 text-cyan-500" />,
    span: "",
  },
  {
    title: "Infinite Scalability",
    desc: "Built to grow with your business, from startup to global enterprise.",
    icon: <Globe className="w-6 h-6 text-blue-500" />,
    span: "md:col-span-2",
  },
  {
    title: "Lightning Fast CPQ",
    desc: "Generate complex quotes in seconds, not hours.",
    icon: <Zap className="w-6 h-6 text-cyan-400" />,
    span: "",
  },
  {
    title: "Master Data Hub",
    desc: "Single source of truth for all your customer and product data.",
    icon: <Database className="w-6 h-6 text-blue-400" />,
    span: "md:col-span-2",
  },
];

export default function Capabilities() {
  return (
    <section className="relative w-full py-28 bg-[#010101] overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8">

        {/* Section Header */}
        <div className="w-full text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12px] font-bold text-cyan-400/60 uppercase tracking-[0.25em] mb-4"
          >
            What We Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
          >
            Capabilities that <span className="text-cyan-400 italic">Power</span> Growth
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-white/40 max-w-xl mx-auto text-[16px] leading-relaxed"
          >
            Everything you need to manage your enterprise sales lifecycle in one unified cloud platform.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={cn(
                "group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 sm:p-8 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-cyan-500/20 hover:bg-white/[0.04]",
                f.span
              )}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="mb-5 inline-flex p-3 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-white/35 leading-relaxed text-[14px]">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
