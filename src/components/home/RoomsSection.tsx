import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import TextReveal from "@/components/TextReveal";
import standardImg from "@/assets/room-standard.jpg";
import deluxeImg from "@/assets/room-deluxe.jpg";
import familyImg from "@/assets/room-family.jpg";

const rooms = [
  {
    name: "Standard Room",
    price: "₹2,499",
    image: standardImg,
    features: ["King Bed", "Free WiFi", "AC", "Room Service"],
  },
  {
    name: "Deluxe Room",
    price: "₹3,999",
    image: deluxeImg,
    features: ["Mountain View", "King Bed", "Mini Bar", "Balcony"],
  },
  {
    name: "Family Room",
    price: "₹5,499",
    image: familyImg,
    features: ["2 Queen Beds", "Living Area", "Kids Menu", "Extra Space"],
  },
];

const RoomsSection = () => (
  <section className="section-padding bg-background-secondary">
    <div className="luxury-container">
      <AnimatedSection className="text-center mb-20">
        <TextReveal>
          <p className="font-ui text-xs uppercase tracking-[0.3em] text-primary mb-4">Accommodation</p>
        </TextReveal>
        <TextReveal delay={0.1}>
          <h2 className="font-heading text-section text-foreground">Our Finest Rooms</h2>
        </TextReveal>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {rooms.map((room, i) => (
          <AnimatedSection key={room.name} delay={i * 0.15}>
            <div className="group relative bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_-15px_hsla(var(--gold)/0.25)]">
              <div className="overflow-hidden h-64 relative">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  width={1280}
                  height={960}
                />
                {/* Price badge that slides in */}
                <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-4 py-2 rounded-full font-heading text-sm translate-x-20 group-hover:translate-x-0 transition-transform duration-500">
                  {room.price}
                </div>
              </div>
              <div className="p-7">
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="font-heading text-xl text-foreground group-hover:text-primary transition-colors duration-300">{room.name}</h3>
                  <span className="font-heading text-lg text-primary md:opacity-100 group-hover:opacity-100">{room.price}</span>
                </div>
                <p className="text-xs text-foreground-muted mb-1">per night</p>
                <div className="flex flex-wrap gap-2 mt-4 mb-6">
                  {room.features.map((f, fi) => (
                    <span
                      key={f}
                      className="text-[11px] font-ui uppercase tracking-wider text-foreground-muted bg-muted px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{ transitionDelay: `${fi * 0.05}s` }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <Link to="/contact" className="btn-gold w-full text-xs">
                  Book Now
                </Link>
              </div>
              {/* Bottom gold line animation */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-700" />
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default RoomsSection;
