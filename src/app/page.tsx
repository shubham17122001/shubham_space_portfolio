"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Terminal } from "lucide-react";
import dynamic from "next/dynamic";

const StarsBackground = dynamic(() => import("@/components/3d/StarsBackground"), { ssr: false });
const EarthModel = dynamic(() => import("@/components/3d/EarthModel"), { ssr: false });

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* 3D Backgrounds */}
      <StarsBackground />
      <EarthModel />

      <div className="container mx-auto px-6 relative z-10 pt-20 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 flex justify-center"
          >
            <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary-foreground text-sm font-medium tracking-wide backdrop-blur-sm flex items-center gap-2">
              <Terminal size={14} className="text-primary" />
              Mission Control Active
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/50"
          >
            Shubham Tayade
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl text-muted mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Associate Technical Project Manager specializing in{" "}
            <span className="text-foreground font-medium">Earth Observation</span>,{" "}
            <span className="text-foreground font-medium">Space Systems</span>, and{" "}
            <span className="text-foreground font-medium">AI Integration</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/projects"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] group"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a
              href="#" // Placeholder for resume
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-card border border-card-border hover:border-primary/50 text-foreground font-medium flex items-center justify-center gap-2 hover:bg-card/80 transition-all backdrop-blur-sm group"
            >
              <Download size={18} className="text-muted group-hover:text-primary transition-colors" />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>

      {/* Stats / Quick Info Bar */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 border-t border-card-border bg-background/40 backdrop-blur-xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="container mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center md:text-left divide-x divide-card-border/0 md:divide-card-border">
            <div className="px-4">
              <p className="text-xs text-muted uppercase tracking-wider mb-1">Status</p>
              <p className="text-sm font-medium flex items-center justify-center md:justify-start gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Deployed at Antrix
              </p>
            </div>
            <div className="px-4 hidden md:block">
              <p className="text-xs text-muted uppercase tracking-wider mb-1">Location</p>
              <p className="text-sm font-medium">Bengaluru, India</p>
            </div>
            <div className="px-4">
              <p className="text-xs text-muted uppercase tracking-wider mb-1">Expertise</p>
              <p className="text-sm font-medium">Remote Sensing</p>
            </div>
            <div className="px-4 hidden md:block">
              <p className="text-xs text-muted uppercase tracking-wider mb-1">Alumni</p>
              <p className="text-sm font-medium">IIST</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
