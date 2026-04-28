"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import gsap from "gsap";

const stats = [
  { val: 500, suffix: "+", label: "Enterprise Clients", decimals: 0 },
  { val: 99.99, suffix: "%", label: "Uptime SLA", decimals: 2 },
  { val: 50, suffix: "M+", label: "Contracts Processed", decimals: 0 },
  { val: 150, suffix: "+", label: "Countries Served", decimals: 0 },
];

function Counter({ target, suffix, decimals }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const obj = { value: 0 };
      gsap.to(obj, {
        value: target,
        duration: 2.5,
        ease: "power4.out",
        onUpdate: () => {
          setCount(obj.value);
        },
      });
    }
  }, [isInView, target]);

  return (
    <span ref={countRef}>
      {count.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative w-full py-24 bg-[#010101] border-y border-white/[0.05]">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-sky-400 mb-3 tabular-nums">
                <Counter target={s.val} suffix={s.suffix} decimals={s.decimals} />
              </div>
              <div className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-white/30 uppercase">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
