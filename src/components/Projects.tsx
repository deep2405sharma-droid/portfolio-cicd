import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Terminal } from "lucide-react";

const projects = [
  {
    title: "Docker Orchestration using Kubernetes",
    description: "Container orchestration and management using Kubernetes for deploying, scaling, and managing containerized applications.",
    tech: ["Docker", "Kubernetes", "Container Orchestration"],
    github: "/Docker_Kubernetes.pdf",
    demo: "/Docker_Kubernetes.pdf",
    status: "Completed"
  },
  {
    title: "CI/CD Automation using Jenkins",
    description: "Automated continuous integration and deployment pipeline using Jenkins for streamlined software delivery and testing.",
    tech: ["Jenkins", "CI/CD", "Automation", "DevOps"],
    github: "/Jenkins_CICD.pdf",
    demo: "/Jenkins_CICD.pdf",
    status: "Completed"
  },
  {
    title: "RDS (Relational Database Service)",
    description: "Cloud-based relational database service implementation for scalable and managed database solutions on AWS.",
    tech: ["AWS RDS", "Database", "Cloud", "SQL"],
    github: "/RDS_Project.pdf",
    demo: "/RDS_Project.pdf",
    status: "Completed"
  },
  {
    title: "S3 (Simple Storage Service)",
    description: "Object storage service implementation using AWS S3 for scalable, secure, and durable cloud storage solutions.",
    tech: ["AWS S3", "Cloud Storage", "Object Storage"],
    github: "/S3_Project.pdf",
    demo: "/S3_Project.pdf",
    status: "Completed"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="glow-text text-primary">Featured Projects</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 group animate-slide-up glow-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/20 border border-primary/30 group-hover:animate-glow-pulse">
                    <Terminal className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary/20 text-primary border border-primary/30 mt-1">
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i}
                    className="text-xs px-2 py-1 rounded bg-muted border border-border text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4 border-t border-border">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex-1 border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button 
                  size="sm"
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                  asChild
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
