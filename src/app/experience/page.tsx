"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassPanel from "@/components/ui/GlassPanel";
import { Briefcase, Building, ChevronRight } from "lucide-react";

const experiences = [
  {
    role: "Associate Technical Project Manager",
    company: "DFY-Graviti Pvt Ltd",
    deployment: "Deployed to Antrix Corporation Limited (Department of Space, Govt. of India)",
    period: "Present",
    responsibilities: [
      "Manage Earth Observation projects and coordinate strategic project planning.",
      "Prepare Product Requirement Documents (PRDs) and develop technical proposals.",
      "Manage stakeholders and coordinate with strategic customers.",
      "Develop AI-assisted prototypes to support satellite imagery workflows.",
      "Lead remote sensing projects and computer vision applications.",
      "Oversee image processing pipelines and technical documentation."
    ]
  },
  {
    role: "Research Intern",
    company: "U R Rao Satellite Centre (ISRO)",
    deployment: null,
    period: "2023",
    responsibilities: [
      "Worked on Satellite Pose Estimation systems.",
      "Implemented Perspective-n-Point Algorithms for space applications.",
      "Conducted research in Computer Vision and Satellite Navigation.",
      "Contributed to ISRO's ongoing satellite autonomy research."
    ]
  }
];

export default function Experience() {
  return (
    <div className="container mx-auto px-6 py-12 pb-32">
      <SectionHeading 
        title="Professional Experience" 
        subtitle="My journey in the space technology ecosystem."
      />

      <div className="max-w-4xl mx-auto space-y-12">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <GlassPanel hoverEffect className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
                    <Briefcase className="text-primary" size={24} />
                    {exp.role}
                  </h3>
                  <div className="mt-3 space-y-2">
                    <p className="text-lg text-primary font-medium flex items-center gap-2">
                      <Building size={18} />
                      {exp.company}
                    </p>
                    {exp.deployment && (
                      <p className="text-sm text-muted bg-card-border/50 inline-block px-3 py-1 rounded-md">
                        {exp.deployment}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="shrink-0 bg-primary/10 border border-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-mono tracking-wider font-semibold self-start">
                  {exp.period}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted mb-4 border-b border-card-border pb-2">
                  Key Responsibilities
                </h4>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-3 text-foreground/80">
                      <ChevronRight size={18} className="text-primary shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </GlassPanel>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
