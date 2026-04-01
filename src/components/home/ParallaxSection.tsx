import { useParallax } from "@/hooks/useParallax";
import TextReveal from "@/components/TextReveal";
import scenicImg from "@/assets/rajgir-scenic.jpg";

const ParallaxSection = () => {
  const { ref, offset } = useParallax(0.2);

  return (
    <section ref={ref} className="relative h-[70vh] overflow-hidden">
      <div
        className="absolute inset-[-10%] bg-cover bg-center"
        style={{
          backgroundImage: `url(${scenicImg})`,
          transform: `translateY(${offset}px)`,
          willChange: "transform",
        }}
      />
      <div className="overlay-dark absolute inset-0" />
      <div className="relative z-10 flex items-center justify-center h-full luxury-container text-center">
        <div>
          <TextReveal>
            <p className="font-ui text-xs uppercase tracking-[0.4em] text-primary mb-4">The Destination</p>
          </TextReveal>
          <TextReveal delay={0.2}>
            <h2 className="font-heading text-section text-foreground max-w-2xl mx-auto">
              Where Ancient Wisdom Meets Modern Comfort
            </h2>
          </TextReveal>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;
