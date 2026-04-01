import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const ContactPage = () => (
  <>
    <ScrollProgress />
    <Navbar />

    <section className="pt-32 pb-20 bg-background">
      <div className="luxury-container text-center">
        <p className="font-ui text-xs uppercase tracking-[0.3em] text-primary mb-4">Contact</p>
        <h1 className="font-heading text-section text-foreground">Get in Touch</h1>
      </div>
    </section>

    <section className="section-padding bg-background-secondary">
      <div className="luxury-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <AnimatedSection>
            <h2 className="font-heading text-2xl text-foreground mb-8">Send us a message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="font-ui text-[10px] uppercase tracking-[0.2em] text-foreground-muted block mb-2">Name</label>
                <input type="text" className="w-full h-12 bg-muted/50 border border-border rounded-lg px-4 text-sm text-foreground font-body focus:outline-none focus:border-primary transition-colors" placeholder="Your Name" />
              </div>
              <div>
                <label className="font-ui text-[10px] uppercase tracking-[0.2em] text-foreground-muted block mb-2">Phone</label>
                <input type="tel" className="w-full h-12 bg-muted/50 border border-border rounded-lg px-4 text-sm text-foreground font-body focus:outline-none focus:border-primary transition-colors" placeholder="+91 XXXXX XXXXX" />
              </div>
              <div>
                <label className="font-ui text-[10px] uppercase tracking-[0.2em] text-foreground-muted block mb-2">Email</label>
                <input type="email" className="w-full h-12 bg-muted/50 border border-border rounded-lg px-4 text-sm text-foreground font-body focus:outline-none focus:border-primary transition-colors" placeholder="your@email.com" />
              </div>
              <div>
                <label className="font-ui text-[10px] uppercase tracking-[0.2em] text-foreground-muted block mb-2">Message</label>
                <textarea rows={5} className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground font-body focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Your message..." />
              </div>
              <button type="submit" className="btn-gold w-full">Send Message</button>
            </form>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="tel:+919876543210" className="btn-outline-gold flex-1 flex items-center justify-center gap-2">
                <Phone size={16} /> Call Us
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-outline-gold flex-1 flex items-center justify-center gap-2">
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </AnimatedSection>

          {/* Map + Info */}
          <AnimatedSection delay={0.2}>
            <h2 className="font-heading text-2xl text-foreground mb-8">Find Us</h2>
            <div className="rounded-lg overflow-hidden h-[350px] mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14456.123456789!2d85.4!3d25.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDAyJzI0LjAiTiA4NcKwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Hotel Siddhartha Location"
              />
            </div>
            <div className="space-y-5">
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

    <Footer />
    <WhatsAppButton />
  </>
);

export default ContactPage;
