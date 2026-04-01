import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import TextReveal from "@/components/TextReveal";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ankit Sharma",
    role: "Travel Blogger",
    text: "An absolutely breathtaking experience. The blend of luxury and the serene Rajgir landscape is unmatched. The staff treated us like royalty.",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    role: "Business Traveler",
    text: "Perfect for a peaceful retreat. The rooms are impeccable, the food is divine, and the views of the hills are magnificent. Will return soon.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "Family Vacation",
    text: "Our family had the most wonderful stay. The family rooms are spacious, the amenities are top-notch, and the location is simply stunning.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0); // -1 left, 1 right
  const prev = () => { setDirection(-1); setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1)); };
  const next = () => { setDirection(1); setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1)); };

  const t = testimonials[active];

  return (
    <section className="section-padding bg-background-secondary">
      <div className="luxury-container max-w-3xl">
        <AnimatedSection className="text-center">
          <TextReveal>
            <p className="font-ui text-xs uppercase tracking-[0.3em] text-primary mb-4">Testimonials</p>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="font-heading text-section text-foreground mb-16">Guest Experiences</h2>
          </TextReveal>

          <div className="relative">
            <Quote size={40} className="text-primary/15 mx-auto mb-6" />
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={16} className="text-primary fill-primary animate-star-pop" style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>
            <div
              key={active}
              className="animate-testimonial-slide"
              style={{ '--slide-direction': direction >= 0 ? '30px' : '-30px' } as React.CSSProperties}
            >
              <p className="font-heading text-xl md:text-2xl text-foreground/90 italic leading-relaxed mb-8">
                "{t.text}"
              </p>
              <p className="font-ui text-sm uppercase tracking-[0.15em] text-foreground">{t.name}</p>
              <p className="text-xs text-foreground-muted mt-1">{t.role}</p>
            </div>

            {/* Progress dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > active ? 1 : -1); setActive(i); }}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === active ? "w-8 bg-primary" : "w-1.5 bg-border hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:scale-110 transition-all duration-300"
              >
                <ChevronLeft size={18} className="text-foreground" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:scale-110 transition-all duration-300"
              >
                <ChevronRight size={18} className="text-foreground" />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;
