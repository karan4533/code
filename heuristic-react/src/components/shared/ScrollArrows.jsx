import { useEffect, useState } from "react";
import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";

export function ScrollArrows() {
  const { isMobile, isSmallMobile } = useViewport();
  const [scrollState, setScrollState] = useState({
    hasScrollablePage: false,
    nextDirection: "down",
  });

  useEffect(() => {
    const updateScrollState = () => {
      const doc = document.documentElement;
      const top = window.scrollY || doc.scrollTop || 0;
      const maxScroll = Math.max(doc.scrollHeight - window.innerHeight, 0);
      const threshold = 24;
      const progress = maxScroll > 0 ? top / maxScroll : 0;

      let nextDirection = "down";
      if (top <= threshold) {
        nextDirection = "down";
      } else if (maxScroll - top <= threshold) {
        nextDirection = "up";
      } else {
        nextDirection = progress >= 0.5 ? "up" : "down";
      }

      setScrollState({
        hasScrollablePage: maxScroll > threshold,
        nextDirection,
      });
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  if (!scrollState.hasScrollablePage) return null;

  const handleScroll = (event) => {
    if (scrollState.nextDirection === "up") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    window.scrollBy({
      top: Math.max(window.innerHeight * 0.82, 320),
      behavior: "smooth",
    });
  };

  const controlSize = isSmallMobile ? 44 : isMobile ? 46 : 50;

  const buttonStyle = {
    width: controlSize,
    height: controlSize,
    borderRadius: 999,
    border: "1px solid rgba(30,26,16,.2)",
    background: "rgba(255,255,255,.9)",
    color: T.ink,
    cursor: "pointer",
    fontFamily: font.sans,
    fontSize: isSmallMobile ? 17 : 19,
    fontWeight: 700,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 14px 26px rgba(18,14,8,.2)",
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",
    transition: "all .2s ease",
  };

  return (
    <div
      style={{
        position: "fixed",
        right: isSmallMobile ? 12 : isMobile ? 14 : 22,
        bottom: isSmallMobile ? 14 : isMobile ? 18 : 22,
        zIndex: 260,
      }}
    >
      <button
        type="button"
        aria-label={scrollState.nextDirection === "up" ? "Scroll to top" : "Scroll down"}
        onClick={handleScroll}
        style={buttonStyle}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d={
              scrollState.nextDirection === "up"
                ? "M3.5 9.5L8 5L12.5 9.5"
                : "M3.5 6.5L8 11L12.5 6.5"
            }
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
