import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import links from "@/data/links.json";

export const Contact = () => {
  const email = "rishabh.nit.bhopal@gmail.com";
  const phone = "+91 7303473899";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // --- THIS IS THE UPDATED FUNCTION ---
  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Construct the email body
    const emailBody = `
Website: ${formData.website || "N/A"}

${formData.message}

From: ${formData.name}
    `.trim();

    // 2. Construct the Gmail URL (not a mailto link)
    const subject = encodeURIComponent("Request callback from portfolio");
    const body = encodeURIComponent(emailBody);
    
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

    // 3. Open the link in a new tab
    window.open(gmailLink, '_blank', 'noopener,noreferrer');
  };
  // --- END OF UPDATE ---

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        <div className="animate-slide-up space-y-6">
          {/* Attach onSubmit handler */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input 
              name="name"
              placeholder="Your name" 
              value={formData.name}
              onChange={handleChange}
              required
              className="border-2 border-black/10 focus-visible:ring-black" 
            />
            <Input 
              type="email" 
              name="email"
              placeholder="Your Email (for me to reply to)" 
              value={formData.email}
              onChange={handleChange}
              required
              className="border-2 border-black/10 focus-visible:ring-black" 
            />
            <Input 
              name="website"
              placeholder="Your website (if exists)" 
              value={formData.website}
              onChange={handleChange}
              className="border-2 border-black/10 focus-visible:ring-black" 
            />
            <Textarea 
              name="message"
              placeholder="How can I help?" 
              rows={5} 
              value={formData.message}
              onChange={handleChange}
              required
              className="border-2 border-black/10 focus-visible:ring-black" 
            />
            <Button 
              type="submit" 
              className="w-full sm:w-auto bg-black text-white hover:bg-zinc-800 rounded-lg"
            >
              Get In Touch
            </Button>
          </form>

          {/* ... (Social links) ... */}
           <div className="flex gap-4">
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

        {/* ... (Right Column Info) ... */}
        <div className="animate-fade-in md:pt-4">
          <h2 className="text-5xl sm:text-6xl font-bold mb-4 leading-tight">
            Let's talk for
            <span className="block">Something special</span>
          </h2>
          <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
            I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.
          </p>
          
          <div className="space-y-3">
            <a 
              href={links.email}
              className="text-xl font-bold hover:underline block"
            >
              {email}
            </a>
            <a 
              href={`tel:${phone.replace(/\s/g, "")}`} 
              className="text-xl font-bold hover:underline block"
            >
              {phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};