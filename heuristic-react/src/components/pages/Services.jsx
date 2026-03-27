import { useState } from "react";
import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Reveal, SecHeader, Section, Em } from "../shared";
import { SERVICES } from "../../constants/data/services";

export function Services() {
  const { isTablet, isSmallMobile } = useViewport();
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [hoveredServiceIndex, setHoveredServiceIndex] = useState(null);
  const activeService = SERVICES[activeServiceIndex];

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
          gridTemplateColumns: isTablet
            ? "1fr"
            : "minmax(0, 1.05fr) minmax(0, 0.95fr)",
          gap: isSmallMobile ? 14 : 26,
          alignItems: "start",
        }}
      >
        <div style={{ borderTop: `1px solid ${T.ink12}` }}>
          {SERVICES.map((s, i) => {
            const isActive = i === activeServiceIndex;
            const isHovered = i === hoveredServiceIndex;

            return (
              <Reveal key={s.name} delay={i * 0.04}>
                <button
                  type="button"
                  onClick={() => setActiveServiceIndex(i)}
                  onMouseEnter={() => setHoveredServiceIndex(i)}
                  onMouseLeave={() => setHoveredServiceIndex(null)}
                  style={{
                    width: "100%",
                    border: "none",
                    borderBottom: `1px solid ${T.ink12}`,
                    background: isActive || isHovered ? T.ink07 : "transparent",
                    padding: isSmallMobile ? "14px 12px" : "18px 14px",
                    textAlign: "left",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: 10,
                    transform: isHovered ? "translateX(4px)" : "translateX(0)",
                    transition:
                      "background .22s ease, transform .22s ease, border-color .22s ease",
                  }}
                >
                  <div style={{ minWidth: 0 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 9,
                        marginBottom: 6,
                      }}
                    >
                      <span
                        style={{
                          fontSize: isSmallMobile ? 15 : 17,
                          lineHeight: 1,
                        }}
                      >
                        {s.emoji}
                      </span>
                      <span
                        style={{
                          fontFamily: font.serif,
                          fontSize: isSmallMobile ? 17 : 20,
                          fontWeight: 600,
                          color: T.ink,
                          lineHeight: 1.24,
                        }}
                      >
                        {s.name}
                      </span>
                    </div>

                    <p
                      style={{
                        margin: 0,
                        fontFamily: font.sans,
                        fontSize: isSmallMobile ? 12 : 13,
                        lineHeight: 1.62,
                        color: T.ink60,
                        maxWidth: 640,
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
                      paddingTop: 3,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.08}>
          <div
            style={{
              borderTop: `1px solid ${T.ink12}`,
              borderBottom: `1px solid ${T.ink12}`,
              padding: isSmallMobile ? "14px 12px" : "18px 14px",
              background: T.ink07,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 10,
                marginBottom: 12,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 9,
                  minWidth: 0,
                }}
              >
                <span
                  style={{
                    fontSize: isSmallMobile ? 16 : 18,
                    lineHeight: 1,
                  }}
                >
                  {activeService.emoji}
                </span>
                <h3
                  style={{
                    margin: 0,
                    fontFamily: font.serif,
                    fontSize: isSmallMobile ? 20 : 24,
                    fontWeight: 600,
                    color: T.ink,
                    lineHeight: 1.2,
                  }}
                >
                  {activeService.name}
                </h3>
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
                {String(activeServiceIndex + 1).padStart(2, "0")}
              </span>
            </div>

            <p
              style={{
                margin: 0,
                fontFamily: font.sans,
                fontSize: isSmallMobile ? 12 : 13,
                lineHeight: 1.65,
                color: T.ink60,
              }}
            >
              {activeService.desc}
            </p>

            <div style={{ marginTop: 14, borderTop: `1px solid ${T.ink12}` }}>
              {activeService.items.map((item, index) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 9,
                    padding: isSmallMobile ? "9px 0" : "10px 0",
                    borderBottom:
                      index === activeService.items.length - 1
                        ? "none"
                        : `1px solid ${T.ink12}`,
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
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
                      lineHeight: 1.5,
                      color: T.ink,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
