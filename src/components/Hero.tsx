import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

import links from "@/data/links.json";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Hello, I'm <span className="block">Rishabh Jain.</span>
            <span className="block mt-2">Backend <span className="font-normal">Engineer</span></span>
            <span className="block text-base sm:text-lg font-normal text-muted-foreground mt-4">
              Based in <span className="font-bold text-foreground">India.</span>
            </span>
          </h1>

          <p className="text-base text-muted-foreground mb-8 max-w-xl leading-relaxed">
            I build backend systems that replace manual processes and scale under pressure —
            REST APIs, automation pipelines, and event-driven architectures. M.Tech CSE at NIT Bhopal.
            700+ LeetCode problems solved.
          </p>

          <div className="flex gap-4 mb-8">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border-2 border-border rounded-lg hover:bg-accent hover:text-accent-foreground transition-all"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border-2 border-border rounded-lg hover:bg-accent hover:text-accent-foreground transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            
            <a
              href={links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border-2 border-border rounded-lg hover:bg-accent hover:text-accent-foreground transition-all"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            
            <a
              href={links.email}
              className="p-3 border-2 border-border rounded-lg hover:bg-accent hover:text-accent-foreground transition-all"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="relative animate-slide-up flex items-center justify-center lg:justify-end">
          <img
            src="/developer-illustration.svg"
            alt="Developer Illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};