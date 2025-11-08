import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Illustration */}
          <div className="relative animate-slide-up flex items-center justify-center lg:justify-end">
          <img 
            src="/aboutme-illustration.svg" 
            alt="Developer Illustration"
            className="w-full max-w-2xl h-auto"
          />
        </div>

          {/* Right - Content */}
          <div className="animate-slide-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              About <span className="font-normal">Me</span>
            </h2>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate Full-Stack Developer & ML Engineer with expertise in building scalable web applications 
              and implementing machine learning solutions. Currently pursuing M.Tech in Computer Science at MANIT Bhopal, 
              I combine academic knowledge with hands-on experience from multiple internships and freelance projects.
            </p>

            <div className="space-y-4">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-foreground text-background">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">M.Tech in Computer Science</h3>
                      <p className="text-sm text-muted-foreground">
                        Maulana Azad National Institute of Technology, Bhopal • 2027
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-foreground text-background">
                      <Award className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">B.Tech in Computer Science</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        G.B. Pant Government Engineering College, Delhi • 2025
                      </p>
                      <p className="text-xs font-medium">🏆 Academic Scholarship (2 consecutive years)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
