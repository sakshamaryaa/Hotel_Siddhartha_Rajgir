import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedSection from "@/components/AnimatedSection";
import lobbyImg from "@/assets/hotel-lobby.jpg";
import restaurantImg from "@/assets/hotel-restaurant.jpg";
import corridorImg from "@/assets/hotel-corridor.jpg";
import deluxeImg from "@/assets/room-deluxe.jpg";
import scenicImg from "@/assets/rajgir-scenic.jpg";
import heroImg from "@/assets/hero-hotel.jpg";
import standardImg from "@/assets/room-standard.jpg";
import familyImg from "@/assets/room-family.jpg";

const images = [
  { src: lobbyImg, alt: "Grand lobby" },
  { src: restaurantImg, alt: "Fine dining restaurant" },
  { src: corridorImg, alt: "Luxury corridor" },
  { src: deluxeImg, alt: "Deluxe room" },
  { src: scenicImg, alt: "Rajgir scenic view" },
  { src: heroImg, alt: "Hotel exterior" },
  { src: standardImg, alt: "Standard room" },
  { src: familyImg, alt: "Family room" },
];

const spans = [
  "col-span-2 row-span-2",
  "",
  "",
  "col-span-2",
  "",
  "",
  "",
  "col-span-2 row-span-2",
];

const GalleryPage = () => (
  <>
    <ScrollProgress />
    <Navbar />

    <section className="pt-32 pb-20 bg-background">
      <div className="luxury-container text-center">
        <p className="font-ui text-xs uppercase tracking-[0.3em] text-primary mb-4">Gallery</p>
        <h1 className="font-heading text-section text-foreground">Visual Journey</h1>
      </div>
    </section>

    <section className="section-padding-sm bg-background-secondary">
      <div className="luxury-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((img, i) => (
            <AnimatedSection key={i} delay={i * 0.06} className={spans[i] || ""}>
              <div className="relative overflow-hidden rounded-lg h-full group cursor-pointer">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500 flex items-end p-4">
                  <span className="text-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-ui uppercase tracking-wider text-xs">
                    {img.alt}
                  </span>
                </div>
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

export default GalleryPage;
