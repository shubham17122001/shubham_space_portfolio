"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export default function SectionHeading({ title, subtitle, className, centered = false }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 md:mb-20", centered && "text-center", className)}>
      <motion.h2 
        className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.div 
          className={cn("text-muted text-lg max-w-2xl", centered && "mx-auto")}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {subtitle}
        </motion.div>
      )}
      
      <motion.div 
        className={cn("h-1 w-20 bg-primary mt-6 rounded-full", centered && "mx-auto")}
        initial={{ scaleX: 0, originX: centered ? 0.5 : 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      />
    </div>
  );
}
