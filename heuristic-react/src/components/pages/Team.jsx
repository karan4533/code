import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Reveal, SecHeader, Section, Em } from "../shared";
import { TEAM } from "../../constants/data/team";

export function Team() {
  const { isMobile, isTablet, isSmallMobile } = useViewport();
  return (
    <Section id="team">
      <Reveal>
        <SecHeader
          pill="Meet the team"
          title={
            <>
              Enterprise AI
              <br />
              <Em>expertise</Em> in every profile.
            </>
          }
          desc="No layers of management. You work directly with the specialists who understand your business and build your AI systems from first principles to production."
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
          gap: isSmallMobile ? 14 : 20,
        }}
      >
        {TEAM.map((m, i) => (
          <Reveal key={m.name} delay={i * 0.08}>
            <div
              style={{
                borderRadius: 20,
                overflow: "hidden",
                aspectRatio: "3/4",
                position: "relative",
                background: m.grad,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              {m.photo ? (
                <img
                  src={m.photo}
                  alt={m.name}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <span
                  style={{
                    fontFamily: font.serif,
                    fontSize: 72,
                    fontWeight: 600,
                    color: "rgba(255,255,255,.18)",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-60%)",
                    lineHeight: 1,
                    pointerEvents: "none",
                  }}
                >
                  {m.initial}
                </span>
              )}
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  padding: "24px 24px 28px",
                  background: "linear-gradient(transparent,rgba(20,14,6,.7) 50%)",
                }}
              >
                <div
                  style={{
                    fontFamily: font.serif,
                    fontSize: 18,
                    fontWeight: 600,
                    color: T.w,
                    marginBottom: 4,
                  }}
                >
                  {m.name}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,.65)",
                    marginBottom: 8,
                    fontFamily: font.sans,
                  }}
                >
                  {m.role}
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                  }}
                >
                  {m.bullets.map((b) => (
                    <li
                      key={b}
                      style={{
                        fontSize: 11,
                        color: "rgba(255,255,255,.45)",
                        display: "flex",
                        gap: 6,
                        fontFamily: font.sans,
                      }}
                    >
                      <span>•</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
