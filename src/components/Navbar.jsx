"use client";

import { motion } from "motion/react";
import { ChevronDown, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Products", hasDropdown: true },
  { label: "Solutions", hasDropdown: true },
  { label: "Resources", hasDropdown: false },
  { label: "Pricing", hasDropdown: false },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-[100] border-b border-white/[0.05] bg-[#010101]/40 backdrop-blur-xl"
    >
      <div className="mx-auto max-w-7xl px-6 h-18 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5 cursor-pointer group">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-transform group-hover:scale-105">
            <span className="text-white font-black text-xl italic">S</span>
          </div>
          <span className="text-xl font-bold tracking-tighter text-white">
            SISWIT
          </span>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className="flex items-center gap-1.5 text-[14px] font-medium text-white/50 hover:text-white transition-all duration-300 group"
            >
              {link.label}
              {link.hasDropdown && (
                <ChevronDown className="w-3.5 h-3.5 text-white/20 group-hover:text-white/50 transition-colors" />
              )}
            </a>
          ))}
        </nav>

        {/* Right Section / CTA */}
        <div className="flex items-center gap-6">
          <button className="hidden sm:block text-[14px] font-semibold text-white/60 hover:text-white transition-colors cursor-pointer">
            Log in
          </button>
          
          <button className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-white text-black text-[14px] font-bold transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-95">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white/70">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
