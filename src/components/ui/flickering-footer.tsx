"use client";

import { ChevronRightIcon } from "@radix-ui/react-icons";
import { ClassValue, clsx } from "clsx";
import * as Color from "color-bits";
import { motion } from "motion/react";
import Link from "next/link";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Helper function to convert any CSS color to rgba
export const getRGBA = (
  cssColor: React.CSSProperties["color"],
  fallback: string = "rgba(180, 180, 180)",
): string => {
  if (typeof window === "undefined") return fallback;
  if (!cssColor) return fallback;

  try {
    if (typeof cssColor === "string" && cssColor.startsWith("var(")) {
      const element = document.createElement("div");
      element.style.color = cssColor;
      document.body.appendChild(element);
      const computedColor = window.getComputedStyle(element).color;
      document.body.removeChild(element);
      return Color.formatRGBA(Color.parse(computedColor));
    }
    return Color.formatRGBA(Color.parse(cssColor));
  } catch (e) {
    return fallback;
  }
};

export const colorWithOpacity = (color: string, opacity: number): string => {
  if (!color.startsWith("rgb")) return color;
  return Color.formatRGBA(Color.alpha(Color.parse(color), opacity));
};

export const Icons = {
  soc2: ({ className }: { className?: string }) => (
    <svg width="46" height="45" viewBox="0 0 46 45" fill="none" className={cn("size-4", className)}>
      <rect x="3" y="0.863281" width="40" height="40" rx="20" fill="#111" />
      <text x="23" y="25" fill="#aaa" fontSize="12" textAnchor="middle" fontWeight="bold">SOC2</text>
    </svg>
  ),
  hipaa: ({ className }: { className?: string }) => (
    <svg width="46" height="45" viewBox="0 0 46 45" fill="none" className={cn("size-4", className)}>
      <rect x="3" y="0.863281" width="40" height="40" rx="20" fill="#111" />
      <text x="23" y="25" fill="#aaa" fontSize="12" textAnchor="middle" fontWeight="bold">HIPAA</text>
    </svg>
  ),
  gdpr: ({ className }: { className?: string }) => (
    <svg width="46" height="45" viewBox="0 0 46 45" fill="none" className={cn("size-4", className)}>
      <rect x="3" y="0.863281" width="40" height="40" rx="20" fill="#111" />
      <text x="23" y="25" fill="#aaa" fontSize="12" textAnchor="middle" fontWeight="bold">GDPR</text>
    </svg>
  ),
};

export const FlickeringGrid: React.FC<{
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  width?: number;
  height?: number;
  className?: string;
  maxOpacity?: number;
  text?: string;
  textColor?: string;
  fontSize?: number;
  fontWeight?: number | string;
}> = ({
  squareSize = 3,
  gridGap = 3,
  flickerChance = 0.2,
  color = "#B4B4B4",
  width,
  height,
  className,
  maxOpacity = 0.15,
  text = "",
  fontSize = 140,
  fontWeight = 600,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  const memoizedColor = useMemo(() => getRGBA(color), [color]);

  const drawGrid = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      cols: number,
      rows: number,
      squares: Float32Array,
      dpr: number,
    ) => {
      ctx.clearRect(0, 0, width, height);

      const maskCanvas = document.createElement("canvas");
      maskCanvas.width = width;
      maskCanvas.height = height;
      const maskCtx = maskCanvas.getContext("2d", { willReadFrequently: true });
      if (!maskCtx) return;

      if (text) {
        maskCtx.save();
        maskCtx.scale(dpr, dpr);
        maskCtx.fillStyle = "white";
        maskCtx.font = `${fontWeight} ${fontSize}px "Geist", -apple-system, BlinkMacSystemFont, sans-serif`;
        maskCtx.textAlign = "center";
        maskCtx.textBaseline = "middle";
        maskCtx.fillText(text, width / (2 * dpr), height / (2 * dpr));
        maskCtx.restore();
      }

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * (squareSize + gridGap) * dpr;
          const y = j * (squareSize + gridGap) * dpr;
          const squareWidth = squareSize * dpr;
          const squareHeight = squareSize * dpr;

          const maskData = maskCtx.getImageData(x, y, squareWidth, squareHeight).data;
          const hasText = maskData.some((value, index) => index % 4 === 0 && value > 0);

          const opacity = squares[i * rows + j];
          const finalOpacity = hasText ? Math.min(1, opacity * 3 + 0.4) : opacity;

          ctx.fillStyle = colorWithOpacity(memoizedColor, finalOpacity);
          ctx.fillRect(x, y, squareWidth, squareHeight);
        }
      }
    },
    [memoizedColor, squareSize, gridGap, text, fontSize, fontWeight],
  );

  const setupCanvas = useCallback(
    (canvas: HTMLCanvasElement, width: number, height: number) => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      const cols = Math.ceil(width / (squareSize + gridGap));
      const rows = Math.ceil(height / (squareSize + gridGap));

      const squares = new Float32Array(cols * rows);
      for (let i = 0; i < squares.length; i++) {
        squares[i] = Math.random() * maxOpacity;
      }

      return { cols, rows, squares, dpr };
    },
    [squareSize, gridGap, maxOpacity],
  );

  const updateSquares = useCallback(
    (squares: Float32Array, deltaTime: number) => {
      for (let i = 0; i < squares.length; i++) {
        if (Math.random() < flickerChance * deltaTime) {
          squares[i] = Math.random() * maxOpacity;
        }
      }
    },
    [flickerChance, maxOpacity],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let gridParams: ReturnType<typeof setupCanvas>;

    const updateCanvasSize = () => {
      const newWidth = width || container.clientWidth;
      const newHeight = height || container.clientHeight;
      setCanvasSize({ width: newWidth, height: newHeight });
      gridParams = setupCanvas(canvas, newWidth, newHeight);
    };

    updateCanvasSize();

    let lastTime = 0;
    const animate = (time: number) => {
      if (!isInView) return;

      const deltaTime = (time - lastTime) / 1000;
      lastTime = time;

      updateSquares(gridParams.squares, deltaTime);
      drawGrid(
        ctx,
        canvas.width,
        canvas.height,
        gridParams.cols,
        gridParams.rows,
        gridParams.squares,
        gridParams.dpr,
      );
      animationFrameId = requestAnimationFrame(animate);
    };

    const resizeObserver = new ResizeObserver(() => {
      updateCanvasSize();
    });
    resizeObserver.observe(container);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0 },
    );
    intersectionObserver.observe(canvas);

    if (isInView) {
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [setupCanvas, updateSquares, drawGrid, width, height, isInView]);

  return (
    <div ref={containerRef} className={cn(`h-full w-full ${className}`)} {...props}>
      <canvas
        ref={canvasRef}
        className="pointer-events-none"
        style={{
          width: canvasSize.width,
          height: canvasSize.height,
        }}
      />
    </div>
  );
};

