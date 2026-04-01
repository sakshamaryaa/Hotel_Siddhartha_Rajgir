import { ReactNode } from "react";
import { useTextReveal } from "@/hooks/useTextReveal";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const TextReveal = ({ children, className = "", delay = 0 }: Props) => {
  const { ref, isVisible } = useTextReveal();

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(100%)",
          opacity: isVisible ? 1 : 0,
          transition: `transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, opacity 0.9s ease ${delay}s`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default TextReveal;
