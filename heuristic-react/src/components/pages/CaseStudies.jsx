import { useState } from "react";
import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Reveal, SecHeader, Section, Em } from "../shared";
import { CASES } from "../../constants/data/cases";

export function CaseStudies({ onOpenCaseStudy }) {
  const { isMobile, isTablet, isSmallMobile } = useViewport();
  const [showAllCases, setShowAllCases] = useState(false);
  const [hoveredCaseIndex, setHoveredCaseIndex] = useState(null);
  const previewCount = 3;
  const visibleCases = showAllCases ? CASES : CASES.slice(0, previewCount);

  const handleOpenCase = (index) => {
    if (typeof onOpenCaseStudy === "function") {
      onOpenCaseStudy(index);
    }
  };

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
              : "repeat(3,minmax(0,1fr))",
          gap: isSmallMobile ? 16 : 26,
        }}
      >
        {visibleCases.map((c, i) => {
          const caseIndex = i;

          return (
            <Reveal key={c.title} delay={i * 0.05}>
              <button
                type="button"
                onClick={() => handleOpenCase(caseIndex)}
                onMouseEnter={() => setHoveredCaseIndex(caseIndex)}
                onMouseLeave={() => setHoveredCaseIndex(null)}
                style={{
                  border: "none",
                  background: "transparent",
                  width: "100%",
                  padding: 0,
                  textAlign: "left",
                  cursor: "pointer",
                  transform:
                    hoveredCaseIndex === caseIndex
                      ? "translateY(-2px)"
                      : "translateY(0)",
                  transition: "transform .24s ease, opacity .24s ease",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: isSmallMobile ? 138 : 190,
                    borderRadius: 16,
                    border: `1px solid ${T.ink12}`,
                    background:
                      i % 2 === 0
                        ? `linear-gradient(150deg, ${T.bg2} 0%, ${T.bg3} 100%)`
                        : `linear-gradient(150deg, ${T.bg3} 0%, ${T.bg2} 100%)`,
                    marginBottom: isSmallMobile ? 11 : 14,
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 8,
                    marginBottom: isSmallMobile ? 8 : 10,
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
                      borderBottom: `1px solid ${T.ink12}`,
                      paddingBottom: 2,
                    }}
                  >
                    {c.cat}
                  </span>

                  <span
                    style={{
                      fontSize: isSmallMobile ? 10 : 11,
                      fontWeight: 600,
                      color: T.ink,
                      fontFamily: font.sans,
                      letterSpacing: ".03em",
                    }}
                  >
                    {c.weeks}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: font.serif,
                    fontSize: isSmallMobile ? 20 : 24,
                    fontWeight: 600,
                    color: T.ink,
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  {c.title}
                </h3>
              </button>
            </Reveal>
          );
        })}
      </div>

      {CASES.length > previewCount && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
          <button
            type="button"
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
            {showAllCases
              ? "Show fewer"
              : `View all case studies (${CASES.length - previewCount})`}
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
