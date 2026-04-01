import { useState, useCallback } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedSection from "@/components/AnimatedSection";
import HeroSection from "@/components/home/HeroSection";
import BookingBar from "@/components/home/BookingBar";
import AboutSection from "@/components/home/AboutSection";
import RoomsSection from "@/components/home/RoomsSection";
import StatementSection from "@/components/home/StatementSection";
import ParallaxSection from "@/components/home/ParallaxSection";
import FacilitiesSection from "@/components/home/FacilitiesSection";
import GalleryPreview from "@/components/home/GalleryPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import LocationSection from "@/components/home/LocationSection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const handleComplete = useCallback(() => setLoaded(true), []);

  return (
    <>
      {!loaded && <Preloader onComplete={handleComplete} />}
      <div className={loaded ? "opacity-100" : "opacity-0"}>
        <ScrollProgress />
        <Navbar />
        <HeroSection />
        <BookingBar />
        <AboutSection />
        <RoomsSection />
        <StatementSection />
        <ParallaxSection />
        <FacilitiesSection />
        <GalleryPreview />
        <TestimonialsSection />
        <LocationSection />
        <ContactSection />
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
