"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassPanel from "@/components/ui/GlassPanel";
import { Users, Presentation, HeartHandshake } from "lucide-react";

export default function Leadership() {
  return (
    <div className="container mx-auto px-6 py-12 pb-32">
      <SectionHeading 
        title="Leadership & Community" 
        subtitle="Empowering the next generation of engineers and space enthusiasts."
      />

      <div className="max-w-4xl mx-auto mt-16 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassPanel hoverEffect className="p-8 md:p-12 border-l-4 border-l-primary">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 shrink-0 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                <Users className="text-primary" size={32} />
              </div>
              
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">President</h3>
                <h4 className="text-xl text-primary font-medium mb-4">Vahani Alumni Association</h4>
                
                <p className="text-muted leading-relaxed mb-6">
                  Leading a vibrant community of alumni, fostering mentorship, and driving initiatives that support continuous learning and professional growth. My role involves strategic planning and executing programs that bridge the gap between academic learning and industry expectations.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 bg-card-border/30 p-3 rounded-lg border border-card-border">
                    <HeartHandshake className="text-primary" size={20} />
                    <span className="text-sm font-medium text-foreground/90">Volunteer Management</span>
                  </div>
                  <div className="flex items-center gap-3 bg-card-border/30 p-3 rounded-lg border border-card-border">
                    <Presentation className="text-primary" size={20} />
                    <span className="text-sm font-medium text-foreground/90">Community Leadership</span>
                  </div>
                </div>
              </div>
            </div>
          </GlassPanel>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <GlassPanel className="p-8 md:p-12 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/10 blur-3xl rounded-full" />
            
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Presentation className="text-primary" size={28} />
              AI & Tech Workshops
            </h3>
            
            <p className="text-muted leading-relaxed mb-8 max-w-2xl">
              Conducted multiple technical workshops focusing on Artificial Intelligence, Python programming, and their applications in space technology. Aimed at demystifying complex concepts and providing hands-on experience to aspiring engineers.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-card border border-card-border text-sm font-medium text-foreground/80">Python Development</span>
              <span className="px-4 py-2 rounded-full bg-card border border-card-border text-sm font-medium text-foreground/80">Machine Learning Basics</span>
              <span className="px-4 py-2 rounded-full bg-card border border-card-border text-sm font-medium text-foreground/80">Satellite Data Processing</span>
            </div>
          </GlassPanel>
        </motion.div>
      </div>
    </div>
  );
}
