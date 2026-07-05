"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassPanel from "@/components/ui/GlassPanel";
import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Transmission successful. I will respond to your message shortly.");
      setFormState({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <div className="container mx-auto px-6 py-12 pb-32">
      <SectionHeading 
        title="Establish Connection" 
        subtitle="Open for opportunities, collaborations, and discussions on space technology."
      />

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 mt-16">
        {/* Contact Info */}
        <motion.div 
          className="lg:col-span-2 space-y-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassPanel className="p-8 h-full">
            <h3 className="text-2xl font-bold text-foreground mb-8">Comm Link Details</h3>
            
            <div className="space-y-8">
              <a href="mailto:sgt17122001@gmail.com" className="flex items-start gap-4 group">
                <div className="p-3 rounded-full bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted mb-1">Email</h4>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors">sgt17122001@gmail.com</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 border border-primary/20 text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted mb-1">Base of Operations</h4>
                  <p className="text-foreground font-medium">Bengaluru, India</p>
                </div>
              </div>

              <div className="pt-8 border-t border-card-border">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted mb-6">Social Networks</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://www.linkedin.com/in/shubham-tayade-012340197" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 py-3 flex justify-center items-center gap-2 rounded-lg bg-card hover:bg-card-border border border-card-border text-foreground transition-colors"
                  >
                    <FaLinkedin size={18} className="text-[#0077b5]" />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 py-3 flex justify-center items-center gap-2 rounded-lg bg-card hover:bg-card-border border border-card-border text-foreground transition-colors"
                  >
                    <FaGithub size={18} />
                    <span className="text-sm font-medium">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </GlassPanel>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="lg:col-span-3"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <GlassPanel className="p-8 md:p-10">
            <h3 className="text-2xl font-bold text-foreground mb-8">Send a Transmission</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground/80">Designation / Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-card-border focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all text-foreground"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground/80">Comms Frequency / Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-card-border focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all text-foreground"
                    placeholder="jane@agency.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message Content</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-card-border focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all text-foreground resize-none custom-scrollbar"
                  placeholder="How can we collaborate..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? "Transmitting..." : "Send Transmission"}
                {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>
            </form>
          </GlassPanel>
        </motion.div>
      </div>
    </div>
  );
}
