import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-background-secondary border-t border-border">
    <div className="luxury-container section-padding-sm">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Brand */}
        <div>
          <h3 className="font-heading text-3xl text-primary mb-4">Hotel Siddhartha</h3>
          <p className="text-foreground-muted text-sm leading-relaxed max-w-xs">
            A luxury retreat nestled in the ancient hills of Rajgir. Where heritage meets modern comfort.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-ui text-xs uppercase tracking-[0.2em] text-primary mb-6">Quick Links</h4>
          <div className="flex flex-col gap-3">
            {["Home", "Rooms", "Gallery", "About", "Contact"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-foreground-muted text-sm hover:text-primary transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-ui text-xs uppercase tracking-[0.2em] text-primary mb-6">Contact</h4>
          <div className="flex flex-col gap-4 text-sm text-foreground-muted">
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
              <span>Near Venuvan, Rajgir, Bihar 803116, India</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-primary shrink-0" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-primary shrink-0" />
              <span>info@hotelsiddhartha.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-16 pt-8 text-center">
        <p className="text-foreground-muted text-xs tracking-wider">
          © 2026 Hotel Siddhartha. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
