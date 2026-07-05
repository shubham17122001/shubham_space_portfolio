"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassPanel from "@/components/ui/GlassPanel";
import CareerTimeline from "@/components/sections/CareerTimeline";
import { CheckCircle2, Award, ExternalLink } from "lucide-react";

export default function About() {
  const skills = [
    {
      category: "Project Management",
      items: ["Project Planning", "Stakeholder Management", "Risk Management", "Technical Documentation", "PRDs", "Agile Collaboration"]
    },
    {
      category: "Space Technologies",
      items: ["Earth Observation", "Remote Sensing", "Satellite Imagery", "Space Systems", "Computer Vision", "Digital Image Processing", "GIS"]
    },
    {
      category: "Programming & Tools",
      items: ["Python", "MATLAB", "SQL", "QGIS", "Docker", "Jira", "Streamlit", "AI Tools"]
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12 pb-32">
      <SectionHeading 
        title="About Me" 
        subtitle="Bridging the gap between Space Technology and AI-driven solutions."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-muted leading-relaxed"
        >
          <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start mb-6">
            <div className="relative group shrink-0">
              {/* Glowing Space-Theme Ambient Border */}
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-primary via-accent to-blue-500 opacity-40 blur-md group-hover:opacity-75 transition duration-500" />
              
              <div className="relative rounded-2xl border border-card-border overflow-hidden bg-card p-1">
                <Image
                  src="/shubham_profile.jpg"
                  alt="Shubham Tayade"
                  width={200}
                  height={266}
                  className="rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{ height: "auto" }}
                  priority
                />
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-foreground/90 font-medium">
                I am an Associate Technical Project Manager working deeply within the Indian space ecosystem. 
                A proud graduate of the Indian Institute of Space Science and Technology (IIST), I have dedicated my career to advancing Earth Observation and satellite systems.
              </p>
              <p>
                My journey began with a research internship at the U R Rao Satellite Centre (ISRO), which laid the foundation for my expertise in perspective-n-point algorithms and computer vision for satellite navigation.
              </p>
            </div>
          </div>

          <p>
            Currently, I am working at DFY-Graviti and am deployed to Antrix Corporation Limited (Department of Space, Government of India). My core focus involves managing strategic customers, developing technical proposals, and creating AI-assisted prototypes for Earth observation applications.
          </p>
          <p>
            I am passionate about building products that seamlessly combine the vast potential of Space Technology with Artificial Intelligence, ensuring that complex satellite data becomes accessible and actionable.
          </p>

          <div className="pt-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">Technical Expertise</h3>
            <div className="space-y-6">
              {skills.map((skillGroup, idx) => (
                <div key={idx}>
                  <h4 className="text-primary font-medium mb-3">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, sIdx) => (
                      <span key={sIdx} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-card-border text-sm text-foreground/80">
                        <CheckCircle2 size={14} className="text-primary/70" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <GlassPanel className="p-8 md:p-10">
            <h3 className="text-2xl font-semibold text-foreground mb-10 flex items-center gap-3">
              Career Trajectory
              <span className="h-px flex-1 bg-card-border ml-4 block" />
            </h3>
            <CareerTimeline />
          </GlassPanel>
        </motion.div>
      </div>

      {/* Certifications Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 pt-12 border-t border-card-border"
      >
        <div className="flex items-center gap-3 mb-4">
          <Award className="text-primary" size={28} />
          <h3 className="text-3xl font-bold text-foreground">
            AI & Technical Certifications
          </h3>
        </div>
        <p className="text-muted mb-8 max-w-2xl">
          Verified credentials demonstrating expertise in large language models, prompt engineering, and API integration.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassPanel hoverEffect className="p-6 md:p-8 flex flex-col justify-between h-full group">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 border border-primary/20 text-primary">
                  Anthropic
                </span>
                <span className="text-xs text-muted font-mono">July 2026</span>
              </div>
              <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                Claude Prompt Engineering
              </h4>
              <p className="text-sm text-muted leading-relaxed">
                Advanced certification covering prompt optimization, structural context techniques, system prompts, and structured input-output workflows with the Claude family of models.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-card-border/50 flex justify-between items-center">
              <span className="text-xs text-muted font-mono text-foreground/50">Credential ID: 68te7vr4bkxu</span>
              <a
                href="/certificate-68te7vr4bkxu-1783236400.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline font-medium"
              >
                View Certificate
                <ExternalLink size={14} />
              </a>
            </div>
          </GlassPanel>

          <GlassPanel hoverEffect className="p-6 md:p-8 flex flex-col justify-between h-full group">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 border border-primary/20 text-primary">
                  Anthropic
                </span>
                <span className="text-xs text-muted font-mono">July 2026</span>
              </div>
              <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                API Fundamentals
              </h4>
              <p className="text-sm text-muted leading-relaxed">
                Comprehensive training on Anthropic API integration, covering model selection, parameter tuning, token management, streaming responses, and building structured agentic backend applications.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-card-border/50 flex justify-between items-center">
              <span className="text-xs text-muted font-mono text-foreground/50">Credential ID: 77ujno4ujroa</span>
              <a
                href="/certificate-77ujno4ujroa-1783186382.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline font-medium"
              >
                View Certificate
                <ExternalLink size={14} />
              </a>
            </div>
          </GlassPanel>
        </div>
      </motion.div>
    </div>
  );
}
