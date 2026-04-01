import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import standardImg from "@/assets/room-standard.jpg";
import deluxeImg from "@/assets/room-deluxe.jpg";
import familyImg from "@/assets/room-family.jpg";

const rooms = [
  {
    name: "Standard Room",
    price: "₹2,499",
    image: standardImg,
    description: "A cozy retreat with all essential comforts for a restful stay.",
    features: ["King Bed", "Free WiFi", "AC", "Room Service", "Hot Water", "TV"],
  },
  {
    name: "Deluxe Room",
    price: "₹3,999",
    image: deluxeImg,
    description: "Elevated luxury with stunning mountain views and premium amenities.",
    features: ["Mountain View", "King Bed", "Mini Bar", "Balcony", "Free WiFi", "AC"],
  },
  {
    name: "Family Room",
    price: "₹5,499",
    image: familyImg,
    description: "Spacious accommodation designed for families seeking comfort and togetherness.",
    features: ["2 Queen Beds", "Living Area", "Kids Menu", "Extra Space", "Free WiFi", "AC"],
  },
];

const RoomsPage = () => (
  <>
    <ScrollProgress />
    <Navbar />

    {/* Hero banner */}
    <section className="pt-32 pb-20 bg-background">
      <div className="luxury-container text-center">
        <p className="font-ui text-xs uppercase tracking-[0.3em] text-primary mb-4">Accommodation</p>
        <h1 className="font-heading text-section text-foreground">Our Rooms</h1>
      </div>
    </section>

    {/* Rooms list */}
    <section className="section-padding-sm bg-background-secondary">
      <div className="luxury-container space-y-24">
        {rooms.map((room, i) => (
          <AnimatedSection key={room.name}>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:direction-rtl" : ""}`}>
              <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                <p className="font-ui text-xs uppercase tracking-[0.3em] text-primary mb-3">
                  From {room.price} / night
                </p>
                <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">{room.name}</h2>
                <p className="text-foreground-muted leading-relaxed mb-6">{room.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {room.features.map((f) => (
                    <span key={f} className="text-[11px] font-ui uppercase tracking-wider text-foreground-muted bg-muted px-3 py-1.5 rounded-full">
                      {f}
                    </span>
                  ))}
                </div>
                <Link to="/contact" className="btn-gold">Book This Room</Link>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>

    <Footer />
    <WhatsAppButton />
  </>
);

export default RoomsPage;
