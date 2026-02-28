import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    company: "Centre for Development of Telematics (C-DOT)",
    logo: "/logos/cdot.png",
    role: "SDE Intern",
    period: "Jan 2025 - Jul 2025",
    description:
      "Engineered CAT (Python, FastAPI, Pandas) to automate 4G node configuration generation, reducing configuration time by 60% and deployment errors by 30%. Built DPS (MERN) for node versioning and deployment monitoring, and designed a multi-tier rollback workflow to improve fault isolation during critical updates."
  },
  {
    company: "Grid Controller of India Ltd. (Grid-India)",
    logo: "/logos/grid-india.png",
    role: "Intern",
    period: "Aug 2024 - Nov 2024",
    description:
      "Developed a national-scale LSTM-based load forecasting pipeline ingesting telemetry from 615+ weather stations, achieving 2× higher accuracy over legacy models. Implemented day-ahead and revised prediction workflows to support operational cost optimisation."
  },
  {
    company: "Curiate Solutions",
    logo: "/logos/curiate.png",
    role: "SDE Intern (Remote)",
    period: "Oct 2025 - Dec 2025",
    description:
      "Built a frictionless guest checkout system using React and Razorpay, reducing cart abandonment by 35% via automated recovery workflows. Developed a custom Headless CMS using the Notion API to enable dynamic, SEO-ready content publishing without code deployments."
  },
  {
    company: "Housing & Urban Development Corp. (HUDCO)",
    logo: "/logos/hudco.png",
    role: "Intern",
    period: "Jul 2023 - Aug 2023",
    description:
      "Supported data center network operations by configuring VLANs and OSPF for traffic isolation. Implemented traffic filtering policies and resolved connectivity faults to maintain network uptime."
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