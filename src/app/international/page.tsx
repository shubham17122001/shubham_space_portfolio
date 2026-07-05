"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassPanel from "@/components/ui/GlassPanel";
import { MapPin, X, Award, Camera, Map as MapIcon, Navigation } from "lucide-react";
import { cn } from "@/lib/utils";

const locations = [
  {
    id: "australia-iac",
    country: "Australia",
    city: "Sydney",
    title: "International Astronautical Congress",
    role: "Oral Presenter",
    coordinates: { top: "75%", left: "85%" },
    story: "Presented my research on the VesselSight maritime surveillance dashboard to a global audience of space professionals at IAC Sydney.",
    tags: ["Conference", "Research", "Networking"]
  },
  {
    id: "australia-unsw",
    country: "Australia",
    city: "Sydney (UNSW)",
    title: "UNOOSA-JAXA HeptaSAT",
    role: "Selected Participant",
    coordinates: { top: "80%", left: "88%" },
    story: "Selected for intensive Satellite Design Training. Hands-on experience in satellite systems engineering, integration, and testing.",
    tags: ["Training", "Satellite Design", "Engineering"]
  },
  {
    id: "switzerland",
    country: "Switzerland",
    city: "Unknown",
    title: "QGIS User Conference",
    role: "Selected Speaker",
    coordinates: { top: "35%", left: "52%" },
    story: "Invited to speak on the development of the NISAR QGIS Plugin, demonstrating how open-source GIS tools can be extended for complex satellite data visualization.",
    tags: ["Open Source", "GIS", "Speaking"]
  },
  {
    id: "india",
    country: "India",
    city: "Bengaluru",
    title: "ISRO / IIST / Antrix",
    role: "Professional Base",
    coordinates: { top: "55%", left: "70%" },
    story: "My home base where I completed my education at IIST, interned at ISRO, and currently work managing Earth Observation projects.",
    tags: ["Career Base", "Education", "Projects"]
  }
];

export default function InternationalExperience() {
  const [activeLocation, setActiveLocation] = useState<typeof locations[0] | null>(null);

  return (
    <div className="container mx-auto px-6 py-12 pb-32">
      <SectionHeading 
        title="Global Footprint" 
        subtitle="International exposure, conferences, and collaborations."
      />

      <div className="relative mt-12 max-w-6xl mx-auto">
        <GlassPanel className="p-4 md:p-8 min-h-[600px] flex flex-col relative overflow-hidden bg-[#02040a]">
          {/* Mock Map Background (Abstract Grid/Nodes representing a map) */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
            backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}></div>
          
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
            <MapIcon size={400} className="text-primary" />
          </div>
          
          <div className="relative z-10 w-full h-[500px] md:h-[600px] border border-card-border/50 rounded-xl bg-card/30 backdrop-blur-sm overflow-hidden">
            
            {/* Map Markers */}
            {locations.map((loc) => (
              <motion.button
                key={loc.id}
                className={cn(
                  "absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group z-20",
                )}
                style={{ top: loc.coordinates.top, left: loc.coordinates.left }}
                whileHover={{ scale: 1.1 }}
                onClick={() => setActiveLocation(loc)}
              >
                <div className="relative">
                  <div className={cn(
                    "w-4 h-4 rounded-full animate-ping absolute inset-0 opacity-75",
                    activeLocation?.id === loc.id ? "bg-primary" : "bg-muted"
                  )} />
                  <div className={cn(
                    "w-4 h-4 rounded-full relative z-10 border-2 border-background shadow-glass",
                    activeLocation?.id === loc.id ? "bg-primary" : "bg-muted group-hover:bg-primary/50"
                  )} />
                </div>
                <span className={cn(
                  "mt-2 text-xs font-semibold px-2 py-1 rounded bg-background/80 backdrop-blur-md border border-card-border whitespace-nowrap transition-colors",
                  activeLocation?.id === loc.id ? "text-primary border-primary/50" : "text-foreground"
                )}>
                  {loc.country}
                </span>
              </motion.button>
            ))}

            {/* Information Overlay */}
            <AnimatePresence>
              {activeLocation && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute top-4 right-4 bottom-4 w-full max-w-sm bg-background/95 backdrop-blur-xl border border-card-border rounded-xl p-6 shadow-2xl z-30 flex flex-col"
                >
                  <button 
                    onClick={() => setActiveLocation(null)}
                    className="absolute top-4 right-4 text-muted hover:text-foreground transition-colors p-1"
                  >
                    <X size={20} />
                  </button>
                  
                  <div className="flex items-start gap-3 mb-6 pr-8">
                    <Navigation className="text-primary shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{activeLocation.country}</h3>
                      <p className="text-primary font-medium">{activeLocation.city}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6 flex-grow overflow-y-auto pr-2 custom-scrollbar">
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-muted mb-2">Event</h4>
                      <p className="text-foreground font-medium">{activeLocation.title}</p>
                      <p className="text-sm text-foreground/70">{activeLocation.role}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-muted mb-2">Story</h4>
                      <p className="text-sm leading-relaxed text-foreground/80">
                        {activeLocation.story}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {activeLocation.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 rounded-md bg-card border border-card-border text-muted">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-card-border flex justify-between gap-2">
                      <button className="flex-1 py-2 text-xs font-medium bg-card hover:bg-card-border transition-colors rounded-md border border-card-border flex items-center justify-center gap-2 text-foreground/80">
                        <Camera size={14} /> Photos
                      </button>
                      <button className="flex-1 py-2 text-xs font-medium bg-card hover:bg-card-border transition-colors rounded-md border border-card-border flex items-center justify-center gap-2 text-foreground/80">
                        <Award size={14} /> Certs
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
          
          <p className="text-center text-sm text-muted mt-6 flex items-center justify-center gap-2">
            <MapPin size={16} className="text-primary" />
            Select a location on the map to explore details.
          </p>
        </GlassPanel>
      </div>
    </div>
  );
}
