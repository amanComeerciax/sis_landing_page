"use client";

import { motion } from "motion/react";
import { ChevronDown, Menu, Moon, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Platform", hasDropdown: true },
  { label: "Solutions", hasDropdown: true },
  { label: "Pricing", hasDropdown: false },
  { label: "Resources", hasDropdown: true },
  { label: "Docs", hasDropdown: false },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-0 right-0 z-[100] px-6"
    >
      <div className="mx-auto max-w-7xl h-14 flex items-center justify-between px-4 rounded-full border border-white/[0.08] bg-[#010101]/60 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-transform group-hover:rotate-12">
            <span className="text-white font-black text-lg italic">S</span>
          </div>
          <span className="hidden sm:block text-lg font-black tracking-tighter text-white">
            SISWIT
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className="px-4 py-2 rounded-full flex items-center gap-1 text-[13px] font-bold text-white/50 hover:text-white hover:bg-white/[0.03] transition-all duration-300 group relative"
            >
              {link.label}
              {link.hasDropdown && (
                <ChevronDown className="w-3 h-3 text-white/20 group-hover:text-white/50 transition-colors" />
              )}
              {/* Active Indicator */}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-cyan-400 transition-all group-hover:w-4" />
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.05]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-400" />
            </span>
            <span className="text-[10px] font-black text-white/40 tracking-[0.1em] uppercase">V2.4.0</span>
          </div>

          <button className="hidden sm:flex h-8 w-8 items-center justify-center rounded-full text-white/40 hover:text-white hover:bg-white/5 transition-all">
            <Moon className="w-3.5 h-3.5" />
          </button>

          <div className="h-4 w-px bg-white/10 hidden sm:block" />

          <button className="hidden sm:block text-[13px] font-bold text-white/50 hover:text-white transition-colors px-2">
            Sign In
          </button>

          <button className="relative group overflow-hidden px-5 py-2 rounded-full bg-white text-black text-[13px] font-black transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95">
            <span className="relative z-10 flex items-center gap-1.5">
              Get Started
            </span>
          </button>

          <button className="md:hidden text-white/70 p-2">
            <Menu className="w-5 h-5" />
          </button>
        </div>

      </div>
    </motion.header>
  );
}
