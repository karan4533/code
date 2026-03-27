import { T } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";

export const Section = ({ children, bg, id }) => {
  const { isSmallMobile, isMobile, isTablet } = useViewport();
  return (
    <section
      id={id}
      style={{
        background: bg || T.bg,
        scrollMarginTop: isSmallMobile ? 38 : isMobile ? 44 : isTablet ? 52 : 60,
        padding: isSmallMobile
          ? "28px 0"
          : isMobile
            ? "40px 0"
            : "56px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: `0 ${isSmallMobile ? 16 : isMobile ? 20 : isTablet ? 28 : 48}px`,
        }}
      >
        {children}
      </div>
    </section>
  );
};
