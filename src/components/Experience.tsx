import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    company: "Centre for Development of Telematics (C-DOT)",
    logo: "/logos/cdot.png", // Replace with actual path to logo
    role: "Intern",
    period: "Jan 2025 - Jul 2025",
    description: "Built CAT (Python) & DPS (MERN) for end-to-end 4G configuration automation & monitoring, delivering 75% lower effort, 70% fewer failures & 60% higher visibility. Achieved 60% faster runtimes via multithreading & targeted caching."
  },
  {
    company: "Grid Controller of India Ltd. (Grid-India)",
    logo: "/logos/grid-india.png", // Replace with actual path to logo
    role: "Intern",
    period: "Aug 2024 - Nov 2024",
    description: "Built a national-scale load-forecasting platform using neural networks, ingesting real-time weather from 615+ stations. Shipped 7+ production features & robust preprocessing pipelines, boosting accuracy & validation reliability 5x."
  },
  {
    company: "Housing & Urban Development Corp. (HUDCO)",
    logo: "/logos/hudco.png", // Replace with actual path to logo
    role: "Intern",
    period: "Jul 2023 - Aug 2023",
    description: "Implemented Layer 2/3 segmentation & routing using VLANs, BGP & OSPF, proactively isolating fault domains. Administered enterprise-grade routers & switches, executing preventative maintenance for resilient network operations."
  },
  {
    company: "Canadian Fellows",
    logo: "/logos/canadian-fellows.png", // Replace with actual path to logo
    role: "Software Engineer (Freelance)",
    period: "Jul 2023 - Dec 2023",
    description: "Built & versioned REST APIs in Node.js (Express) for leads, bookings & contacts, with strict input validation & rate limiting. Secured admin with JWT, RBAC, audit logging, bcrypt, and integrated booking via secure wrappers."
  },
  {
    company: "The High Vault Security",
    logo: "/logos/high-vault.png", // Replace with actual path to logo
    role: "Software Engineer (Freelance)",
    period: "Jan 2023 - Jun 2023",
    description: "Shipped versioned REST APIs in Node.js (Express) for enquiries, quotes & scheduling. Halved latency via refined PostgreSQL schemas and tuned queries; hardened admin with JWT sessions, RBAC, audit logs, bcrypt."
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="font-normal">Experience</span>
          </h2>
        </div>
        
        <div className="space-y-6 animate-slide-up">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800 text-zinc-100 transition-all hover:bg-zinc-800/50">
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  {/* Logo Placeholder - You'll need to add actual images */}
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0 overflow-hidden">
                     {/* <img src={exp.logo} alt={`${exp.company} logo`} className="w-8 h-8 object-contain" /> */}
                     <span className="text-xs font-bold text-zinc-400">{exp.company.substring(0, 2).toUpperCase()}</span>
                  </div>
                  
                  <div className="flex-1 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                      <h3 className="text-lg sm:text-xl font-bold">
                        {exp.role} at {exp.company}
                      </h3>
                      <span className="text-sm text-zinc-400 font-medium whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};