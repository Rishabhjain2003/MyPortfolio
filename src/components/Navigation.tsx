import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

import links from "@/data/links.json";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Updated navLinks to match Index.tsx
  const navLinks = [
    { href: "#about", label: "About Me" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact Me" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 rounded-lg bg-foreground text-background flex items-center justify-center text-sm">
              R
            </div>
            <span className="hidden sm:inline">Rishabh Jain</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href}
                className="text-sm hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button 
              className="bg-foreground text-background hover:bg-foreground/90"
              asChild
            >
              <a 
                href={links.resume} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Resume ↗
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button 
                className="bg-foreground text-background hover:bg-foreground/90 w-full"
                asChild
              >
                <a 
                href={links.resume} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Resume ↗
              </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};