import { useState } from "react";
import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Reveal, SecHeader, Section, Em } from "../shared";
import { CASES } from "../../constants/data/cases";

export function CaseStudies() {
  const { isMobile, isTablet, isSmallMobile } = useViewport();
  const [showAllCases, setShowAllCases] = useState(false);
  const initialVisible = 6;
  const visibleCases = showAllCases ? CASES : CASES.slice(0, initialVisible);

  return (
    <Section id="case-studies">
      <Reveal>
        <SecHeader
          pill="Case studies"
          title={
            <>
              Real systems.
              <br />
              <Em>Measurable</Em> results.
            </>
          }
          desc="11 production-grade AI systems delivered across industries - each with documented, quantified impact."
        />
      </Reveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : isTablet
              ? "repeat(2,1fr)"
              : "repeat(3,1fr)",
          gap: isSmallMobile ? 12 : 18,
        }}
      >
        {visibleCases.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.05}>
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                background: `linear-gradient(165deg, ${T.bg2} 0%, #E2DBD0 55%, #D7D0C4 100%)`,
                border: `1px solid ${T.ink12}`,
                borderRadius: 18,
                padding: isSmallMobile ? "18px 16px 20px" : "24px 22px 26px",
                height: "100%",
                boxShadow: "0 10px 24px rgba(30,26,16,.06)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -50,
                  right: -40,
                  width: 130,
                  height: 130,
                  borderRadius: "50%",
                  background: i % 2 === 0 ? "rgba(12,96,96,.10)" : "rgba(176,120,69,.12)",
                }}
              />

              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: isSmallMobile ? 10 : 14,
                }}
              >
                <span
                  style={{
                    fontSize: isSmallMobile ? 10 : 11,
                    fontWeight: 600,
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                    color: T.ink60,
                    fontFamily: font.sans,
                    background: "rgba(255,255,255,.5)",
                    border: `1px solid ${T.ink12}`,
                    borderRadius: 100,
                    padding: "4px 9px",
                  }}
                >
                  {c.cat}
                </span>

                <span
                  style={{
                    fontSize: isSmallMobile ? 10 : 11,
                    fontWeight: 600,
                    color: T.ink,
                    background: "rgba(255,255,255,.55)",
                    border: `1px solid ${T.ink12}`,
                    padding: isSmallMobile ? "2px 8px" : "3px 10px",
                    borderRadius: 100,
                    fontFamily: font.sans,
                  }}
                >
                  {c.weeks}
                </span>
              </div>

              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  fontFamily: font.serif,
                  fontSize: isSmallMobile ? 17 : 19,
                  fontWeight: 600,
                  color: T.ink,
                  marginBottom: 8,
                  lineHeight: 1.3,
                }}
              >
                {c.title}
              </div>

              <p
                style={{
                  position: "relative",
                  zIndex: 1,
                  fontSize: isSmallMobile ? 12 : 13,
                  lineHeight: 1.6,
                  color: T.ink60,
                  marginBottom: 14,
                  fontFamily: font.sans,
                }}
              >
                {c.body}
              </p>

              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  display: "grid",
                  gridTemplateColumns: isSmallMobile ? "1fr" : "repeat(2,minmax(0,1fr))",
                  gap: isSmallMobile ? 8 : 10,
                }}
              >
                {c.metrics.map((m) => (
                  <div
                    key={m.label}
                    style={{
                      border: `1px solid ${T.ink12}`,
                      background: "rgba(255,255,255,.42)",
                      borderRadius: 10,
                      padding: isSmallMobile ? "8px 10px" : "9px 11px",
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        fontFamily: font.serif,
                        fontSize: isSmallMobile ? 20 : 24,
                        fontWeight: 700,
                        color: T.ink,
                        lineHeight: 1,
                        marginBottom: 4,
                      }}
                    >
                      {m.val}
                    </span>
                    <span
                      style={{
                        fontSize: isSmallMobile ? 11 : 11.5,
                        color: T.ink60,
                        fontFamily: font.sans,
                        lineHeight: 1.35,
                      }}
                    >
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {CASES.length > initialVisible && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: 28 }}>
          <button
            onClick={() => setShowAllCases((prev) => !prev)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              border: `1.5px solid ${T.ink12}`,
              background: "transparent",
              color: T.ink,
              borderRadius: 100,
              padding: "10px 20px",
              fontSize: 14,
              fontWeight: 500,
              fontFamily: font.sans,
              cursor: "pointer",
            }}
          >
            {showAllCases ? "View less" : `View more (${CASES.length - initialVisible})`}
            <span
              style={{
                width: 22,
                height: 22,
                borderRadius: "50%",
                border: `1px solid ${T.ink12}`,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
                transform: showAllCases ? "rotate(-90deg)" : "rotate(90deg)",
                transition: "transform .2s ease",
              }}
            >
              {"->"}
            </span>
          </button>
        </div>
      )}
    </Section>
  );
}
