"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassPanel from "@/components/ui/GlassPanel";
import { 
  Camera, 
  X, 
  Maximize2, 
  Award, 
  BookOpen, 
  Users, 
  Globe, 
  Sparkles, 
  GraduationCap, 
  MapPin 
} from "lucide-react";

const milestones = [
  {
    id: 1,
    title: "B.Tech Convocation with ISRO Chairman",
    description: "Receiving B.Tech degree from ISRO Chairman S. Somnath in 2024 at IIST. A defining moment in my space technology education.",
    category: "Education",
    icon: GraduationCap,
    location: "IIST, India",
    date: "2024",
    highlightColor: "from-blue-500 to-indigo-500"
  },
  {
    id: 2,
    title: "UNSW HeptaSAT Training",
    description: "Hands-on satellite construction and testing training at the University of New South Wales (UNSW), Sydney.",
    category: "Training",
    icon: Award,
    location: "Sydney, Australia",
    date: "2024",
    highlightColor: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Global Collaboration (UNOOSA & JAXA)",
    description: "Engaging with space experts Mami Sasamura (Expert, UN Office for Outer Space Affairs) and Ozawa Takuya (JAXA) at global workshops.",
    category: "International",
    icon: Globe,
    location: "Global",
    date: "2024",
    highlightColor: "from-cyan-500 to-teal-500"
  },
  {
    id: 4,
    title: "IAC Sydney 2025 Engagement",
    description: "Representing ideas and networking at the International Astronautical Congress (IAC) in Sydney.",
    category: "Conference",
    icon: Users,
    location: "Sydney, Australia",
    date: "Oct 2025",
    highlightColor: "from-emerald-500 to-green-500"
  },
  {
    id: 5,
    title: "NRSC ISRO Paper Presentation",
    description: "Sharing technical insights and research papers at the National Remote Sensing Centre (NRSC), ISRO.",
    category: "Research",
    icon: BookOpen,
    location: "NRSC, ISRO",
    date: "2024",
    highlightColor: "from-amber-500 to-orange-500"
  },
  {
    id: 6,
    title: "Vahani Scholarship Milestone",
    description: "Connecting with Reeva Misra, Founder & Chairperson of Vahani Scholarship Trust, celebrating academic and professional growth.",
    category: "Leadership",
    icon: Sparkles,
    location: "India",
    date: "2024",
    highlightColor: "from-red-500 to-rose-500"
  },
  {
    id: 7,
    title: "Family Celebration at IIST",
    description: "Graduation celebration with my parents and sister, marking a milestone of hard work and continuous support.",
    category: "Personal",
    icon: Users,
    location: "IIST Campus",
    date: "2024",
    highlightColor: "from-blue-400 to-cyan-500"
  }
];

export default function Gallery() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <div className="container mx-auto px-6 py-12 pb-32">
      <SectionHeading 
        title="Visual Journey" 
        subtitle="Moments of learning, international collaboration, and key milestones in the space sector."
      />

      <div className="mt-12 max-w-6xl mx-auto space-y-16">
        
        {/* Featured Collage Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold text-foreground flex items-center gap-3">
              <Camera className="text-primary" size={24} />
              Featured Journey Collage
            </h3>
            <span className="text-xs text-muted font-mono uppercase tracking-wider">Click to view high-res</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-2xl border border-card-border overflow-hidden bg-card p-2 cursor-pointer"
            onClick={() => setIsLightboxOpen(true)}
          >
            {/* Glowing outer ambient border */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary via-accent to-blue-500 opacity-20 blur-lg group-hover:opacity-40 transition duration-500" />
            
            <div className="relative rounded-xl overflow-hidden aspect-[16/9] w-full">
              <Image
                src="/Upskilling_continue_and_building.png"
                alt="About me: Upskilling Continuously and Building Beyond Boundaries collage"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-[1.01]"
              />
              {/* Overlay hover effect */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                <div className="bg-background/80 border border-card-border px-6 py-3 rounded-full flex items-center gap-2 text-foreground font-medium shadow-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Maximize2 size={16} className="text-primary" />
                  Expand Image
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Milestone Cards Grid */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <Sparkles className="text-primary" size={24} />
            <h3 className="text-2xl font-semibold text-foreground">
              Key Milestones & Engagements
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <GlassPanel
                  key={item.id}
                  hoverEffect
                  className="flex flex-col justify-between h-full group"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${item.highlightColor} text-white`}>
                        {item.category}
                      </span>
                      <span className="text-xs text-muted font-mono">{item.date}</span>
                    </div>

                    <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-sm text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-card-border/50 flex items-center justify-between text-xs text-muted">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} className="text-primary/70" />
                      {item.location}
                    </span>
                    <span className="flex items-center gap-1 text-primary group-hover:underline">
                      <IconComponent size={14} />
                      Verified
                    </span>
                  </div>
                </GlassPanel>
              );
            })}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button 
              className="absolute top-6 right-6 p-3 rounded-full bg-card border border-card-border hover:bg-card/80 text-foreground transition-colors cursor-pointer"
              onClick={() => setIsLightboxOpen(false)}
              aria-label="Close Lightbox"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-5xl aspect-[16/9] rounded-xl overflow-hidden border border-card-border shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src="/Upskilling_continue_and_building.png"
                alt="About me: Upskilling Continuously and Building Beyond Boundaries"
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

