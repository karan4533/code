import { T } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";

export const Section = ({ children, bg, id }) => {
  const { isSmallMobile, isMobile, isTablet } = useViewport();
  return (
    <section
      id={id}
      style={{
        background: bg || T.bg,
        padding: isSmallMobile
          ? "40px 0"
          : isMobile
            ? "56px 0"
            : "80px 0",
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
