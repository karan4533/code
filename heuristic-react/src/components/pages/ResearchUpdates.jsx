import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Reveal, SecHeader, Section, Em } from "../shared";
import { RESEARCH_UPDATES } from "../../constants/data/researchUpdates";

export function ResearchUpdates() {
  const { isMobile, isTablet, isSmallMobile } = useViewport();
  const visibleUpdates = RESEARCH_UPDATES.slice(0, 3);

  return (
    <Section id="research-updates">
      <Reveal>
        <SecHeader
          pill="Research updates"
          title={
            <>
              Research and
              <br />
              <Em>updates</Em>.
            </>
          }
          desc="Latest product launches, model breakthroughs, and company updates from our applied AI lab."
        />
      </Reveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : isTablet
              ? "repeat(2,minmax(0,1fr))"
              : "repeat(3,minmax(0,1fr))",
          gap: isSmallMobile ? 14 : 20,
        }}
      >
        {visibleUpdates.map((item, index) => (
          <Reveal key={`update-${index}`} delay={index * 0.06}>
            <div style={{ height: "100%" }}>
              <article
                style={{
                  border: `1px solid ${T.ink12}`,
                  borderRadius: 20,
                  padding: isSmallMobile ? 14 : 16,
                  background: "rgba(255,255,255,.06)",
                  transition: "transform .24s ease, box-shadow .24s ease",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 12px 20px rgba(30,26,16,.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {item.category && (
                  <div
                    style={{
                      fontFamily: font.sans,
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: ".08em",
                      textTransform: "uppercase",
                      color: T.ink40,
                      marginBottom: 8,
                    }}
                  >
                    {item.category}
                  </div>
                )}

                {item.title && (
                  <h3
                    style={{
                      margin: 0,
                      fontFamily: font.serif,
                      fontSize: isSmallMobile ? 22 : 30,
                      fontWeight: 600,
                      lineHeight: 1.2,
                      color: T.ink,
                    }}
                  >
                    {item.title}
                  </h3>
                )}

                {item.date && (
                  <p
                    style={{
                      margin: "10px 0 14px",
                      fontFamily: font.sans,
                      fontSize: isSmallMobile ? 13 : 14,
                      color: T.ink60,
                    }}
                  >
                    {item.date}
                  </p>
                )}

                <div
                  style={{
                    borderRadius: 16,
                    minHeight: isSmallMobile ? 170 : 210,
                    background: item.visualBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "16px",
                    marginTop: "auto",
                  }}
                >
                  {item.visualText && (
                    <span
                      style={{
                        fontFamily: font.serif,
                        fontSize: isSmallMobile ? 26 : 36,
                        fontWeight: 600,
                        lineHeight: 1.1,
                        color: "rgba(255,255,255,.9)",
                        textAlign: "center",
                      }}
                    >
                      {item.visualText}
                    </span>
                  )}
                </div>
              </article>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
