"use client";

import { motion } from "motion/react";
import CardSwap, { Card } from "@/components/ui/CardSwap";
import { Shield, Zap, TrendingUp, Cpu, Lock, Globe, ArrowRight } from "lucide-react";

const architectureData = [
  {
    id: 1,
    title: "CRM Intelligence",
    content: "Relationship Intelligence providing a centralized source of truth for all customer data.",
    category: "Sales",
    icon: Shield,
    energy: 95,
  },
  {
    id: 2,
    title: "CPQ Automation",
    content: "Configure, Price, Quote automation ensuring accuracy and speed in complex deal structures.",
    category: "Revenue",
    icon: Zap,
    energy: 88,
  },
  {
    id: 3,
    title: "CLM Workflows",
    content: "Contract Lifecycle Management for seamless legal workflows and risk mitigation.",
    category: "Legal",
    icon: Lock,
    energy: 82,
  },
  {
    id: 4,
    title: "ERP Integration",
    content: "Enterprise Resource Planning integration for bi-directional finance and ops data flow.",
    category: "Finance",
    icon: Globe,
    energy: 65,
  },
  {
    id: 5,
    title: "AI Core",
    content: "Predictive analytics and smart automation driving faster decision making.",
    category: "Intelligence",
    icon: Cpu,
    energy: 70,
  },
];

export default function Architecture() {
  return (
    <section className="relative w-full py-28 bg-[#010101] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] bg-cyan-600/[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* Left: Content */}
          <div className="flex-1 w-full text-center lg:text-left z-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[12px] font-bold text-cyan-400/60 uppercase tracking-[0.25em] mb-4">
                System Architecture
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                The Integrated{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500">
                  Data Core
                </span>
              </h2>
              <p className="mt-6 text-white/40 text-[16px] sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                A live neural network powering real-time bi-directional data flow. Our integrated stack provides a centralized source of truth, driving 40% higher customer retention.
              </p>

              <ul className="mt-10 space-y-4 flex flex-col items-center lg:items-start w-full">
                {[
                  "Live Neural Network — Real-time data flow",
                  "CRM Relationship Intelligence — 40% higher retention",
                  "Centralized Source of Truth",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/60 font-medium text-[14px] sm:text-[15px]">
                    <span className="h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(79,70,229,0.8)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right: Interactive Card Stack */}
          <div className="flex-1 w-full flex justify-center items-center min-h-[380px] md:min-h-[500px] relative">
            <div className="relative w-full max-w-[320px] sm:max-w-[450px] h-[350px] sm:h-[400px]">
              <CardSwap
                width="100%"
                height={320}
                cardDistance={40}
                verticalDistance={30}
                delay={4000}
                skewAmount={4}
              >
                {architectureData.map((item) => (
                  <Card key={item.id} className="relative group overflow-hidden border-white/[0.05] bg-[#030712]">
                    {/* Card Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-6">
                        <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 text-indigo-400">
                          <item.icon size={24} />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/20 bg-white/5 px-3 py-1 rounded-full">
                          {item.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/40 leading-relaxed">
                        {item.content}
                      </p>

                      <div className="mt-auto pt-6 border-t border-white/5">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[10px] font-bold text-white/20 uppercase">Efficiency Level</span>
                          <span className="text-[10px] font-mono text-emerald-400">{item.energy}%</span>
                        </div>
                        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.energy}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-indigo-500/5 blur-3xl rounded-full" />
                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight size={20} className="text-indigo-400" />
                    </div>
                  </Card>
                ))}
              </CardSwap>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
