import { Card, CardContent } from "@/components/ui/card";
import { 
  Code2, Database, Palette, Server, Cpu, Shield, GitBranch, 
  Terminal, Layers, Globe, Lock, Wrench, Container, Users 
} from "lucide-react";

const skillCategories = [
  // Programming Languages
  { category: "Python", icon: Code2 },
  { category: "JavaScript (ES6+)", icon: Code2 },
  { category: "TypeScript", icon: Code2 },
  { category: "Java", icon: Code2 },
  { category: "C/C++", icon: Code2 },
  { category: "SQL", icon: Database },

  // Backend & APIs
  { category: "Node.js (Express)", icon: Server },
  { category: "FastAPI", icon: Server },
  { category: "REST APIs", icon: Globe },
  { category: "WebSockets (Socket.IO)", icon: Server },
  { category: "Microservices", icon: Server },
  { category: "Multithreading", icon: Cpu },
  { category: "Caching", icon: Layers },
  { category: "Rate Limiting", icon: Shield },

  // Frontend
  { category: "React.js", icon: Palette },
  { category: "HTML5", icon: Palette },
  { category: "CSS3", icon: Palette },
  { category: "Tailwind CSS", icon: Palette },

  // Databases
  { category: "MongoDB", icon: Database },
  { category: "MySQL", icon: Database },

  // Security
  { category: "JWT Authentication", icon: Lock },
  { category: "OAuth", icon: Shield },
  { category: "Role-Based Access Control (RBAC)", icon: Shield },
  { category: "CORS", icon: Shield },
  { category: "Input Validation", icon: Shield },

  // AI & ML
  { category: "TensorFlow", icon: Cpu },
  { category: "PyTorch", icon: Cpu },
  { category: "LSTM Forecasting", icon: Cpu },
  { category: "RAG Pipelines", icon: Layers },
  { category: "Gemini/OpenAI APIs", icon: Cpu },

  // Infrastructure & Networking
  { category: "Linux", icon: Terminal },
  { category: "Docker", icon: Container },
  { category: "Git", icon: GitBranch },
  { category: "CI/CD", icon: Terminal },
  { category: "TCP/IP", icon: Globe },
  { category: "OSPF", icon: Globe },
  { category: "BGP", icon: Globe }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="font-normal">Skills</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 animate-slide-up">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                // Added hover:bg-black and hover:text-white for the requested effect
                className="hover:shadow-lg transition-all duration-300 hover:scale-[1.05] border-2 bg-card hover:bg-black hover:text-white group"
              >
                <CardContent className="pt-6 pb-6 text-center flex flex-col items-center justify-center h-full min-h-[120px]">
                  {/* Icon also needs to handle the hover state if it has specific colors, 
                      but here it inherits text color, so it will turn white automatically. */}
                  <div className="w-12 h-12 mb-3 flex items-center justify-center">
                    <Icon className="w-8 h-8 transition-transform group-hover:scale-110" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-bold">{category.category}</h3>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};