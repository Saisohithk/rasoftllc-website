"use client";
import { cn } from "@/lib/utils";
import { motion, MotionValue } from "framer-motion";
import React from "react";

const transition = {
  duration: 0,
  ease: "linear",
};

export const GoogleGeminiEffect = ({
  pathLengths,
  title,
  description,
  className,
}: {
  pathLengths: MotionValue<number>[];
  title?: string;
  description?: string;
  className?: string;
}) => {
  return (
    <div className={cn("sticky top-80 flex flex-col items-center", className)}>
      <p className="text-lg md:text-4xl font-heading tracking-widest text-center text-white font-normal mb-4">
        {title || "Precision. Speed. Integrity."}
      </p>
      <p className="text-xs md:text-sm text-center text-white/50 font-light max-w-lg mx-auto mb-10">
        {description ||
          "We connect elite IT talent with the organizations that need them most — fast, vetted, and compliance-ready."}
      </p>
      <div className="w-full max-w-3xl mx-auto -mt-10">
        <svg
          width="100%"
          viewBox="0 0 1000 300"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          {/* Background blurred paths */}
          <motion.path
            d="M0 200 C250 100 500 300 750 150 S1000 200 1000 200"
            strokeWidth="3"
            stroke="#E8280B"
            strokeOpacity="0.12"
            fill="none"
            filter="url(#blur-sm)"
          />
          <motion.path
            d="M0 220 C250 120 500 320 750 170 S1000 220 1000 220"
            strokeWidth="3"
            stroke="#F76B1C"
            strokeOpacity="0.10"
            fill="none"
            filter="url(#blur-sm)"
          />
          <motion.path
            d="M0 180 C250 80 500 280 750 130 S1000 180 1000 180"
            strokeWidth="3"
            stroke="#FFAB00"
            strokeOpacity="0.10"
            fill="none"
            filter="url(#blur-sm)"
          />
          <motion.path
            d="M0 240 C250 140 500 340 750 190 S1000 240 1000 240"
            strokeWidth="3"
            stroke="#E8280B"
            strokeOpacity="0.08"
            fill="none"
            filter="url(#blur-sm)"
          />
          <motion.path
            d="M0 160 C250 60 500 260 750 110 S1000 160 1000 160"
            strokeWidth="3"
            stroke="#F76B1C"
            strokeOpacity="0.08"
            fill="none"
            filter="url(#blur-sm)"
          />

          {/* Foreground animated paths */}
          <motion.path
            d="M0 200 C250 100 500 300 750 150 S1000 200 1000 200"
            strokeWidth="2"
            stroke="#E8280B"
            strokeOpacity="0.85"
            fill="none"
            style={{ pathLength: pathLengths[0] }}
          />
          <motion.path
            d="M0 220 C250 120 500 320 750 170 S1000 220 1000 220"
            strokeWidth="2"
            stroke="#F76B1C"
            strokeOpacity="0.75"
            fill="none"
            style={{ pathLength: pathLengths[1] }}
          />
          <motion.path
            d="M0 180 C250 80 500 280 750 130 S1000 180 1000 180"
            strokeWidth="2"
            stroke="#FFAB00"
            strokeOpacity="0.65"
            fill="none"
            style={{ pathLength: pathLengths[2] }}
          />
          <motion.path
            d="M0 240 C250 140 500 340 750 190 S1000 240 1000 240"
            strokeWidth="1.5"
            stroke="#E8280B"
            strokeOpacity="0.50"
            fill="none"
            style={{ pathLength: pathLengths[3] }}
          />
          <motion.path
            d="M0 160 C250 60 500 260 750 110 S1000 160 1000 160"
            strokeWidth="1.5"
            stroke="#F76B1C"
            strokeOpacity="0.50"
            fill="none"
            style={{ pathLength: pathLengths[4] }}
          />

          <defs>
            <filter id="blur-sm" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};
