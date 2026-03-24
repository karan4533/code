import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Reveal, SecHeader, Section, Em } from "../shared";
import { SERVICES } from "../../constants/data/services";

export function Services() {
  const { isTablet, isSmallMobile } = useViewport();

  return (
    <Section id="services">
      <Reveal>
        <SecHeader
          pill="Our AI services"
          title={
            <>
              Everything you need to
              <br />
              <Em>lead</Em> enterprise AI.
            </>
          }
          desc="End-to-end AI transformation — from strategy and research to production-grade systems and governance frameworks."
        />
      </Reveal>

      <div style={{ borderTop: `1px solid ${T.ink12}` }}>
        {SERVICES.map((s, i) => (
          <Reveal key={s.name} delay={i * 0.04}>
            <article
              style={{
                display: "grid",
                gridTemplateColumns: isTablet
                  ? "1fr"
                  : "minmax(0, .9fr) minmax(0, 1.1fr)",
                gap: isSmallMobile ? 10 : 22,
                padding: isSmallMobile ? "16px 0" : "24px 0",
                borderBottom: `1px solid ${T.ink12}`,
                transition: "background .22s ease, transform .22s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(30,26,16,.02)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: 12,
                }}
              >
                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 9,
                      marginBottom: 7,
                    }}
                  >
                    <span style={{ fontSize: isSmallMobile ? 16 : 18, lineHeight: 1 }}>
                      {s.emoji}
                    </span>
                    <h3
                      style={{
                        margin: 0,
                        fontFamily: font.serif,
                        fontSize: isSmallMobile ? 19 : 24,
                        fontWeight: 600,
                        color: T.ink,
                        lineHeight: 1.2,
                      }}
                    >
                      {s.name}
                    </h3>
                  </div>

                  <p
                    style={{
                      margin: 0,
                      fontFamily: font.sans,
                      fontSize: isSmallMobile ? 12 : 13,
                      lineHeight: 1.62,
                      color: T.ink60,
                      maxWidth: 520,
                    }}
                  >
                    {s.desc}
                  </p>
                </div>

                <span
                  style={{
                    fontFamily: font.sans,
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: ".08em",
                    color: T.ink40,
                    flexShrink: 0,
                    paddingTop: 2,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isSmallMobile ? "1fr" : "repeat(2,minmax(0,1fr))",
                  gap: isSmallMobile ? 8 : 10,
                  alignContent: "start",
                }}
              >
                {s.items.map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: 8,
                      paddingBottom: isSmallMobile ? 5 : 6,
                      borderBottom: `1px solid ${T.ink12}`,
                    }}
                  >
                    <span
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: T.ink40,
                        marginTop: 6,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: font.sans,
                        fontSize: isSmallMobile ? 12 : 13,
                        lineHeight: 1.45,
                        color: T.ink,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
