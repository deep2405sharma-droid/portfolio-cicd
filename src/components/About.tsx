import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="glow-text text-primary">About Me</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Card */}
          <Card className="p-8 bg-card border-primary/30 hover:border-primary/60 transition-all duration-300 glow-border">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-lg bg-primary/20 border border-primary/30">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Education</h3>
                <p className="text-lg text-primary font-semibold">Bachelor of Technology</p>
                <p className="text-muted-foreground">Computer Science & Engineering</p>
              </div>
            </div>
            
            <div className="space-y-3 mt-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>MIT World Peace University, Pune</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4 text-primary" />
                <span>2021 - 2025</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Specializing in Cloud Computing, DevOps practices, and Infrastructure Automation
              </p>
            </div>
          </Card>

          {/* Bio Card */}
          <Card className="p-8 bg-card border-primary/30 hover:border-primary/60 transition-all duration-300 glow-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">Who I Am</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Passionate DevOps engineer focused on building reliable, scalable infrastructure. 
                I love automating workflows and optimizing CI/CD pipelines.
              </p>
              <p>
                My expertise spans containerization, orchestration, and cloud platforms. 
                I believe in infrastructure as code and continuous improvement.
              </p>
              <p>
                Currently exploring Kubernetes, GitOps methodologies, and cloud-native technologies 
                to build next-generation deployment solutions.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-md bg-primary/20 border border-primary/30 text-primary text-sm">
                  Problem Solver
                </span>
                <span className="px-3 py-1 rounded-md bg-secondary/20 border border-secondary/30 text-secondary text-sm">
                  Team Player
                </span>
                <span className="px-3 py-1 rounded-md bg-primary/20 border border-primary/30 text-primary text-sm">
                  Fast Learner
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
