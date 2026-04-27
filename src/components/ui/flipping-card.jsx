"use client";

import React from "react";
import { cn } from "@/lib/utils";

export function FlippingCard({
  className,
  frontContent,
  backContent,
  height = 420,
  width = 380,
}) {
  return (
    <div
      className="group/flipping-card w-full flex justify-center"
      style={{
        perspective: "1000px",
        height: `${height}px`,
        maxWidth: `${width}px`,
      }}
    >
      <div
        className={cn(
          "relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover/flipping-card:[transform:rotateY(180deg)]",
          className
        )}
      >
        {/* Front Face */}
        <div 
          className="absolute inset-0 w-full h-full rounded-3xl border border-white/[0.08] [backface-visibility:hidden] -webkit-backface-visibility:hidden overflow-hidden"
          style={{ transform: "rotateY(0deg)" }}
        >
          {frontContent}
        </div>

        {/* Back Face */}
        <div 
          className="absolute inset-0 w-full h-full rounded-3xl border border-cyan-500/30 [backface-visibility:hidden] -webkit-backface-visibility:hidden overflow-hidden"
          style={{ transform: "rotateY(180deg)" }}
        >
          {backContent}
        </div>
      </div>
    </div>
  );
}
