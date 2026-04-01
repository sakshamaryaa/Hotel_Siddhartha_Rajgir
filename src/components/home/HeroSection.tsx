import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-hotel.jpg";
import TextReveal from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";

const HeroSection = () => (
  <section className="relative h-screen overflow-hidden flex items-center justify-center">
    {/* Background with subtle zoom */}
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt="Hotel Siddhartha luxury exterior at night"
        className="w-full h-full object-cover animate-hero-zoom"
        width={1920}
        height={1080}
      />
      <div className="overlay-hero absolute inset-0" />
    </div>

    {/* Content */}
    <div className="relative z-10 text-center px-6 max-w-4xl">
      <TextReveal delay={0.3}>
        <p className="font-ui text-xs uppercase tracking-[0.4em] text-primary mb-6">
          Rajgir, Bihar
        </p>
      </TextReveal>
      <TextReveal delay={0.5}>
        <h1 className="font-heading text-hero text-foreground mb-6">
          Hotel Siddhartha
        </h1>
      </TextReveal>
      <TextReveal delay={0.7}>
        <p className="text-hero-sub text-foreground/60 font-light mb-12">
          Not Just a Stay. An Experience.
        </p>
      </TextReveal>
      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up stagger-5">
        <MagneticButton>
          <Link to="/contact" className="btn-gold">
            Book Your Stay
          </Link>
        </MagneticButton>
        <MagneticButton>
          <Link to="/rooms" className="btn-outline-gold">
            Explore Rooms
          </Link>
        </MagneticButton>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/40 animate-fade-up" style={{ animationDelay: "1.2s" }}>
      <span className="font-ui text-[10px] uppercase tracking-[0.3em]">Scroll</span>
      <ChevronDown size={18} className="animate-bounce" />
    </div>
  </section>
);

export default HeroSection;
