"use client";
import React from "react";
import { motion } from "framer-motion";

interface ShimmerTextProps {
  text: string;
  className?: string;
  speed?: number;
  colors?: string[];
  baseColor?: string;
}

export const ShimmerText: React.FC<ShimmerTextProps> = ({
  text,
  className = "",
  speed = 2,
  colors = ["#64748b", "#e2e8f0", "#f8fafc", "#e2e8f0", "#64748b"],
}) => {
  const gradientColors = colors.join(", ");

  return (
    <div className={`relative inline-block overflow-hidden ${className}`}>
      <motion.span
        className="block bg-gradient-to-r bg-clip-text text-transparent font-bold"
        style={{
          backgroundImage: `linear-gradient(90deg, ${gradientColors
            .split(", ")
            .slice(1, -1)
            .join(", ")})`,
          backgroundSize: "300% 100%",
        }}
        animate={{
          backgroundPosition: ["-100% 50%", "200% 50%"],
        }}
        transition={{
          duration: speed,
          ease: [0.4, 0.0, 0.2, 1],
          repeat: Infinity,
          repeatDelay: 1.5,
        }}
      >
        {text}
      </motion.span>
    </div>
  );
};