export function useMediaQuery(query: string) {
  const [value, setValue] = useState(false);

  useEffect(() => {
    function checkQuery() {
      setValue(window.matchMedia(query).matches);
    }
    checkQuery();
    window.addEventListener("resize", checkQuery);
    const mediaQuery = window.matchMedia(query);
    mediaQuery.addEventListener("change", checkQuery);
    return () => {
      window.removeEventListener("resize", checkQuery);
      mediaQuery.removeEventListener("change", checkQuery);
    };
  }, [query]);

  return value;
}

export const siteConfig = {
  hero: {
    description:
      "Empowering enterprises with unified cloud intelligence for CPQ, CLM, and CRM.",
  },
  footerLinks: [
    {
      title: "Product",
      links: [
        { id: 1, title: "CPQ", url: "#" },
        { id: 2, title: "CLM", url: "#" },
        { id: 3, title: "CRM", url: "#" },
        { id: 4, title: "Analytics", url: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { id: 5, title: "About Us", url: "#" },
        { id: 6, title: "Careers", url: "#" },
        { id: 7, title: "Blog", url: "#" },
        { id: 8, title: "Contact", url: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { id: 9, title: "Privacy", url: "#" },
        { id: 10, title: "Terms", url: "#" },
        { id: 11, title: "Security", url: "#" },
        { id: 12, title: "GDPR", url: "#" },
      ],
    },
  ],
};

export const Component = () => {
  const tablet = useMediaQuery("(max-width: 1024px)");

  return (
    <footer id="footer" className="relative w-full pt-10 pb-0 bg-[#010101] border-t border-white/[0.05]">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between px-6 sm:px-10 max-w-7xl mx-auto">
        
        <div className="flex flex-col items-start justify-start gap-y-5 max-w-xs mx-0">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-black text-white text-lg italic">
              S
            </div>
            <span className="text-xl font-bold text-white tracking-tighter">SISWIT</span>
          </Link>
          <p className="tracking-tight text-white/40 font-medium text-[14px] leading-relaxed">
            {siteConfig.hero.description}
          </p>
          <div className="flex items-center gap-2 mt-2">
            <Icons.soc2 className="size-10" />
            <Icons.hipaa className="size-10" />
            <Icons.gdpr className="size-10" />
          </div>
        </div>

        <div className="pt-10 md:pt-0 md:w-[60%]">
          <div className="flex flex-col items-start justify-start sm:flex-row sm:items-start sm:justify-between gap-y-8 lg:pl-10">
            {siteConfig.footerLinks.map((column, columnIndex) => (
              <ul key={columnIndex} className="flex flex-col gap-y-3">
                <li className="mb-2 text-[14px] font-bold text-white">
                  {column.title}
                </li>
                {column.links.map((link) => (
                  <li
                    key={link.id}
                    className="group inline-flex cursor-pointer items-center justify-start gap-1 text-[14px]/snug text-white/40 hover:text-cyan-400 transition-colors"
                  >
                    <Link href={link.url}>{link.title}</Link>
                    <div className="flex size-4 items-center justify-center border border-white/20 rounded translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                      <ChevronRightIcon className="h-3 w-3 text-cyan-400" />
                    </div>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-48 md:h-64 relative mt-16 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#010101]/50 to-[#010101] z-10 from-20%" />
        <div className="absolute inset-0 mx-0">
          <FlickeringGrid
            text={tablet ? "SISWIT" : "SISWIT"}
            fontSize={tablet ? 80 : 180}
            className="h-full w-full"
            squareSize={3}
            gridGap={tablet ? 2 : 3}
            color="#06b6d4" // cyan-500
            maxOpacity={0.4}
            flickerChance={0.2}
          />
        </div>
      </div>

      {/* Bottom Bar inside the flickering area, elevated with z-20 */}
      <div className="absolute bottom-0 left-0 right-0 z-20 py-6 border-t border-white/[0.05] bg-[#010101]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-[13px]">© 2026 SISWIT Infra. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {["Twitter", "LinkedIn", "GitHub"].map((item) => (
              <a key={item} href="#" className="text-white/30 text-[13px] hover:text-white transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
