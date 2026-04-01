import AnimatedSection from "@/components/AnimatedSection";

const BookingBar = () => (
  <div className="relative z-20 -mt-16 luxury-container">
    <AnimatedSection>
      <div className="glass rounded-lg p-6 md:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 items-end">
          <Field label="Check-in" type="date" />
          <Field label="Check-out" type="date" />
          <SelectField label="Guests" options={["1 Guest", "2 Guests", "3 Guests", "4+ Guests"]} />
          <SelectField label="Room Type" options={["Standard", "Deluxe", "Family"]} />
          <button className="btn-gold h-12 w-full">Book Now</button>
        </div>
      </div>
    </AnimatedSection>
  </div>
);

const Field = ({ label, type }: { label: string; type: string }) => (
  <div>
    <label className="font-ui text-[10px] uppercase tracking-[0.2em] text-foreground-muted block mb-2">
      {label}
    </label>
    <input
      type={type}
      className="w-full h-12 bg-muted/50 border border-border rounded-md px-4 text-sm text-foreground font-body focus:outline-none focus:border-primary transition-colors"
    />
  </div>
);

const SelectField = ({ label, options }: { label: string; options: string[] }) => (
  <div>
    <label className="font-ui text-[10px] uppercase tracking-[0.2em] text-foreground-muted block mb-2">
      {label}
    </label>
    <select className="w-full h-12 bg-muted/50 border border-border rounded-md px-4 text-sm text-foreground font-body focus:outline-none focus:border-primary transition-colors appearance-none">
      {options.map((o) => (
        <option key={o} value={o}>{o}</option>
      ))}
    </select>
  </div>
);

export default BookingBar;
