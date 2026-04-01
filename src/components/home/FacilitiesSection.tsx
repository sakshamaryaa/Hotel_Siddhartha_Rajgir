import AnimatedSection from "@/components/AnimatedSection";
import TextReveal from "@/components/TextReveal";
import { Wifi, Car, UtensilsCrossed, ConciergeBell, Users, Clock, Droplets, Wind } from "lucide-react";

const facilities = [
  { icon: Wifi, label: "Free WiFi" },
  { icon: Car, label: "Parking" },
  { icon: UtensilsCrossed, label: "Restaurant" },
  { icon: ConciergeBell, label: "Room Service" },
  { icon: Users, label: "Family Rooms" },
  { icon: Clock, label: "24/7 Reception" },
  { icon: Droplets, label: "Hot Water" },
  { icon: Wind, label: "AC Rooms" },
];

const FacilitiesSection = () => (
  <section className="section-padding bg-background-secondary">
    <div className="luxury-container">
      <AnimatedSection className="text-center mb-20">
        <TextReveal>
          <p className="font-ui text-xs uppercase tracking-[0.3em] text-primary mb-4">Amenities</p>
        </TextReveal>
        <TextReveal delay={0.1}>
          <h2 className="font-heading text-section text-foreground">World-Class Facilities</h2>
        </TextReveal>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {facilities.map((f, i) => (
          <AnimatedSection key={f.label} delay={i * 0.07}>
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:gold-glow group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500">
                <f.icon size={24} className="text-primary group-hover:animate-icon-pulse" />
              </div>
              <p className="font-ui text-xs uppercase tracking-[0.15em] text-foreground-muted group-hover:text-foreground transition-colors duration-300">
                {f.label}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default FacilitiesSection;
