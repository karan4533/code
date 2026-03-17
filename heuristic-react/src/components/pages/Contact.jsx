import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Reveal } from "../shared";

function ContactIcon({ type }) {
  const stroke = T.teal;

  if (type === "mail") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2.5" stroke={stroke} strokeWidth="2" />
        <path d="M4 8L12 13L20 8" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "calendar") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="18" height="16" rx="2.5" stroke={stroke} strokeWidth="2" />
        <path d="M8 3V7" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        <path d="M16 3V7" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        <path d="M3 10H21" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="9" width="4" height="12" rx="1" stroke={stroke} strokeWidth="2" />
        <circle cx="5" cy="5" r="2" stroke={stroke} strokeWidth="2" />
        <path d="M11 21V13.5C11 11.6 12.6 10 14.5 10C16.4 10 18 11.6 18 13.5V21" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        <path d="M18 21H21" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21C16.4 16.4 19 13.5 19 10.5C19 6.9 16.1 4 12.5 4C8.9 4 6 6.9 6 10.5C6 13.5 8.6 16.4 13 21" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12.5" cy="10.5" r="2.2" stroke={stroke} strokeWidth="2" />
    </svg>
  );
}

function ActionBtn({ href, children, highlight, fullWidth }) {
  return (
    <a
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        width: fullWidth ? "100%" : "auto",
        minWidth: fullWidth ? "100%" : 190,
        padding: "12px 18px",
        borderRadius: 10,
        border: highlight ? "1px solid transparent" : `1px solid ${T.ink12}`,
        background: highlight ? T.ink : "rgba(255,255,255,.55)",
        color: highlight ? T.w : T.ink,
        textDecoration: "none",
        fontFamily: font.sans,
        fontSize: 14,
        fontWeight: 600,
        letterSpacing: ".01em",
        whiteSpace: "nowrap",
      }}
    >
      {children}
      <span style={{ opacity: 0.95, fontSize: 18, lineHeight: 1 }}>→</span>
    </a>
  );
}

export function Contact() {
  const { isMobile, isTablet, isSmallMobile } = useViewport();
  const items = [
    {
      key: "email",
      icon: "mail",
      title: "Prefer email?",
      desc: (
        <>
          Send us a message at{" "}
          <a
            href="mailto:connect@heuristiclabs.ai"
            style={{ color: T.teal, textDecoration: "none", fontWeight: 700 }}
          >
            connect@heuristiclabs.ai
          </a>
        </>
      ),
      action: (
        <ActionBtn href="mailto:connect@heuristiclabs.ai" fullWidth={isMobile}>
          Send an email
        </ActionBtn>
      ),
    },
    {
      key: "meeting",
      icon: "calendar",
      title: "Rather talk directly?",
      desc: "Schedule a free 30-minute consultation",
      action: (
        <ActionBtn href="#" highlight fullWidth={isMobile}>
          Book a meeting
        </ActionBtn>
      ),
    },
    {
      key: "linkedin",
      icon: "linkedin",
      title: "Stay connected",
      desc: "Follow us on LinkedIn for the latest insights",
      action: (
        <ActionBtn href="#" fullWidth={isMobile}>
          Connect with us
        </ActionBtn>
      ),
    },
    {
      key: "visit",
      icon: "location",
      title: "Visit us",
      desc: "Elnet Software City, TS 140 Block 2 & 9, Rajiv Gandhi Salai, Tharamani, Chennai, TN-600113",
      action: null,
    },
  ];

  return (
    <section
      id="contact"
      style={{
        background: "#E8E3D9",
        padding: isSmallMobile
          ? "40px 0"
          : isMobile
            ? "56px 0"
            : "88px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: `0 ${isSmallMobile ? 16 : isMobile ? 20 : isTablet ? 28 : 48}px`,
        }}
      >
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: isSmallMobile ? 22 : 32 }}>
            <h2
              style={{
                margin: 0,
                fontFamily: font.serif,
                fontWeight: 700,
                fontSize: "clamp(28px, 3.5vw, 46px)",
                lineHeight: 1.12,
                letterSpacing: "-.02em",
                color: T.ink,
              }}
            >
              Let&apos;s work together
            </h2>
          </div>

          <div
            style={{
              borderRadius: isSmallMobile ? 18 : 20,
              border: `1px solid ${T.ink12}`,
              background: "linear-gradient(180deg, rgba(255,255,255,.72) 0%, rgba(255,255,255,.58) 100%)",
              boxShadow: "0 22px 45px rgba(30,26,16,.10)",
              overflow: "hidden",
            }}
          >
            {items.map((item, idx) => (
              <div
                key={item.key}
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "auto minmax(0,1fr) auto",
                  alignItems: isMobile ? "start" : "center",
                  columnGap: isSmallMobile ? 14 : 18,
                  rowGap: isMobile ? 14 : 8,
                  padding: isSmallMobile ? "20px 16px" : isMobile ? "24px 20px" : "28px 28px",
                  borderBottom: idx === items.length - 1 ? "none" : `1px solid ${T.ink12}`,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 44, height: 44 }}>
                  <ContactIcon type={item.icon} />
                </div>

                <div>
                  <h3
                    style={{
                      margin: 0,
                      fontFamily: font.serif,
                      fontWeight: 600,
                      fontSize: isSmallMobile ? 15 : 17,
                      lineHeight: 1.2,
                      color: T.ink,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      margin: "6px 0 0",
                      fontFamily: font.sans,
                      fontSize: isSmallMobile ? 12 : 13,
                      lineHeight: 1.65,
                      color: T.ink60,
                      maxWidth: 700,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>

                {item.action ? <div style={{ width: isMobile ? "100%" : "auto" }}>{item.action}</div> : <div />}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
