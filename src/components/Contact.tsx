import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="glow-text text-primary">Get In Touch</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full"></div>

        <Card className="p-8 md:p-12 bg-card border-primary/30 glow-border">
          <div className="text-center mb-8">
            <p className="text-lg text-muted-foreground">
              Interested in collaborating or have a project in mind? Let's connect!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 border border-border">
              <div className="p-3 rounded-lg bg-primary/20 border border-primary/30">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Email</div>
                <div className="text-foreground font-medium">ojasjain018@gmail.com</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 border border-border">
              <div className="p-3 rounded-lg bg-primary/20 border border-primary/30">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Location</div>
                <div className="text-foreground font-medium">Pune, Maharashtra</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border font-semibold"
              asChild
            >
              <a href="mailto:ojasjain018@gmail.com">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </a>
            </Button>
          </div>
        </Card>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-primary/30 mb-4">
            <span className="terminal-text text-sm">ojas@portfolio:~$</span>
            <span className="text-foreground/80 text-sm">./thank_you.sh</span>
          </div>
          <p className="text-muted-foreground text-sm">
            Built with React, TypeScript & Tailwind CSS
          </p>
          <p className="text-muted-foreground/60 text-xs mt-2">
            © 2025 DevOps Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
