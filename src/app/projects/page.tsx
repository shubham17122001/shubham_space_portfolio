"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassPanel from "@/components/ui/GlassPanel";
import { Layers, Rocket, Target, Cpu } from "lucide-react";

const projects = [
  {
    title: "VesselSight: Maritime Surveillance Dashboard",
    technologies: ["Remote Sensing", "NOVASAR AIS", "GIS", "Earth Observation"],
    description: "Historical ship movement dashboard for advanced maritime surveillance. Presented at IAC Sydney.",
    icon: <Rocket className="text-primary" size={24} />
  },
  {
    title: "Integrated Satellite Data Management Platform",
    technologies: ["Earth Observation", "AI", "Automation", "Satellite Imagery"],
    description: "AI-assisted platform that automates satellite image requests, feasibility analysis, delivery, and lifecycle management.",
    icon: <Layers className="text-primary" size={24} />
  },
  {
    title: "NISAR QGIS Plugin",
    technologies: ["Python", "QGIS", "Satellite Data"],
    description: "Visualization and analytical plugin developed specifically for handling complex NISAR data.",
    icon: <Target className="text-primary" size={24} />
  },
  {
    title: "Vahani Alumni Portal",
    technologies: ["Python", "Streamlit"],
    description: "Comprehensive Alumni Directory featuring Mentorship, Referral Portal, and Support Fund management.",
    icon: <Cpu className="text-primary" size={24} />
  }
];

export default function Projects() {
  return (
    <div className="container mx-auto px-6 py-12 pb-32">
      <SectionHeading 
        title="Mission Portfolio" 
        subtitle="Key projects driving innovation in space technology and data systems."
      />

      <div className="grid grid-cols-1 gap-16 mt-16">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <GlassPanel hoverEffect className="p-0 overflow-hidden flex flex-col lg:flex-row group">
              {/* Image Placeholder Section */}
              <div className="lg:w-2/5 bg-card-border/30 relative min-h-[300px] flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-card-border overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-0"></div>
                <div className="relative z-10 flex flex-col items-center text-muted gap-4">
                  <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center border border-card-border shadow-glass group-hover:scale-110 transition-transform duration-500">
                    {project.icon}
                  </div>
                  <span className="text-sm font-mono tracking-widest uppercase">Project Asset</span>
                  <span className="text-xs text-muted/50 border border-muted/20 px-3 py-1 rounded-full">Image / Architecture</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12 lg:w-3/5 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted text-lg leading-relaxed mb-8">
                  {project.description}
                </p>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                    Core Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Simulated Details Link */}
                <div className="mt-8 pt-6 border-t border-card-border flex justify-end">
                  <button className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors flex items-center gap-2">
                    Explore Mission Details
                    <span className="text-primary text-lg leading-none">&rarr;</span>
                  </button>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
