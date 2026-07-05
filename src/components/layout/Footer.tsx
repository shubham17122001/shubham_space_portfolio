import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-card-border bg-background/50 backdrop-blur-lg relative z-10">
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="font-semibold text-xl tracking-tight text-foreground">Shubham Tayade</span>
            </Link>
            <p className="text-muted text-sm max-w-md mb-6 leading-relaxed">
              Associate Technical Project Manager specializing in Earth Observation, Space Systems, and AI integration. Building the future of satellite technology in India.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/shubham-tayade-012340197" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-card hover:bg-card-border transition-colors text-foreground/80 hover:text-primary">
                <FaLinkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-card hover:bg-card-border transition-colors text-foreground/80 hover:text-primary">
                <FaGithub size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="mailto:sgt17122001@gmail.com" className="p-2 rounded-full bg-card hover:bg-card-border transition-colors text-foreground/80 hover:text-primary">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/experience" className="hover:text-primary transition-colors">Experience</Link></li>
              <li><Link href="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="/research" className="hover:text-primary transition-colors">Research</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-foreground mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-primary" />
                <span>Bengaluru, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <a href="mailto:sgt17122001@gmail.com" className="hover:text-primary transition-colors">
                  sgt17122001@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-card-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted">
          <p>© {currentYear} Shubham Tayade. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <span className="text-primary">Next.js</span> for Space Tech.
          </p>
        </div>
      </div>
    </footer>
  );
}
