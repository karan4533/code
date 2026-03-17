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
          desc="11 production-grade AI systems delivered across industries — each with documented, quantified impact."
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
          gap: isSmallMobile ? 12 : 16,
        }}
      >
        {visibleCases.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.05}>
            <div
              style={{
                background: T.bg2,
                border: `1px solid ${T.ink12}`,
                borderRadius: 16,
                padding: isSmallMobile ? "20px 18px 24px" : "28px 24px 32px",
                height: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: isSmallMobile ? 12 : 18,
                }}
              >
                <span
                  style={{
                    fontSize: isSmallMobile ? 9 : 10,
                    fontWeight: 600,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: T.ink40,
                    fontFamily: font.sans,
                  }}
                >
                  {c.cat}
                </span>
                <span
                  style={{
                    fontSize: isSmallMobile ? 10 : 11,
                    fontWeight: 500,
                    color: T.ink60,
                    background: T.ink07,
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
                  fontFamily: font.serif,
                  fontSize: isSmallMobile ? 15 : 17,
                  fontWeight: 600,
                  color: T.ink,
                  marginBottom: 10,
                  lineHeight: 1.35,
                }}
              >
                {c.title}
              </div>
              <p
                style={{
                  fontSize: isSmallMobile ? 12 : 13,
                  lineHeight: 1.65,
                  color: T.ink60,
                  marginBottom: 16,
                  fontFamily: font.sans,
                }}
              >
                {c.body}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: isSmallMobile ? 5 : 6 }}>
                {c.metrics.map((m) => (
                  <div
                    key={m.label}
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: 6,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: font.serif,
                        fontSize: isSmallMobile ? 18 : 22,
                        fontWeight: 700,
                        color: T.ink,
                        lineHeight: 1,
                      }}
                    >
                      {m.val}
                    </span>
                    <span
                      style={{
                        fontSize: isSmallMobile ? 11 : 12,
                        color: T.ink60,
                        fontFamily: font.sans,
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
                transform: showAllCases
                  ? "rotate(-90deg)"
                  : "rotate(90deg)",
                transition: "transform .2s ease",
              }}
            >
              ➜
            </span>
          </button>
        </div>
      )}
    </Section>
  );
}
