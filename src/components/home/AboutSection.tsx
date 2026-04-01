import AnimatedSection from "@/components/AnimatedSection";
import TextReveal from "@/components/TextReveal";
import lobbyImg from "@/assets/hotel-lobby.jpg";
import { useParallax } from "@/hooks/useParallax";

const AboutSection = () => {
  const { ref: imgRef, offset } = useParallax(0.15);

  return (
    <section className="section-padding bg-background">
      <div className="luxury-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image with parallax */}
          <AnimatedSection className="lg:col-span-7">
            <div ref={imgRef} className="relative overflow-hidden rounded-lg">
              <img
                src={lobbyImg}
                alt="Hotel Siddhartha grand lobby"
                className="w-full h-[500px] lg:h-[600px] object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
                width={1280}
                height={960}
                style={{ transform: `translateY(${offset}px) scale(1.05)` }}
              />
              {/* Animated accent line */}
              <div className="absolute bottom-0 left-0 h-1 bg-primary animate-line-grow" />
            </div>
          </AnimatedSection>

          {/* Text */}
          <div className="lg:col-span-5">
            <TextReveal>
              <p className="font-ui text-xs uppercase tracking-[0.3em] text-primary mb-4">
                Our Story
              </p>
            </TextReveal>
            <TextReveal delay={0.1}>
              <h2 className="font-heading text-section text-foreground mb-6">
                A Legacy of<br />Luxury
              </h2>
            </TextReveal>
            <AnimatedSection delay={0.3}>
              <p className="text-foreground-muted leading-relaxed mb-8">
                Nestled amidst the serene hills of Rajgir, Hotel Siddhartha offers an unparalleled blend 
                of ancient heritage and contemporary luxury. Every detail has been crafted to create 
                moments of pure tranquility and indulgence.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <div className="grid grid-cols-2 gap-8">
                <CountStat value="50" suffix="+" label="Luxury Rooms" />
                <CountStat value="15" suffix="+" label="Years of Service" />
                <CountStat value="4.8" suffix="" label="Guest Rating" />
                <CountStat value="24" suffix="/7" label="Concierge" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

const CountStat = ({ value, suffix, label }: { value: string; suffix: string; label: string }) => (
  <div className="group">
    <p className="font-heading text-3xl text-primary transition-transform duration-300 group-hover:scale-110 origin-left">
      {value}<span>{suffix}</span>
    </p>
    <p className="font-ui text-[10px] uppercase tracking-[0.2em] text-foreground-muted mt-1">{label}</p>
  </div>
);

export default AboutSection;
