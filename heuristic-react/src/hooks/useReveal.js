import { useEffect, useRef } from "react";

export function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          e.target.style.animation = getComputedStyle(e.target).animation;
        }
      },
      { threshold: 0 }
    );
    if (ref.current) o.observe(ref.current);
    return () => o && ref.current && o.unobserve(ref.current);
  }, []);
  return ref;
}
