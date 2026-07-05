"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassPanelProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function GlassPanel({ children, className, hoverEffect = false, ...props }: GlassPanelProps) {
  return (
    <motion.div
      className={cn(
        "glass-panel rounded-2xl p-6 relative overflow-hidden",
        hoverEffect && "transition-all duration-300 hover:shadow-[0_8px_30px_rgba(37,99,235,0.15)] hover:border-primary/30",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {/* Subtle top highlight */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      {children}
    </motion.div>
  );
}
