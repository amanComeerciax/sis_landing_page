"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "WHAT IS SIS?",
    answer: "STRATEGIC INFORMATION SYSTEM IS A COMPREHENSIVE PROCUREMENT SOFTWARE"
  },
  {
    question: "HOW DOES IT WORK?",
    answer: "IT USES ADVANCED AI TO MATCH INVOICES, MANAGE SUPPLIERS, AND AUTOMATE WORKFLOWS"
  },
  {
    question: "IS IT SECURE?",
    answer: "WE IMPLEMENT ENTERPRISE-GRADE SECURITY WITH CUSTOM JWT AUTHENTICATION"
  },
  {
    question: "CAN I INTEGRATE?",
    answer: "OUR SYSTEM OFFERS EXTENSIVE APIS TO CONNECT WITH YOUR EXISTING ERP"
  }
];

export default function FaqSection() {
  return (
    <section className="w-full bg-[#010101] text-white flex flex-col items-center justify-center border-t border-white/5 py-20 sm:py-24">
      <div className="w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 items-start">

        {/* Left: FAQ List */}
        <div className="flex flex-col border-t border-white/10 order-2 md:order-1 w-full">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* Right: Description */}
        <div className="flex flex-col justify-start order-1 md:order-2 md:pl-8 pt-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-sky-400 bg-clip-text text-transparent">
            FAQs
          </h2>
          <p className="text-white/40 text-base md:text-lg mb-8 max-w-sm leading-relaxed font-barlow">
            Everything you need to know about our Strategic Information System.
          </p>
          <div className="text-white/40 text-[13px] md:text-sm leading-relaxed max-w-xs">
            Can't find what you're looking for? Reach out to our 
            <span className="text-sky-400 font-bold ml-1 cursor-pointer hover:underline transition-all">
              support team
            </span> for assistance.
          </div>
        </div>

      </div>
    </section>
  );
}

function FaqItem({ question, answer }) {
  const [isHovered, setIsHovered] = useState(false);

  // Repeat enough to ensure marquee loop is seamless
  const singleText = `${answer} • `;
  const repeatedHalf = singleText.repeat(8);
  const fullText = repeatedHalf + repeatedHalf; // Two identical halves

  return (
    <div
      className="w-full relative border-b border-white/10 h-16 sm:h-20 flex items-center overflow-hidden cursor-pointer bg-transparent transition-all duration-300 group px-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        {!isHovered ? (
          <motion.div
            key="question"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
            className="flex items-center w-full"
          >
            <h3 className="text-base sm:text-lg md:text-xl font-bold tracking-tight bg-gradient-to-b from-white to-sky-400 bg-clip-text text-transparent uppercase font-barlow">
              {question}
            </h3>
          </motion.div>
        ) : (
          <motion.div
            key="answer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center left-0 w-full h-full bg-white text-[#010101] z-10"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
            }}
          >
            <motion.div
              className="flex whitespace-nowrap"
              animate={{ x: [0, "-50%"] }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            >
               <span className="text-sm sm:text-base md:text-lg font-bold tracking-wider uppercase font-barlow">
                 {fullText}
               </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
