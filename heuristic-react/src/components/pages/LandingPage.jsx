import { useState } from "react";
import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { CAPABILITIES, STATS } from "../../constants/data/customizations";

export function LandingPage({
  onExit,
  onHome,
  onAbout,
  onService,
  onCaseStudies,
  onContact,
}) {
  const { isMobile, isTablet, isSmallMobile } = useViewport();
  const [landingMenuOpen, setLandingMenuOpen] = useState(false);
  const headerHeight = isSmallMobile ? 56 : isMobile ? 60 : isTablet ? 64 : 72;
  const landingLinks = [
    { label: "Home", onClick: onHome },
    { label: "About", onClick: onAbout },
    { label: "Service", onClick: onService },
    { label: "Case Studies", onClick: onCaseStudies },
    { label: "Contact", onClick: onContact },
  ];

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: `radial-gradient(circle at 80% 15%, ${T.bg3} 0%, ${T.bg} 40%, ${T.bg} 100%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 300,
        animation: "fadeInLanding .8s ease-out",
        overflowY: "auto",
      }}
    >
      <header
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          minHeight: headerHeight,
          display: "flex",
          alignItems: "center",
          justifyContent: !isMobile && !isTablet ? "space-between" : "flex-start",
          flexDirection: "row",
          flexWrap: "nowrap",
          gap: 12,
          padding: isSmallMobile
            ? "8px 12px"
            : isMobile
              ? "10px 16px"
              : isTablet
                ? "10px 24px"
                : "0 48px",
          borderBottom: `1px solid ${T.ink12}`,
          background: `rgba(232, 227, 217, ${isMobile ? 0.95 : 0.8})`,
          backdropFilter: "blur(12px)",
          fontFamily: font.sans,
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: font.serif,
            fontSize: isSmallMobile ? 13 : isMobile ? 15 : 17,
            fontWeight: 600,
            color: T.ink,
            flexShrink: 0,
            textAlign: "left",
          }}
        >
          Heuristic Labs
        </div>

        {/* Hamburger Menu Button - Mobile/Tablet Only */}
        {(isMobile || isTablet) && (
          <button
            onClick={() => setLandingMenuOpen(!landingMenuOpen)}
            style={{
              position: "relative",
              width: 28,
              height: 28,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              marginLeft: "auto",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                width: "100%",
                height: 2,
                background: T.ink,
                borderRadius: 2,
                transform: landingMenuOpen
                  ? "rotate(45deg) translateY(11px)"
                  : "none",
                transition: ".3s",
              }}
            />
            <span
              style={{
                width: "100%",
                height: 2,
                background: T.ink,
                borderRadius: 2,
                opacity: landingMenuOpen ? 0 : 1,
                transition: ".3s",
              }}
            />
            <span
              style={{
                width: "100%",
                height: 2,
                background: T.ink,
                borderRadius: 2,
                transform: landingMenuOpen
                  ? "rotate(-45deg) translateY(-11px)"
                  : "none",
                transition: ".3s",
              }}
            />
          </button>
        )}

        {/* Desktop Navigation - Hidden on Mobile */}
        {!isMobile && !isTablet && (
          <nav style={{ width: "auto" }}>
            <ul
              style={{
                display: "flex",
                gap: isSmallMobile ? 6 : isMobile ? 8 : 28,
                listStyle: "none",
                margin: 0,
                padding: 0,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {landingLinks.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={item.onClick}
                    style={{
                      background: "none",
                      padding: 0,
                      borderRadius: 999,
                      cursor: "pointer",
                      color: T.ink60,
                      fontSize: 14,
                      fontWeight: 400,
                      fontFamily: font.sans,
                      border: "none",
                      whiteSpace: "nowrap",
                      transition: ".2s",
                    }}
                    onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
                    onMouseLeave={(e) => (e.target.style.opacity = "1")}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* Mobile Menu Dropdown - Landing Page */}
      {(isMobile || isTablet) && landingMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: headerHeight,
            left: 0,
            right: 0,
            background: "rgba(232,227,217,.98)",
            backdropFilter: "blur(16px)",
            borderBottom: `1px solid ${T.ink12}`,
            padding: isSmallMobile ? "12px 12px" : "16px 12px",
            display: "flex",
            flexDirection: "column",
            gap: isSmallMobile ? 6 : 8,
            animation: "slideDownMenu .3s ease-out",
            zIndex: 299,
          }}
        >
          {landingLinks.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                item.onClick();
                setLandingMenuOpen(false);
              }}
              style={{
                width: "100%",
                textAlign: "left",
                padding: isSmallMobile ? "10px 12px" : "12px 16px",
                borderRadius: 12,
                background: T.ink07,
                border: `1px solid ${T.ink12}`,
                fontSize: isSmallMobile ? 13 : 14,
                fontWeight: 500,
                color: T.ink,
                fontFamily: font.sans,
                cursor: "pointer",
                transition: ".2s",
              }}
              onMouseEnter={(e) => (e.target.style.background = T.ink12)}
              onMouseLeave={(e) => (e.target.style.background = T.ink07)}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      <div
        style={{
          textAlign: "center",
          animation: "slideUpLanding .8s ease-out",
          padding: isSmallMobile
            ? "14px 12px 24px"
            : isMobile
              ? "16px 16px 28px"
              : isTablet
                ? "20px 24px 34px"
                : "104px 32px 44px",
          width: "min(1200px, 100%)",
          marginTop: isSmallMobile
            ? headerHeight + 12
            : isMobile
              ? headerHeight + 12
              : isTablet
                ? headerHeight + 12
                : headerHeight,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontFamily: font.serif,
            fontSize: isMobile
              ? "clamp(40px, 12vw, 56px)"
              : "clamp(54px, 6.2vw, 86px)",
            fontWeight: 700,
            lineHeight: 1.03,
            letterSpacing: "-.02em",
            color: T.ink,
            maxWidth: 980,
            margin: "6px auto 24px",
          }}
        >
          <span>From AI confusion</span>
          <span style={{ display: "block", marginTop: 2 }}>
            to <span style={{ color: T.amber }}>clarity</span>.
          </span>
        </p>

        <p
          style={{
            fontFamily: font.sans,
            fontSize: isSmallMobile ? 14 : isMobile ? 16 : 18,
            lineHeight: 1.75,
            color: T.ink60,
            maxWidth: 840,
            margin: "0 auto 24px",
          }}
        >
          Heuristic Labs helps enterprises turn AI ambition into reliable
          business outcomes through strategy, custom systems, and fast applied
          R&D.
        </p>

        <button
          onClick={onExit}
          style={{
            marginTop: 2,
            padding: "13px 34px",
            borderRadius: 100,
            background: T.ink,
            color: T.w,
            border: "none",
            fontFamily: font.sans,
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
            transition: ".3s",
            boxShadow: "0 10px 30px rgba(30,26,16,.16)",
          }}
          onMouseEnter={(e) => (e.target.style.opacity = "0.8")}
          onMouseLeave={(e) => (e.target.style.opacity = "1")}
        >
          Explore ➜
        </button>

        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : isTablet
                ? "repeat(2, minmax(0, 1fr))"
                : "repeat(3, minmax(0, 1fr))",
            gap: isSmallMobile ? 12 : 16,
            marginTop: isSmallMobile ? 20 : 26,
          }}
        >
          {CAPABILITIES.map((item) => (
            <div
              key={item.title}
              style={{
                background: "rgba(255,255,255,.42)",
                border: `1px solid ${T.ink12}`,
                borderRadius: 18,
                padding: isSmallMobile
                  ? "16px 16px 14px"
                  : "20px 20px 18px",
                textAlign: "left",
                backdropFilter: "blur(3px)",
                minHeight: isSmallMobile ? 140 : 152,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  fontFamily: font.serif,
                  fontSize: 22,
                  color: T.ink,
                  marginBottom: 10,
                }}
              >
                {item.title}
              </div>
              <div
                style={{
                  fontFamily: font.sans,
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: T.ink60,
                }}
              >
                {item.detail}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : isTablet
                ? "repeat(2, minmax(0, 1fr))"
                : "repeat(3, minmax(0, 1fr))",
            gap: isSmallMobile ? 12 : 16,
            marginTop: isSmallMobile ? 14 : 16,
          }}
        >
          {STATS.map((item) => (
            <div
              key={item.label}
              style={{
                border: `1px dashed ${T.ink12}`,
                borderRadius: 16,
                padding: isSmallMobile ? "12px 14px" : "14px 16px",
                textAlign: "left",
                background: "rgba(255,255,255,.2)",
                minHeight: isSmallMobile ? 80 : 92,
              }}
            >
              <div
                style={{
                  fontFamily: font.serif,
                  fontSize: isSmallMobile ? 26 : 30,
                  lineHeight: 1,
                  color: T.ink,
                  marginBottom: 6,
                }}
              >
                {item.value}
              </div>
              <div
                style={{
                  fontFamily: font.sans,
                  fontSize: 12,
                  letterSpacing: ".02em",
                  color: T.ink60,
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            marginTop: 12,
            marginBottom: 8,
            fontFamily: font.sans,
            fontSize: 12,
            color: T.ink40,
            letterSpacing: ".03em",
            textTransform: "uppercase",
          }}
        >
          Trusted by teams in manufacturing, legal, healthcare, and enterprise
          SaaS
        </p>
      </div>
    </div>
  );
}
