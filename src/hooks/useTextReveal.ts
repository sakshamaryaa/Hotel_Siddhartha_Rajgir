import { useScrollAnimation } from "./useScrollAnimation";

export const useTextReveal = (threshold = 0.2) => {
  const { ref, isVisible } = useScrollAnimation(threshold);
  return { ref, isVisible };
};
