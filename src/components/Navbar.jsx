"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, Menu, Moon, X,
  Cpu, Globe, Shield, Rocket, Box, Search, Palette, BookOpen, FileText, Newspaper, Eye
} from "lucide-react";

const navItems = [
  {
    id: 1,
    label: "Products",
    subMenus: [
      {
        title: "DX Platform",
        items: [
          { label: "Previews", description: "Helping teams ship 6× faster", icon: Cpu },
          { label: "AI", description: "Powering breakthroughs", icon: Search },
        ],
      },
      {
        title: "Managed Infrastructure",
        items: [
          { label: "Rendering", description: "Fast, scalable, and reliable", icon: Globe },
          { label: "Observability", description: "Trace every step", icon: Eye },
          { label: "Security", description: "Scale without compromising", icon: Shield },
        ],
      },
      {
        title: "Open Source",
        items: [
          { label: "Next.js", description: "The native Next.js platform", icon: Rocket },
          { label: "Turborepo", description: "Speed with Enterprise scale", icon: Box },
          { label: "AI SDK", description: "The AI Toolkit for TypeScript", icon: Palette },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "Solutions",
    subMenus: [
      {
        title: "Use Cases",
        items: [
          { label: "AI Apps", description: "Deploy at the speed of AI", icon: Cpu },
          { label: "Composable Commerce", description: "Power storefronts that convert", icon: Box },
          { label: "Marketing Sites", description: "Launch campaigns fast", icon: Rocket },
          { label: "Multi-tenant Platforms", description: "Scale apps with one codebase", icon: Globe },
          { label: "Web Apps", description: "Ship features, not infrastructure", icon: Search },
        ],
      },
      {
        title: "Users",
        items: [
          { label: "Platform Engineers", description: "Automate away repetition", icon: Cpu },
          { label: "Design Engineers", description: "Deploy for every idea", icon: Palette },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "Resources",
    subMenus: [
      {
        title: "Tools",
        items: [
          { label: "Resource Center", description: "Today's best practices", icon: BookOpen },
          { label: "Marketplace", description: "Extend and automate workflows", icon: Search },
          { label: "Templates", description: "Jumpstart app development", icon: FileText },
          { label: "Guides", description: "Find help quickly", icon: BookOpen },
        ],
      },
      {
        title: "Company",
        items: [
          { label: "Customers", description: "Trusted by the best teams", icon: Newspaper },
          { label: "Blog", description: "The latest posts and changes", icon: FileText },
          { label: "Changelog", description: "See what shipped", icon: BookOpen },
        ],
      },
    ],
  },
  { id: 4, label: "Enterprise", link: "#" },
  { id: 5, label: "Docs", link: "#" },
  { id: 6, label: "Pricing", link: "#" },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [isHoveredId, setIsHoveredId] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const navRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggle = (label) => {
    setOpenMenu((prev) => (prev === label ? null : label));
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-0 right-0 z-[100] px-4 sm:px-6"
    >
      <div
        ref={navRef}
        className="mx-auto max-w-7xl h-14 flex items-center justify-between px-4 rounded-full border border-white/[0.08] bg-[#010101]/60 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
      >
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white/[0.03] border border-white/[0.05] shadow-[0_0_20px_rgba(34,211,238,0.1)]">
            <img src="/assets/logo.png" alt="SISWIT Logo" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-lg font-black tracking-tighter text-white">SISWIT</span>
            <span className="text-[8px] font-bold text-cyan-400/60 uppercase tracking-[0.2em]">Tech Solutions</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-0.5 h-full">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative h-full flex items-center"
              onMouseEnter={() => { if (item.subMenus) setOpenMenu(item.label); }}
              onMouseLeave={() => { if (item.subMenus) setOpenMenu(null); }}
            >
              <button
                onClick={() => { if (item.subMenus) handleToggle(item.label); }}
                className="px-3 py-2 rounded-full flex items-center gap-1 text-[13px] font-bold text-white/50 hover:text-white transition-all duration-300 relative cursor-pointer"
                onMouseEnter={() => setIsHoveredId(item.id)}
                onMouseLeave={() => setIsHoveredId(null)}
              >
                <span>{item.label}</span>
                {item.subMenus && (
                  <ChevronDown className={`w-3 h-3 text-white/20 transition-transform duration-300 ${openMenu === item.label ? "rotate-180 text-white/50" : ""}`} />
                )}
                {(isHoveredId === item.id || openMenu === item.label) && (
                  <motion.div
                    layoutId="hover-pill"
                    className="absolute inset-0 bg-white/[0.04] rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>

              {/* Dropdown */}
              <AnimatePresence>
                {openMenu === item.label && item.subMenus && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="bg-[#0a0a0a]/95 backdrop-blur-3xl border border-white/10 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.6)] rounded-2xl w-max"
                    >
                      <div className="flex gap-10">
                        {item.subMenus.map((sub) => (
                          <div key={sub.title} className="min-w-[200px]">
                            <h3 className="mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
                              {sub.title}
                            </h3>
                            <ul className="space-y-4">
                              {sub.items.map((subItem) => {
                                const Icon = subItem.icon;
                                return (
                                  <li key={subItem.label}>
                                    <a href="#" className="flex items-start gap-3 group/item">
                                      <div className="size-8 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0 transition-all group-hover/item:bg-cyan-500/10 group-hover/item:border-cyan-500/50">
                                        <Icon className="size-3.5 text-white/50 group-hover/item:text-cyan-400 transition-colors" />
                                      </div>
                                      <div className="space-y-0.5">
                                        <p className="text-[12px] font-bold text-white group-hover/item:text-cyan-400 transition-colors">
                                          {subItem.label}
                                        </p>
                                        <p className="text-[10px] text-white/35 leading-tight group-hover/item:text-white/50 transition-colors">
                                          {subItem.description}
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.05]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-400" />
            </span>
            <span className="text-[10px] font-black text-white/40 tracking-[0.1em] uppercase">V2.4.0</span>
          </div>

          <button className="hidden sm:block text-[13px] font-bold text-white/50 hover:text-white transition-colors px-2">
            Sign In
          </button>

          <button className="relative overflow-hidden px-5 py-2 rounded-full bg-white text-black text-[13px] font-black transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95">
            Get Started
          </button>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white/70 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mt-2 mx-auto max-w-7xl rounded-2xl border border-white/[0.08] bg-[#0a0a0a]/95 backdrop-blur-3xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden"
          >
            <div className="p-4 space-y-1 max-h-[70vh] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => {
                      if (item.subMenus) {
                        setMobileExpanded(mobileExpanded === item.label ? null : item.label);
                      }
                    }}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-[14px] font-bold text-white/60 hover:text-white hover:bg-white/[0.03] transition-all"
                  >
                    <span>{item.label}</span>
                    {item.subMenus && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                    )}
                  </button>

                  <AnimatePresence>
                    {mobileExpanded === item.label && item.subMenus && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pb-3 space-y-4">
                          {item.subMenus.map((sub) => (
                            <div key={sub.title}>
                              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/25 mb-2 px-4">
                                {sub.title}
                              </h4>
                              {sub.items.map((subItem) => {
                                const Icon = subItem.icon;
                                return (
                                  <a
                                    key={subItem.label}
                                    href="#"
                                    className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/[0.03] transition-colors"
                                  >
                                    <Icon className="size-4 text-white/40" />
                                    <div>
                                      <p className="text-[12px] font-bold text-white/70">{subItem.label}</p>
                                      <p className="text-[10px] text-white/30">{subItem.description}</p>
                                    </div>
                                  </a>
                                );
                              })}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div className="border-t border-white/[0.05] pt-3 mt-3 flex flex-col gap-2 px-4">
                <button className="w-full py-3 text-[13px] font-bold text-white/50 hover:text-white transition-colors">
                  Sign In
                </button>
                <button className="w-full py-3 rounded-full bg-white text-black text-[13px] font-black">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
