"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useAnimationControls } from "motion/react";

export function InfiniteSlider({
  children,
  speed = 40,
  direction = "left",
  className = "",
}) {
  const containerRef = useRef(null);
  const innerRef = useRef(null);
  const controls = useAnimationControls();
  const [ready, setReady] = useState(false);
  const [halfWidth, setHalfWidth] = useState(0);

  useEffect(() => {
    if (!innerRef.current) return;

    // Wait a tick for layout
    const timer = setTimeout(() => {
      const el = innerRef.current;
      if (!el) return;
      // Total width of the inner track
      const total = el.scrollWidth;
      // We duplicated children, so half is the original content
      const half = total / 2;
      setHalfWidth(half);
      setReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [children]);

  useEffect(() => {
    if (!ready || halfWidth <= 0) return;

    const duration = halfWidth / speed;

    controls.start({
      x: direction === "left" ? [0, -halfWidth] : [-halfWidth, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration,
          ease: "linear",
        },
      },
    });
  }, [ready, halfWidth, speed, direction, controls]);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden slider-mask ${className}`}
    >
      <motion.div
        ref={innerRef}
        animate={controls}
        className="flex items-center gap-12 w-max"
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
