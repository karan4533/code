import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";

export function Footer() {
  const { isMobile, isTablet, isSmallMobile } = useViewport();
  const cols = [
    {
      title: "Navigate",
      links: [
        ["About", "#about"],
        ["Services", "#services"],
        ["Case Studies", "#case-studies"],
        ["Team", "#team"],
        ["FAQ", "#"],
      ],
    },
    {
      title: "Services",
      links: [
        ["Custom AI Solutions", "#"],
        ["Industrial GenAI", "#"],
        ["AI Governance", "#"],
        ["Strategic Consulting", "#"],
        ["R&D as a Service", "#"],
      ],
    },
    {
      title: "Connect",
      links: [
        ["Talk to us", "#contact"],
        ["Email Us", "mailto:connect@heuristiclabs.ai"],
        ["LinkedIn", "#"],
        ["Website", "https://heuristiclabs.ai"],
      ],
    },
  ];
  return (
    <footer
      style={{
        background: T.footer,
        padding: isSmallMobile
          ? "36px 16px 20px"
          : isMobile
            ? "48px 20px 28px"
            : isTablet
              ? "56px 28px 34px"
              : "64px 48px 40px",
        fontFamily: font.sans,
      }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : isTablet
                ? "1fr 1fr"
                : "1.6fr 1fr 1fr 1fr",
            gap: isSmallMobile ? 20 : isMobile ? 28 : 48,
            paddingBottom: isSmallMobile ? 32 : 48,
            borderBottom: "1px solid rgba(255,255,255,.08)",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: font.serif,
                fontSize: isSmallMobile ? 17 : 20,
                fontWeight: 600,
                color: T.w,
                marginBottom: 12,
              }}
            >
              Heuristic Labs
            </div>
            <p
              style={{
                fontSize: isSmallMobile ? 12 : 13,
                color: T.w40,
                lineHeight: 1.7,
                marginBottom: 24,
                maxWidth: 280,
              }}
            >
              Your Applied AI Lab — turning AI ambition into secure, scalable,
              production-ready systems. Unlocking value in weeks.
            </p>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                padding: isSmallMobile
                  ? "7px 16px"
                  : "9px 20px",
                borderRadius: 100,
                border: "1.5px solid rgba(255,255,255,.18)",
                fontSize: 14,
                color: T.w60,
                textDecoration: "none",
              }}
            >
              Talk to us
            </a>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: T.w40,
                  marginBottom: 18,
                }}
              >
                {col.title}
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: isSmallMobile ? 8 : 10,
                }}
              >
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      style={{
                        fontSize: isSmallMobile ? 12 : 14,
                        color: T.w60,
                        textDecoration: "none",
                      }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          style={{
            paddingTop: isSmallMobile ? 20 : 28,
            display: "flex",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "center",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? 8 : 0,
          }}
        >
          <span
            style={{
              fontSize: isSmallMobile ? 11 : 12,
              color: "rgba(255,255,255,.22)",
            }}
          >
            © 2026 Heuristic Labs (Frux Consulting LLP). All rights reserved.
          </span>
          <span
            style={{
              fontSize: isSmallMobile ? 11 : 12,
              color: "rgba(255,255,255,.22)",
            }}
          >
            www.heuristiclabs.ai
          </span>
        </div>
      </div>
    </footer>
  );
}
