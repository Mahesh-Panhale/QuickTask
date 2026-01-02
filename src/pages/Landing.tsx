import { CheckCircle2, Zap, Shield, Clock, Users, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen gradient-hero">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">QuickTask</span>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" onClick={() => navigate("/auth")}>
                Login
              </Button>
              <Button variant="hero" onClick={() => navigate("/auth?mode=signup")}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Smart Task Management
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Organize Your Day,
              <br />
              <span className="text-primary">Achieve More</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              QuickTask helps you manage daily tasks efficiently with a secure, 
              intuitive dashboard. Create, track, and complete tasks with ease.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" onClick={() => navigate("/auth?mode=signup")}>
                Start Free Today
              </Button>
           </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Everything You Need
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Powerful features to help you stay organized and productive
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: CheckCircle2,
                title: "Task Management",
                description: "Create, edit, and organize tasks with an intuitive interface",
              },
              {
                icon: Shield,
                title: "Secure Access",
                description: "JWT-based authentication keeps your data protected",
              },
              {
                icon: Clock,
                title: "Status Tracking",
                description: "Track pending and completed tasks at a glance",
              },
              {
                icon: Zap,
                title: "Smart Filters",
                description: "Search and filter tasks to find what you need quickly",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: Why Choose QuickTask? */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why QuickTask Matters
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              In a world full of distractions, staying focused and productive is harder than ever. 
              QuickTask is built to give you back control of your time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Reduce Overwhelm",
                description: "Turn chaotic to-do lists into clear, actionable steps so you always know what to do next.",
              },
              {
                icon: Star,
                title: "Build Better Habits",
                description: "Consistent task tracking helps you develop discipline and achieve long-term goals.",
              },
              {
                icon: ArrowRight,
                title: "Reclaim Your Time",
                description: "Spend less time planning and worrying, more time doing what truly matters to you.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-background border border-border hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 2: What Users Say (Testimonials) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Loved by Thousands
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              See why productive people choose QuickTask every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Mahesh Panhale",
                role: "Freelance Designer",
                quote: "QuickTask transformed how I manage client projects. I finally feel in control of my workload.",
              },
              {
                name: "Ekesh Patil",
                role: "Software Engineer",
                quote: "Simple, fast, and secure. It's the only task app I’ve stuck with for more than a year.",
              },
              {
                name: "Yash Parvate",
                role: "Student & Creator",
                quote: "Helped me balance studies, side projects, and personal goals without burning out.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card border border-border shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="relative rounded-3xl bg-primary p-8 sm:p-12 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-glow opacity-50" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
                Explore the Project Inside Out
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
                Curious about how QuickTask works under the hood? Dive deeper into the complete architecture, tech stack, authentication flow, component structure, and development decisions. One click reveals everything—from the technologies we chose to how data flows seamlessly across the app.
              </p>
              <Button 
                variant="secondary" 
                size="xl"
                onClick={() => navigate("/documentation")}
                className="bg-background text-foreground hover:bg-background/90"
              >
              Explore Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground">QuickTask</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2026 QuickTask. All rights reserved.
            </p>
            
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;