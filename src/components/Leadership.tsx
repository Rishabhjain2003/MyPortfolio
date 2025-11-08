import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const leadership = [
  {
    role: "Treasurer",
    organization: "NSS GBPEC",
    period: "Mar 2023 - Dec 2024",
    description: "Managed financial operations, overseeing budgeting, expense tracking, and fund allocation. Organized community service initiatives including environmental drives and health camps. Collaborated with stakeholders to execute social welfare projects efficiently.",
    image: "/nss.svg",
    variant: "light" // "light" or "dark" for the card style
  },
  {
    role: "Member",
    organization: "IEEE GBPEC",
    period: "Apr 2022 - Jul 2025",
    description: "Played a key role in organizing technical workshops, seminars, and hackathons to foster innovation. Helped organize cultural activities for a balanced student experience, developing strong event management and teamwork skills.",
    image: "/ieee.png",
    variant: "dark" 
  },
  {
    role: "Webmaster",
    organization: "IEEE GBPEC",
    period: "Aug 2023 - Dec 2024",
    description: "Designed and developed the official website, enhancing online visibility. implemented features for event registrations and resource sharing. Optimized performance and SEO, aligning digital strategies with organizational goals.",
    image: "/ieee.png",
    variant: "light"
  }
];

export const Leadership = () => {
  return (
    <section id="leadership" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Volunteering & <span className="font-normal">Leadership</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 animate-slide-up">
          {leadership.map((item, index) => (
            <Card 
              key={index} 
              className={`border-none shadow-xl transition-all hover:scale-[1.02] ${
                item.variant === 'dark' 
                  ? 'bg-black text-white' 
                  : 'bg-white text-black'
              }`}
            >
              {/* CardContent centers everything inside it */}
              <CardContent className="pt-12 pb-8 px-8 flex flex-col items-center text-center h-full">
                
                <div className={`relative w-24 h-24 rounded-full mb-6 flex items-center justify-center ${
                   item.variant === 'dark' ? 'bg-zinc-800' : 'bg-zinc-100'
                }`}>
                  <img src={item.image} alt={item.role} className="w-full h-full rounded-full object-contain p-2" />
                  
                  <div className={`absolute -bottom-2 -right-2 p-2 rounded-full ${
                    item.variant === 'dark' ? 'bg-white text-black' : 'bg-black text-white'
                  }`}>
                    <Quote className="w-4 h-4 fill-current" />
                  </div>
                </div>

                <p className={`mb-8 leading-relaxed ${
                  item.variant === 'dark' ? 'text-zinc-300' : 'text-zinc-600'
                }`}>
                  "{item.description}"
                </p>
                
                {/* --- HERE IS THE FIX --- */}
                {/* This container pushes to the bottom. 
                  CardContent will center it.
                */}
                <div className="mt-auto">
                  {/* 1. This div is ONLY the border line. It is centered. */}
                  <div className="w-16 border-t border-zinc-300/20 mx-auto pt-6" />

                  {/* 2. The text follows, and will be centered by text-center from CardContent */}
                  <h3 className="text-xl font-bold">{item.role}</h3>
                  <p className={`text-sm mt-1 ${
                    item.variant === 'dark' ? 'text-zinc-400' : 'text-zinc-500'
                  }`}>
                    {item.organization}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};