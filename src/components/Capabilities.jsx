"use client";

import { motion } from "motion/react";
import { FileText, Users, BarChart3, Package, FileCheck, ArrowRight } from "lucide-react";
import { FlippingCard } from "@/components/ui/flipping-card";
import FloatingLines from "@/components/ui/FloatingLines";

const capabilitiesData = [
  {
    id: "cpq",
    front: {
      image: "/assets/capabilities/cpq.png",
      title: "Intelligent CPQ",
      description: "Automate complex pricing and quotes for enterprise deals.",
      icon: <BarChart3 className="w-5 h-5 text-cyan-400" />,
    },
    back: {
      description: "Generate error-free quotes in seconds with dynamic pricing logic and automated approval workflows tailored for global scale.",
      buttonText: "Explore CPQ",
    }
  },
  {
    id: "clm",
    front: {
      image: "/assets/capabilities/clm.png",
      title: "CLM & E-Sign",
      description: "Full contract lifecycle with secure digital signatures.",
      icon: <FileCheck className="w-5 h-5 text-blue-400" />,
    },
    back: {
      description: "From drafting to signing, manage every legal stage with smart templates and automated compliance checks built-in.",
      buttonText: "Learn More",
    }
  },
  {
    id: "crm",
    front: {
      image: "/assets/capabilities/crm.png",
      title: "Unified CRM",
      description: "Consolidate customer data into a single source of truth.",
      icon: <Users className="w-5 h-5 text-cyan-500" />,
    },
    back: {
      description: "Gain 360-degree visibility into your customer relationships with AI-driven analytics that predict churn and identify growth.",
      buttonText: "View CRM",
    }
  },
  {
    id: "erp",
    front: {
      image: "/assets/capabilities/erp.png",
      title: "Integrated ERP",
      description: "Inventory and financial planning in one seamless flow.",
      icon: <Package className="w-5 h-5 text-blue-500" />,
    },
    back: {
      description: "Optimize resources and streamline financial operations with deep integrations into your sales and contract data.",
      buttonText: "Explore ERP",
    }
  },
  {
    id: "doc-auto",
    front: {
      image: "/assets/capabilities/doc.png",
      title: "Doc Automation",
      description: "Compliant document generation with zero friction.",
      icon: <FileText className="w-5 h-5 text-cyan-400" />,
    },
    back: {
      description: "Create thousands of compliant documents instantly using intelligent templates that pull data directly from your CRM.",
      buttonText: "See Automation",
    }
  }
];

export default function Capabilities() {
  return (
    <section className="relative w-full py-28 bg-[#010101] overflow-hidden">
      {/* ── Section Background: Floating Lines ── */}
      <div className="absolute inset-0 z-0 opacity-40">
        <FloatingLines 
          linesGradient={['#22d3ee', '#0ea5e9', '#2563eb']}
          lineCount={8}
          animationSpeed={0.3}
          interactive={false}
          parallax={true}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8">

        {/* Section Header */}
        <div className="w-full text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12px] font-bold text-cyan-400/60 uppercase tracking-[0.25em] mb-4"
          >
            Platform Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
          >
            Built for the modern <span className="text-cyan-400 italic">workflow</span> engine.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-white/40 max-w-2xl mx-auto text-[16px] leading-relaxed"
          >
            Unifying commercial operations from contact to settlement. One platform to manage every step of your business lifecycle.
          </motion.p>
        </div>

        {/* Centered Flex Layout for Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {capabilitiesData.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] max-w-[400px]"
            >
              <FlippingCard
                width={400}
                height={420}
                pixelRatio={1.0}
                frontContent={<CardFront data={card.front} />}
                backContent={<CardBack data={card.back} />}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CardFront({ data }) {
  return (
    <div className="relative flex flex-col h-full w-full p-6 overflow-hidden rounded-[inherit] bg-white/[0.03] border border-white/[0.1] hover:border-cyan-500/40 transition-all duration-500 shadow-2xl">
      <div className="relative z-10 flex flex-col h-full">
        <div className="relative w-full h-52 mb-6 overflow-hidden rounded-2xl border border-white/[0.05]">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover/flipping-card:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 to-transparent" />
          
          {/* Hover Hint */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/flipping-card:opacity-100 transition-opacity duration-300">
             <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[12px] font-bold text-white uppercase tracking-widest">
               Flip to Reveal
             </span>
          </div>
        </div>

        <div className="flex flex-col items-center text-center gap-4">
          <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/[0.1] shadow-xl">
            {data.icon}
          </div>
          <h3 className="text-2xl font-black text-white tracking-tight">{data.title}</h3>
          <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full opacity-60" />
        </div>
      </div>
    </div>
  );
}

function CardBack({ data }) {
  return (
    <div className="relative flex flex-col items-center justify-center h-full w-full p-8 text-center bg-[#0a0a0a]/90 overflow-hidden rounded-[inherit] border border-cyan-500/40 shadow-[0_0_50px_rgba(34,211,238,0.1)]">
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-6 p-4 rounded-full bg-cyan-400/10 border border-cyan-400/20 shadow-[0_0_30px_rgba(34,211,238,0.1)]">
          <ArrowRight className="w-8 h-8 text-cyan-400" />
        </div>
        
        <p className="text-[15px] text-white/80 leading-relaxed mb-10 font-semibold">
          {data.description}
        </p>
        
        <button className="group/btn relative flex items-center gap-3 px-8 py-3.5 rounded-full bg-white text-black text-[14px] font-black transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] cursor-pointer">
          <span>{data.buttonText}</span>
          <div className="h-6 w-6 rounded-full bg-black flex items-center justify-center transition-transform group-hover/btn:translate-x-1">
            <ArrowRight className="w-3.5 h-3.5 text-white" />
          </div>
        </button>
      </div>
    </div>
  );
}
