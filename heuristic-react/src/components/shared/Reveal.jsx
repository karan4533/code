import { useReveal } from "../../hooks/useReveal";

export function Reveal({ children, delay = 0 }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        animation: `slideUpLanding .8s ease-out ${delay}s forwards`,
      }}
    >
      {children}
    </div>
  );
}
