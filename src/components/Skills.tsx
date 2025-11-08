import { Card, CardContent } from "@/components/ui/card";
import { 
  Code2, Database, Palette, Server, Cpu, Shield, GitBranch, 
  Terminal, Layers, Globe, Lock, Wrench, Container, Users 
} from "lucide-react";

const skillCategories = [
  // Programming Languages
  { category: "Python", icon: Code2 },
  { category: "JavaScript (ES6+)", icon: Code2 },
  { category: "Java", icon: Code2 },
  { category: "C/C++", icon: Code2 },
  { category: "SQL", icon: Database },

  // Frameworks & Libraries
  { category: "React.js", icon: Palette },
  { category: "Node.js (Express)", icon: Server },
  { category: "TensorFlow", icon: Cpu },
  { category: "PyTorch", icon: Cpu },
  { category: "Pandas/NumPy", icon: Layers },

  // Backend & APIs
  { category: "REST APIs", icon: Globe },
  { category: "Socket.io", icon: Server },
  { category: "Microservices", icon: Server },

  // Frontend
  { category: "HTML5/CSS3", icon: Palette },
  { category: "Responsive Design", icon: Palette },
  { category: "Next.js", icon: Globe },
  { category: "Storybook", icon: Palette },

  // Databases
  { category: "PostgreSQL", icon: Database },
  { category: "MySQL", icon: Database },
  { category: "MongoDB", icon: Database },

  // Security
  { category: "JWT Auth", icon: Lock },
  { category: "RBAC", icon: Shield },
  { category: "Security Practices", icon: Shield },

  // Tools & DevOps
  { category: "Git", icon: GitBranch },
  { category: "Docker", icon: Container },
  { category: "Agile", icon: Users },
  { category: "CI/CD", icon: Terminal }
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