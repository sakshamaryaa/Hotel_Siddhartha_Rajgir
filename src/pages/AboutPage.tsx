import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedSection from "@/components/AnimatedSection";
import lobbyImg from "@/assets/hotel-lobby.jpg";
import scenicImg from "@/assets/rajgir-scenic.jpg";
import restaurantImg from "@/assets/hotel-restaurant.jpg";
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

const AboutPage = () => (
  <>
    <ScrollProgress />
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-20 bg-background">
      <div className="luxury-container text-center">
        <p className="font-ui text-xs uppercase tracking-[0.3em] text-primary mb-4">About Us</p>
        <h1 className="font-heading text-section text-foreground">Our Story</h1>
      </div>
    </section>

    {/* Story */}
    <section className="section-padding bg-background-secondary">
      <div className="luxury-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div className="overflow-hidden rounded-lg">
              <img src={lobbyImg} alt="Hotel lobby" className="w-full h-[500px] object-cover" loading="lazy" />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
              Where Heritage Meets Luxury
            </h2>
            <p className="text-foreground-muted leading-relaxed mb-6">
              Hotel Siddhartha was born from a vision to create a sanctuary where the spiritual serenity of Rajgir meets world-class hospitality. Nestled among ancient hills that once witnessed the wisdom of Buddha, our hotel stands as a testament to timeless elegance.
            </p>
            <p className="text-foreground-muted leading-relaxed">
              Every corner of our property has been thoughtfully designed to offer our guests an experience that transcends ordinary accommodation. From the warm glow of our lobby to the panoramic views from our rooms, Hotel Siddhartha is more than a destination — it's a feeling.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Parallax image */}
    <section className="relative h-[50vh] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${scenicImg})` }} />
      <div className="overlay-dark absolute inset-0" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h2 className="font-heading text-section text-foreground text-center px-6">
          The Spirit of Rajgir
        </h2>
      </div>
    </section>

    {/* Experience */}
    <section className="section-padding bg-background">
      <div className="luxury-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection delay={0.1}>
            <p className="font-ui text-xs uppercase tracking-[0.3em] text-primary mb-4">The Experience</p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">Culinary Excellence</h2>
            <p className="text-foreground-muted leading-relaxed">
              Our restaurant serves a curated blend of authentic Bihari cuisine and international flavors, crafted by experienced chefs using the freshest local ingredients. Each meal is a journey through taste, tradition, and innovation.
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="overflow-hidden rounded-lg">
              <img src={restaurantImg} alt="Restaurant" className="w-full h-[400px] object-cover" loading="lazy" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Facilities */}
    <section className="section-padding-sm bg-background-secondary">
      <div className="luxury-container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-heading text-section text-foreground">Our Facilities</h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {facilities.map((f, i) => (
            <AnimatedSection key={f.label} delay={i * 0.05}>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-border flex items-center justify-center group-hover:border-primary transition-all duration-500">
                  <f.icon size={24} className="text-primary" />
                </div>
                <p className="font-ui text-xs uppercase tracking-[0.15em] text-foreground-muted">{f.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <Footer />
    <WhatsAppButton />
  </>
);

export default AboutPage;
