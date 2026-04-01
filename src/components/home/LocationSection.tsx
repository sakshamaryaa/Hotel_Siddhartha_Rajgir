import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Phone, Mail } from "lucide-react";

const LocationSection = () => (
  <section className="section-padding bg-background">
    <div className="luxury-container">
      <AnimatedSection className="text-center mb-20">
        <p className="font-ui text-xs uppercase tracking-[0.3em] text-primary mb-4">Location</p>
        <h2 className="font-heading text-section text-foreground">Find Us</h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <AnimatedSection>
          <div className="rounded-lg overflow-hidden h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14456.123456789!2d85.4!3d25.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDAyJzI0LjAiTiA4NcKwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hotel Siddhartha Location"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="flex flex-col justify-center">
          <h3 className="font-heading text-2xl text-foreground mb-8">Hotel Siddhartha</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin size={20} className="text-primary mt-1 shrink-0" />
              <div>
                <p className="text-foreground text-sm">Near Venuvan, Rajgir</p>
                <p className="text-foreground-muted text-sm">Bihar 803116, India</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone size={20} className="text-primary shrink-0" />
              <p className="text-foreground text-sm">+91 98765 43210</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail size={20} className="text-primary shrink-0" />
              <p className="text-foreground text-sm">info@hotelsiddhartha.com</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default LocationSection;
