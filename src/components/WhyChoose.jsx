"use client";

import { motion } from "motion/react";
import InfiniteMenu from "@/components/ui/InfiniteMenu";

const whyChooseItems = [
  {
    image: "/assets/why/security.png",
    link: "#",
    title: "Enterprise Security",
    description: "SOC 2 Type II certified with end-to-end encryption, role-based access controls, and comprehensive audit logs."
  },
  {
    image: "/assets/why/performance.png",
    link: "#",
    title: "Lightning Performance",
    description: "99.99% uptime SLA with global CDN distribution ensuring sub-second response times worldwide."
  },
  {
    image: "/assets/why/scaling.png",
    link: "#",
    title: "Infinite Scalability",
    description: "Auto-scaling infrastructure that grows with your business, from startup to Fortune 500."
  },
  {
    image: "/assets/why/ai.png",
    link: "#",
    title: "AI-Powered Insights",
    description: "Machine learning models that predict trends, automate tasks, and surface actionable insights."
  },
  {
    image: "/assets/why/compliance.png",
    link: "#",
    title: "Compliance Ready",
    description: "Built-in compliance for GDPR, HIPAA, and SOX with automated policy enforcement."
  },
  {
    image: "/assets/why/support.png",
    link: "#",
    title: "Global Support",
    description: "24/7 technical assistance across all time zones with dedicated success managers."
  }
];

export default function WhyChoose() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#010101] overflow-hidden">
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 w-full flex flex-col h-full">
        
        {/* Floating Header */}
        <div className="absolute top-12 left-12 z-20 max-w-xl">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold text-cyan-400/40 uppercase tracking-[0.4em] mb-3"
          >
            The SISWIT Advantage
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tighter text-white"
          >
            Why Industry Leaders <br />
            <span className="text-cyan-400">Trust SISWIT</span>.
          </motion.h2>
        </div>

        {/* Full Screen Menu */}
        <div className="w-full h-screen flex items-center justify-center">
          <InfiniteMenu items={whyChooseItems} scale={2.5} />
        </div>

      </div>

      {/* Side Accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
    </section>
  );
}
