import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Reveal, SecHeader, Section, Em } from "../shared";

export function WhoWeAre() {
  const { isMobile, isTablet, isSmallMobile } = useViewport();
  return (
    <Section id="about">
      <Reveal>
        <SecHeader
          pill="Who we are"
          title={
            <>
              Your <Em>On-Demand</Em> AI Research Partner
            </>
          }
          desc={
            <>
              The world of GenAI is evolving too fast for any one team to
              track. Our applied AI research team evaluates emerging GenAI
              technologies so you don't have to.
              <br />
              <br />
              We build a library of AI agents and accelerators that forms the
              foundation for custom, production-ready solutions, helping you
              stay ahead while keeping innovation costs low.
            </>
          }
        />
      </Reveal>
      <Reveal delay={0.1}>
        <div
          style={{
            borderRadius: 20,
            overflow: "hidden",
            background: `linear-gradient(130deg, ${T.teal} 0%, ${T.tealMid} 45%, ${T.tealDk} 100%)`,
            padding: isSmallMobile ? "32px 24px" : "48px 40px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : isTablet
                  ? "repeat(2,1fr)"
                  : "repeat(3,1fr)",
              gap: isSmallMobile ? 12 : 20,
            }}
          >
            {[
              {
                num: "92%",
                label: "End-to-end automation achieved for clients",
              },
              {
                num: "8 wks",
                label:
                  "Average time to first production deployment",
              },
              {
                num: "50+",
                label:
                  "Years of combined AI leadership experience",
              },
            ].map((s) => (
              <div
                key={s.num}
                style={{
                  background: T.w08,
                  border: `1px solid ${T.w15}`,
                  borderRadius: 14,
                  padding: isSmallMobile
                    ? "24px 20px"
                    : "32px 28px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: font.serif,
                    fontSize: isSmallMobile ? 42 : 52,
                    fontWeight: 700,
                    color: T.w,
                    lineHeight: 1,
                    marginBottom: 6,
                    letterSpacing: "-.02em",
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontSize: isSmallMobile ? 12 : 13,
                    color: T.w60,
                    lineHeight: 1.5,
                    fontFamily: font.sans,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.15}>
        <div
          style={{
            marginTop: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        ></div>
      </Reveal>
    </Section>
  );
}
