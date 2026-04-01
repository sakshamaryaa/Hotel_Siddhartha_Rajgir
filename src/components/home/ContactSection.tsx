import AnimatedSection from "@/components/AnimatedSection";
import { Phone, MessageCircle } from "lucide-react";

const ContactSection = () => (
  <section className="section-padding bg-background-secondary">
    <div className="luxury-container max-w-2xl">
      <AnimatedSection className="text-center mb-16">
        <p className="font-ui text-xs uppercase tracking-[0.3em] text-primary mb-4">Get in Touch</p>
        <h2 className="font-heading text-section text-foreground">Contact Us</h2>
      </AnimatedSection>

      <AnimatedSection>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="font-ui text-[10px] uppercase tracking-[0.2em] text-foreground-muted block mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full h-12 bg-muted/50 border border-border rounded-lg px-4 text-sm text-foreground font-body focus:outline-none focus:border-primary transition-colors"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="font-ui text-[10px] uppercase tracking-[0.2em] text-foreground-muted block mb-2">
              Phone
            </label>
            <input
              type="tel"
              className="w-full h-12 bg-muted/50 border border-border rounded-lg px-4 text-sm text-foreground font-body focus:outline-none focus:border-primary transition-colors"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>
          <div>
            <label className="font-ui text-[10px] uppercase tracking-[0.2em] text-foreground-muted block mb-2">
              Message
            </label>
            <textarea
              rows={5}
              className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground font-body focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="Your message..."
            />
          </div>
          <button type="submit" className="btn-gold w-full">
            Send Message
          </button>
        </form>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a href="tel:+919876543210" className="btn-outline-gold flex-1 flex items-center justify-center gap-2">
            <Phone size={16} /> Call Us
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold flex-1 flex items-center justify-center gap-2"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ContactSection;
