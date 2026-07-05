"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassPanel from "@/components/ui/GlassPanel";
import { BookOpen, FileText, Globe } from "lucide-react";

const publications = [
  {
    title: "VesselSight: Advanced Maritime Surveillance using NOVASAR",
    venue: "International Astronautical Congress (IAC)",
    location: "Sydney, Australia",
    type: "Research Paper / Oral Presentation",
    year: "2025",
    icon: <Globe className="text-primary" size={24} />,
    description: "Presented research on historical ship movement dashboards and maritime surveillance using synthetic aperture radar."
  },
  {
    title: "Satellite Pose Estimation & Perspective-n-Point Algorithms",
    venue: "IEEE",
    location: "Global",
    type: "Publication",
    year: "2024",
    icon: <FileText className="text-primary" size={24} />,
    description: "Published findings based on research conducted during the internship at U R Rao Satellite Centre (ISRO)."
  },
  {
    title: "NISAR Data Visualization and QGIS Integration",
    venue: "QGIS User Conference",
    location: "Switzerland",
    type: "Selected Speaker / Conference Talk",
    year: "2026",
    icon: <BookOpen className="text-primary" size={24} />,
    description: "Selected speaker to present the development and impact of the NISAR QGIS plugin for Earth Observation data."
  }
];

export default function Research() {
  return (
    <div className="container mx-auto px-6 py-12 pb-32">
      <SectionHeading 
        title="Research & Publications" 
        subtitle="Contributing to the global scientific community through space tech research."
      />

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {publications.map((pub, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex"
          >
            <GlassPanel hoverEffect className="p-8 flex flex-col w-full group">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <div className="text-primary group-hover:text-primary-foreground transition-colors">
                  {pub.icon}
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-sm text-muted mb-4 font-mono">
                <span className="text-primary">{pub.year}</span>
                <span className="w-1 h-1 rounded-full bg-card-border" />
                <span>{pub.type}</span>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                {pub.title}
              </h3>
              
              <p className="text-muted/90 mb-6 flex-grow">
                {pub.description}
              </p>
              
              <div className="mt-auto pt-6 border-t border-card-border flex items-center justify-between">
                <span className="text-sm font-medium text-foreground/80">{pub.venue}</span>
                <span className="text-xs px-2 py-1 bg-card-border/50 rounded-md text-muted">{pub.location}</span>
              </div>
            </GlassPanel>
          </motion.div>
        ))}
      </div>
      
      {/* Additional Academic Background */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-5xl mx-auto mt-16"
      >
        <GlassPanel className="p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
          
          <h3 className="text-2xl font-semibold text-foreground mb-4">Academic Foundation</h3>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            My research methodology is deeply rooted in my education at the <strong className="text-foreground">Indian Institute of Space Science and Technology (IIST)</strong>, combined with rigorous practical experience at ISRO.
          </p>
        </GlassPanel>
      </motion.div>
    </div>
  );
}
