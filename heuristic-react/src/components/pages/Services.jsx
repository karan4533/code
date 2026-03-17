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
          gap: isSmallMobile ? 12 : 16,
        }}
      >
        {SERVICES.map((s, i) => (
          <Reveal key={s.name} delay={i * 0.05}>
            <div
              style={{
                background: T.bg2,
                border: `1px solid ${T.ink12}`,
                borderRadius: 16,
                padding: isSmallMobile
                  ? "24px 24px 28px"
                  : "32px 32px 36px",
                height: "100%",
              }}
            >
              <span style={{ fontSize: isSmallMobile ? 22 : 26, marginBottom: isSmallMobile ? 12 : 18, display: "block" }}>
                {s.emoji}
              </span>
              <div
                style={{
                  fontFamily: font.serif,
                  fontSize: isSmallMobile ? 17 : 19,
                  fontWeight: 600,
                  color: T.ink,
                  marginBottom: 8,
                }}
              >
                {s.name}
              </div>
              <p
                style={{
                  fontSize: isSmallMobile ? 13 : 14,
                  lineHeight: 1.65,
                  color: T.ink60,
                  marginBottom: 18,
                  fontFamily: font.sans,
                }}
              >
                {s.desc}
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: isSmallMobile ? 5 : 6,
                }}
              >
                {s.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: isSmallMobile ? 12 : 13,
                      color: T.ink60,
                      display: "flex",
                      alignItems: "baseline",
                      gap: 8,
                      fontFamily: font.sans,
                    }}
                  >
                    <span style={{ color: T.ink40, fontSize: 11, flexShrink: 0 }}>—</span>
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
