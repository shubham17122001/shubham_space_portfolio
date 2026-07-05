"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const timelineData = [
  { year: "2020", title: "Joined IIST", type: "education" },
  { year: "2023", title: "Research Internship", subtitle: "U R Rao Satellite Centre (ISRO)", type: "work" },
  { year: "2024", title: "IEEE Publication", type: "achievement" },
  { year: "2024", title: "Joined DFY-Graviti", type: "work" },
  { year: "2025", title: "Presented Research", subtitle: "International Astronautical Congress, Sydney", type: "achievement" },
  { year: "2025", title: "Selected for UNOOSA-JAXA HeptaSAT", subtitle: "UNSW Sydney", type: "achievement" },
  { year: "2026", title: "Selected Speaker", subtitle: "QGIS User Conference, Switzerland", type: "achievement" },
  { year: "Present", title: "Associate Technical Project Manager", subtitle: "Antrix Corporation Limited (Deployment)", type: "work" },
];

export default function CareerTimeline() {
  return (
    <div className="relative border-l border-card-border ml-3 md:ml-6 space-y-12 pb-8">
      {timelineData.map((item, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative pl-8 md:pl-12"
        >
          {/* Node */}
          <div className={cn(
            "absolute -left-2 top-1.5 w-4 h-4 rounded-full border-2 border-background",
            item.type === 'work' ? "bg-primary" : 
            item.type === 'education' ? "bg-purple-500" : "bg-teal-500"
          )} />
          
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
            <span className="text-primary font-mono text-sm tracking-widest">{item.year}</span>
            <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
          </div>
          
          {item.subtitle && (
            <p className="text-muted">{item.subtitle}</p>
          )}
        </motion.div>
      ))}
    </div>
  );
}
