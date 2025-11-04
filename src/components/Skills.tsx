import { Card } from "@/components/ui/card";
import { 
  Container, 
  Server, 
  GitBranch, 
  Cloud, 
  Database, 
  Terminal,
  Workflow,
  Shield
} from "lucide-react";

const skills = [
  {
    category: "Containerization",
    icon: Container,
    items: ["Docker", "Kubernetes", "Helm", "Docker Compose"],
    color: "primary"
  },
  {
    category: "CI/CD",
    icon: GitBranch,
    items: ["Jenkins", "GitHub Actions", "GitLab CI", "ArgoCD"],
    color: "secondary"
  },
  {
    category: "Cloud Platforms",
    icon: Cloud,
    items: ["AWS", "Azure", "Google Cloud", "DigitalOcean"],
    color: "primary"
  },
  {
    category: "Infrastructure as Code",
    icon: Workflow,
    items: ["Terraform", "Ansible", "CloudFormation", "Pulumi"],
    color: "secondary"
  },
  {
    category: "Monitoring",
    icon: Server,
    items: ["Prometheus", "Grafana", "ELK Stack", "Datadog"],
    color: "primary"
  },
  {
    category: "Scripting",
    icon: Terminal,
    items: ["Bash", "Python", "PowerShell", "Go"],
    color: "secondary"
  },
  {
    category: "Databases",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
    color: "primary"
  },
  {
    category: "Security",
    icon: Shield,
    items: ["Vault", "SonarQube", "Trivy", "OWASP"],
    color: "secondary"
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="glow-text text-primary">Tech Arsenal</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card 
                key={index} 
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 group animate-slide-up glow-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${
                    skill.color === 'primary' 
                      ? 'bg-primary/20 border border-primary/30' 
                      : 'bg-secondary/20 border border-secondary/30'
                  } group-hover:animate-glow-pulse`}>
                    <Icon className={`w-5 h-5 ${
                      skill.color === 'primary' ? 'text-primary' : 'text-secondary'
                    }`} />
                  </div>
                  <h3 className="font-bold text-foreground">{skill.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span 
                      key={i}
                      className="text-xs px-2 py-1 rounded bg-muted border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { label: "Projects", value: "15+" },
            { label: "Technologies", value: "30+" },
            { label: "Deployments", value: "100+" },
            { label: "Uptime", value: "99.9%" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-lg bg-card border border-primary/30 glow-border"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 glow-text">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
