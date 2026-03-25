import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { SERVICES } from "../../constants/data/services";

export function Footer() {
  const { isMobile, isTablet, isSmallMobile } = useViewport();
  const serviceLinks = SERVICES.map((service) => [service.name, "#services"]);

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
      links: serviceLinks,
    },
    {
      title: "Connect",
      links: [
        ["Talk to us", "#contact"],
        ["Email Us", "mailto:connect@heuristiclabs.ai"],
        ["LinkedIn", "https://www.linkedin.com/company/heuristic-labs-ai/posts/?feedView=all"],
      ],
    },
  ];
  return (
    <footer
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(180deg, #1a150b 0%, #151108 58%, #100d06 100%)",
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
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 340,
          height: 340,
          borderRadius: "50%",
          top: -180,
          right: -90,
          background: "radial-gradient(circle, rgba(176,120,69,.28), rgba(176,120,69,0) 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 320,
          height: 320,
          borderRadius: "50%",
          bottom: -190,
          left: -120,
          background: "radial-gradient(circle, rgba(12,96,96,.18), rgba(12,96,96,0) 72%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1160, margin: "0 auto", position: "relative", zIndex: 1 }}>
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
            borderBottom: "1px solid rgba(255,255,255,.12)",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: font.serif,
                fontSize: isSmallMobile ? 18 : 22,
                fontWeight: 600,
                color: T.w,
                marginBottom: 10,
                letterSpacing: ".01em",
              }}
            >
              Heuristic Labs
            </div>
            <p
              style={{
                fontSize: isSmallMobile ? 12 : 13,
                color: T.w40,
                lineHeight: 1.72,
                marginBottom: 26,
                maxWidth: 300,
              }}
            >
              Your Applied AI Lab — turning AI ambition into secure, scalable,
              production-ready systems. Unlocking value in weeks.
            </p>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: isSmallMobile
                  ? "7px 16px"
                  : "9px 20px",
                borderRadius: 100,
                border: "1.5px solid rgba(255,255,255,.18)",
                fontSize: 14,
                color: T.w60,
                textDecoration: "none",
                background: "rgba(255,255,255,.04)",
                transition: "background .2s ease, color .2s ease, transform .2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,.1)";
                e.currentTarget.style.color = T.w;
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,.04)";
                e.currentTarget.style.color = T.w60;
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Talk to us
            </a>
          </div>
          {cols.map((col) => (
            <div
              key={col.title}
              style={{
                padding: isSmallMobile ? "0" : "4px 0",
              }}
            >
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
                        transition: "color .2s ease, transform .2s ease",
                        display: "inline-block",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = T.w;
                        e.currentTarget.style.transform = "translateX(2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = T.w60;
                        e.currentTarget.style.transform = "translateX(0)";
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
