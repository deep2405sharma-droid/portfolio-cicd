import { Terminal, Code2, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(220_20%_20%/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(220_20%_20%/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: "1s" }}></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center animate-slide-up">
        {/* Terminal prompt */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-primary/30 mb-8 glow-border">
          <Terminal className="w-4 h-4 text-primary" />
          <span className="terminal-text text-sm">ojas@portfolio:~$</span>
          <span className="text-foreground/80 text-sm">./init_profile.sh</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-foreground">Hi, I'm a</span>
          <br />
          <span className="glow-text text-primary">DevOps Engineer</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
          BTech CSE Student at MIT-WPU Pune
        </p>

        <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
          Building scalable infrastructure, automating deployments, and crafting CI/CD pipelines
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border font-semibold"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Code2 className="mr-2 h-5 w-5" />
            View Projects
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary"
            asChild
          >
            <a href="/Ojas_Jain_Resume.pdf" download="Ojas_Jain_Resume.pdf">
              Download CV
            </a>
          </Button>
        </div>

        {/* Social links */}
        <div className="flex gap-4 justify-center">
          <a 
            href="https://github.com/ojas-jain-prog" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 glow-border"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/ojasjain018" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 glow-border"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="mailto:ojasjain018@gmail.com"
            className="p-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 glow-border"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
