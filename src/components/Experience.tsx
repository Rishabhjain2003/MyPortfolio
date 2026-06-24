import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    company: "Curiate Solutions",
    logo: "/logos/curiate.png",
    role: "SDE Intern (Remote)",
    period: "Oct 2025 - Dec 2025",
    description:
      "Built a guest checkout flow using React and Razorpay with cron-based abandoned cart recovery, cutting cart abandonment by 35%. Engineered a Headless CMS pipeline via the Notion API enabling non-technical teams to publish SEO-ready content without code deployments."
  },
  {
    company: "Centre for Development of Telematics (C-DOT)",
    logo: "/logos/cdot.png",
    role: "SDE Intern",
    period: "Jan 2025 - Jul 2025",
    description:
      "Built CAT (Python, FastAPI, Pandas) to generate 4G node .cfg files programmatically, cutting configuration time by 60% and deployment errors by 30%. Developed DPS (MERN Stack) for node versioning and parameter dependency tracking, with automated pushes to the TCS central repository. Designed a multi-tier rollback workflow enabling field teams to flag errors and revert base configurations, compressing resolution time during critical node updates."
  },
  {
    company: "Grid Controller of India Ltd. (Grid-India)",
    logo: "/logos/grid-india.png",
    role: "Intern",
    period: "Aug 2024 - Nov 2024",
    description:
      "Developed a national-scale load-forecasting pipeline using ANNs with LSTM layers, ingesting telemetry from 615+ weather stations and engineering 8 features from high-dimensional inputs — achieving 2× higher accuracy over the legacy model. Formulated day-ahead and intraday R1 prediction workflows to give grid operators precise consumption forecasts for resource allocation."
  },
  {
    company: "Canadian Fellows",
    logo: "/logos/canadian-fellows.png",
    role: "Freelance Software Engineer",
    period: "Nov 2023 - Jul 2024",
    description:
      "Built Node.js/Express REST APIs for lead capture, booking, and contact workflows with payload validation and rate limiting. Designed MongoDB schemas with targeted indexing, reducing read latency by 35%. Implemented JWT + RBAC auth with bcrypt and audit logging. Integrated third-party email and booking services via secure API wrappers with centralized secret management."
  },
  {
    company: "The High Vault Security",
    logo: "/logos/high-vault.png",
    role: "Freelance Software Engineer",
    period: "Jan 2023 - Oct 2023",
    description:
      "Built versioned REST APIs (Node.js) for enquiries, quotes, and scheduling, documented with OpenAPI spec. Optimized PostgreSQL schemas with composite indexes and prepared statements, reducing endpoint latency by ~50%. Implemented JWT + RBAC with throttling and CORS controls. Structured logging cut incident resolution time by 45%; managed database migrations during deployments."
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