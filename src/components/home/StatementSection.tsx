import AnimatedSection from "@/components/AnimatedSection";
import TextReveal from "@/components/TextReveal";

const StatementSection = () => (
  <section className="h-screen flex items-center justify-center bg-background relative overflow-hidden">
    {/* Animated radial glow */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(var(--gold)/0.06)_0%,_transparent_70%)] animate-pulse-slow" />
    
    {/* Floating particles effect */}
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/20 animate-float"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${4 + i}s`,
          }}
        />
      ))}
    </div>

    <div className="text-center px-6 relative z-10">
      <TextReveal>
        <h2 className="font-heading text-hero text-foreground gold-text-glow">
          Not Just a Stay.
        </h2>
      </TextReveal>
      <TextReveal delay={0.3}>
        <h2 className="font-heading text-hero text-primary mt-2">
          An Experience.
        </h2>
      </TextReveal>
      <AnimatedSection delay={0.8}>
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-10" />
      </AnimatedSection>
    </div>
  </section>
);

export default StatementSection;
