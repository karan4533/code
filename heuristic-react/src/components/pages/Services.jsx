import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Reveal, SecHeader, Section, Em } from "../shared";
import { SERVICES } from "../../constants/data/services";

export function Services() {
  const { isMobile, isSmallMobile } = useViewport();
  return (
    <Section id="services">
      <Reveal>
        <SecHeader
          pill="Our services"
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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(2,1fr)",
          gap: isSmallMobile ? 12 : 14,
        }} 
      >
        {SERVICES.map((s, i) => (
          <Reveal key={s.name} delay={i * 0.05}>
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                background: `linear-gradient(160deg, ${T.bg2} 0%, #E4DED3 52%, #D9D2C7 100%)`,
                border: `1px solid ${T.ink12}`,
                borderRadius: 18,
                padding: isSmallMobile
                  ? "16px 14px 18px"
                  : "22px 20px 24px",
                height: "100%",
                boxShadow: "0 10px 24px rgba(30,26,16,.06)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  right: -44,
                  top: -44,
                  width: 110,
                  height: 110,
                  borderRadius: "50%",
                  background: i % 2 === 0 ? "rgba(176,120,69,.14)" : "rgba(12,96,96,.12)",
                  filter: "blur(2px)",
                }}
              />

              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: isSmallMobile ? 10 : 12,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
                  <span
                    style={{
                      width: isSmallMobile ? 30 : 34,
                      height: isSmallMobile ? 30 : 34,
                      borderRadius: 10,
                      border: `1px solid ${T.ink12}`,
                      background: "rgba(255,255,255,.44)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: isSmallMobile ? 16 : 18,
                      flexShrink: 0,
                    }}
                  >
                    {s.emoji}
                  </span>
                  <div
                    style={{
                      fontFamily: font.serif,
                      fontSize: isSmallMobile ? 17 : 19,
                      fontWeight: 600,
                      color: T.ink,
                      lineHeight: 1.25,
                    }}
                  >
                    {s.name}
                  </div>
                </div>
                <span
                  style={{
                    fontFamily: font.sans,
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: ".08em",
                    color: T.ink40,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <p
                style={{
                  position: "relative",
                  zIndex: 1,
                  fontSize: isSmallMobile ? 12 : 13,
                  lineHeight: 1.62,
                  color: T.ink60,
                  marginBottom: 12,
                  fontFamily: font.sans,
                }}
              >
                {s.desc}
              </p>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  position: "relative",
                  zIndex: 1,
                  display: "grid",
                  gridTemplateColumns: isSmallMobile ? "1fr" : "repeat(2,minmax(0,1fr))",
                  gap: isSmallMobile ? 6 : 6,
                }}
              >
                {s.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: isSmallMobile ? 11 : 12,
                      color: T.ink,
                      background: "rgba(255,255,255,.46)",
                      border: `1px solid ${T.ink12}`,
                      borderRadius: 10,
                      padding: "6px 8px",
                      lineHeight: 1.3,
                      fontFamily: font.sans,
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
