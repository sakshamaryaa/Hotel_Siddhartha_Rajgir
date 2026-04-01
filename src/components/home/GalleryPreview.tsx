import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import TextReveal from "@/components/TextReveal";
import lobbyImg from "@/assets/hotel-lobby.jpg";
import restaurantImg from "@/assets/hotel-restaurant.jpg";
import corridorImg from "@/assets/hotel-corridor.jpg";
import deluxeImg from "@/assets/room-deluxe.jpg";
import scenicImg from "@/assets/rajgir-scenic.jpg";
import heroImg from "@/assets/hero-hotel.jpg";
import MagneticButton from "@/components/MagneticButton";

const images = [
  { src: lobbyImg, alt: "Grand lobby", span: "col-span-2 row-span-2" },
  { src: restaurantImg, alt: "Fine dining restaurant", span: "" },
  { src: corridorImg, alt: "Luxury corridor", span: "" },
  { src: deluxeImg, alt: "Deluxe room", span: "col-span-2" },
  { src: scenicImg, alt: "Rajgir scenic view", span: "" },
  { src: heroImg, alt: "Hotel exterior", span: "" },
];

const GalleryPreview = () => (
  <section className="section-padding bg-background">
    <div className="luxury-container">
      <AnimatedSection className="text-center mb-20">
        <TextReveal>
          <p className="font-ui text-xs uppercase tracking-[0.3em] text-primary mb-4">Gallery</p>
        </TextReveal>
        <TextReveal delay={0.1}>
          <h2 className="font-heading text-section text-foreground">Visual Journey</h2>
        </TextReveal>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
        {images.map((img, i) => (
          <AnimatedSection key={i} delay={i * 0.08} className={img.span}>
            <div className="relative overflow-hidden rounded-lg h-full group cursor-pointer">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-500" />
              {/* Hover label */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="font-ui text-xs uppercase tracking-[0.2em] text-foreground translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {img.alt}
                </span>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center mt-12">
        <MagneticButton className="inline-block">
          <Link to="/gallery" className="btn-outline-gold">
            View Full Gallery
          </Link>
        </MagneticButton>
      </AnimatedSection>
    </div>
  </section>
);

export default GalleryPreview;
