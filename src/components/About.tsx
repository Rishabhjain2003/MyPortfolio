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

            <p className="text-muted-foreground mb-6 leading-relaxed text-justify">
              I build backend systems that replace manual processes and fix the ones that break. At Philips, I traced a data-integrity bug in a service-entitlement pipeline to flawed join and status-matching logic, rewrote it, and validated the fix with SQL regression tests. That recovered 4,500+ misclassified records and removed 450K+ spurious join matches. I also repaired a failing AWS Elastic Beanstalk deployment pipeline, so automated releases worked again. At C-DOT, I engineered a configuration automation tool that cut 4G node configuration time by 60%. At Grid Controller of India, I built a national-scale LSTM forecasting pipeline with 2× the accuracy of the legacy model. On my own time, I build distributed systems such as NovaTrade (event-driven trading platform) and TechBossAI (a VS Code coding agent). I’m pursuing an M.Tech in CSE at NIT Bhopal and have solved 700+ LeetCode problems.
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
                        Maulana Azad National Institute of Technology (NIT Bhopal) • 2025–2027
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
                        G.B. Pant Government Engineering College, Delhi • 2021–2025
                      </p>
                      <p className="text-xs font-medium">🏆 Academic Merit Scholarship — 2 consecutive years</p>
                      <p className="text-xs font-medium">🥇 1st Prize — Delhi Government Ideathon 2022</p>
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
