import { useEffect, useState } from "react";
import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { STATS } from "../../constants/data/customizations";

export function LandingPage({
  onExit,
  onHome,
  onAbout,
  onService,
  onCaseStudies,
  onContact,
  showLocalHeader = true,
}) {
  const { isMobile, isTablet, isSmallMobile } = useViewport();
  const [landingMenuOpen, setLandingMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const introEase = "cubic-bezier(0.16,1,0.3,1)";
  const headerHeight = isSmallMobile ? 56 : isMobile ? 60 : isTablet ? 64 : 72;
  const globalNavOffset = isSmallMobile ? 62 : isMobile ? 70 : isTablet ? 78 : 86;
  const heroMinHeight = isTablet ? "auto" : "100svh";
  const heroContentPadding = showLocalHeader
    ? isSmallMobile
      ? "8px 12px 24px"
      : isMobile
        ? "11px 16px 28px"
        : isTablet
          ? "16px 24px 34px"
          : "46px 28px 34px"
    : isSmallMobile
      ? "6px 12px 20px"
      : isMobile
        ? "8px 16px 22px"
        : isTablet
          ? "10px 24px 24px"
          : "28px 28px 20px";
  const parallaxOffset = Math.min(scrollY * 0.05, 18);
  const contentLift = Math.min(scrollY * 0.02, 8);
  const rotatingPhrases = [
    "Build your next AI launch.",
    "Ship outcomes, not prototypes.",
    "Turn strategy into working systems.",
  ];
  const companyList = [
    "GAP",
    "AJIO",
    "NAUTICA",
    "LIFESTYLE",
    "MYNTRA",
    "FRENCH CONNECTION",
    "HAMLEYS",
    "GERBER",
  ];
  const marqueeCompanies = [...companyList, ...companyList];
  const landingLinks = [
    { label: "Home", onClick: onHome },
    { label: "About", onClick: onAbout },
    { label: "Service", onClick: onService },
    { label: "Case Studies", onClick: onCaseStudies },
    { label: "Contact", onClick: onContact },
  ];

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const phraseTimer = window.setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 2200);

    return () => window.clearInterval(phraseTimer);
  }, [rotatingPhrases.length]);

  return (
    <div
      id="home"
      style={{
        position: "relative",
        width: "100%",
        scrollMarginTop: isSmallMobile ? 78 : isMobile ? 84 : isTablet ? 90 : 96,
        minHeight: heroMinHeight,
        background: "var(--site-base-bg)",
        display: "flex",
        alignItems: isTablet ? "flex-start" : "center",
        justifyContent: "center",
        paddingBottom: isTablet ? (isSmallMobile ? 8 : 14) : 0,
        animation: `landingCinematicIn .95s ${introEase} both`,
        overflowX: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          opacity: 0.52,
          background:
            "radial-gradient(42rem 30rem at 15% 20%, rgba(241,177,86,0.22), transparent 70%), radial-gradient(34rem 28rem at 82% 24%, rgba(78,93,206,0.16), transparent 72%), radial-gradient(28rem 20rem at 55% 78%, rgba(24,96,171,0.12), transparent 68%)",
          transform: `translateY(${parallaxOffset * -0.65}px)`,
          transition: "transform .35s ease-out",
          animation: "heroBlobFloat 14s ease-in-out infinite",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          opacity: 0.12,
          background:
            "linear-gradient(rgba(30,26,16,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(30,26,16,0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(circle at 50% 40%, rgba(0,0,0,0.7), rgba(0,0,0,0.05) 72%)",
          transform: `translateY(${parallaxOffset * -0.35}px)`,
          transition: "transform .35s ease-out",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          opacity: 0.07,
          mixBlendMode: "multiply",
          backgroundImage:
            "radial-gradient(rgba(27,24,16,0.3) 0.8px, transparent 0.9px)",
          backgroundSize: "3px 3px",
        }}
      />
      {showLocalHeader && (
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
            animation: `revealSoftUp .7s ${introEase} .06s both`,
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
      )}

      {/* Mobile Menu Dropdown - Landing Page */}
      {showLocalHeader && (isMobile || isTablet) && landingMenuOpen && (
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
          animation: `revealSoftUp .9s ${introEase} .12s both`,
          padding: heroContentPadding,
          width: "min(1080px, 100%)",
          marginTop: showLocalHeader ? headerHeight : globalNavOffset,
          alignSelf: isMobile || isTablet ? "flex-start" : "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
          transform: `translateY(${contentLift * -1}px)`,
          transition: "transform .35s ease-out",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            width: isMobile ? 210 : 300,
            height: isMobile ? 210 : 300,
            borderRadius: "50%",
            top: isMobile ? -36 : -48,
            left: "50%",
            transform: "translateX(-50%)",
            background:
              "conic-gradient(from 50deg, rgba(241,177,86,.26), rgba(78,93,206,.12), rgba(24,96,171,.18), rgba(241,177,86,.26))",
            animation: "heroHaloSpin 18s linear infinite",
            opacity: 0.26,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: isSmallMobile ? 8 : 10,
            marginTop: isSmallMobile ? 8 : isMobile ? 10 : 14,
            marginBottom: isSmallMobile ? 4 : 8,
            position: "relative",
            zIndex: 1,
            animation: `revealSoftUp .78s ${introEase} .08s both`,
          }}
        >
          <div
            aria-hidden="true"
            style={{
              width: isSmallMobile ? 140 : isMobile ? 170 : 220,
              height: 12,
              position: "relative",
              opacity: 0.72,
            }}
          >
            <span
              style={{
                position: "absolute",
                left: 0,
                top: "50%",
                width: "40%",
                height: 1,
                background:
                  "linear-gradient(90deg, rgba(30,26,16,0), rgba(30,26,16,.28), rgba(30,26,16,0))",
              }}
            />
            <span
              style={{
                position: "absolute",
                right: 0,
                top: "50%",
                width: "40%",
                height: 1,
                background:
                  "linear-gradient(90deg, rgba(30,26,16,0), rgba(30,26,16,.28), rgba(30,26,16,0))",
              }}
            />
            <span
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%,-50%)",
                color: "rgba(30,26,16,.36)",
                fontSize: isSmallMobile ? 13 : 16,
                lineHeight: 1,
              }}
            >
              ✦
            </span>
          </div>

          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: isSmallMobile ? "8px 14px" : "10px 18px",
              borderRadius: 999,
              fontFamily: font.sans,
              fontSize: isSmallMobile ? 12 : 13,
              fontWeight: 600,
              letterSpacing: ".01em",
              color: "#4f57cc",
              background:
                "linear-gradient(180deg, rgba(234,239,255,.92), rgba(226,233,255,.76))",
              border: "1px solid rgba(126,142,232,.26)",
              boxShadow: "0 6px 18px rgba(79,87,204,.12)",
            }}
          >
            Clarity-First AI Systems for Enterprises
          </span>
        </div>

        <p
          style={{
            fontFamily: font.serif,
            fontSize: isMobile
              ? "clamp(44px, 11.6vw, 62px)"
              : "clamp(60px, 6.7vw, 90px)",
            fontWeight: 700,
            lineHeight: 1.03,
            letterSpacing: "-.028em",
            color: T.ink,
            maxWidth: 860,
            margin: isSmallMobile
              ? "10px auto 20px"
              : isMobile
                ? "10px auto 22px"
                : "8px auto 18px",
            animation: `heroHeadlineIn .95s ${introEase} .14s both`,
            position: "relative",
            zIndex: 1,
          }}
        >
          <span>From AI confusion</span>
          <span style={{ display: "block", marginTop: 2 }}>
            to{" "}
            <span
              style={{
                background:
                  "linear-gradient(100deg, #d47f21 0%, #f1b156 44%, #6f7bd6 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                filter: "drop-shadow(0 4px 10px rgba(111,123,214,.14))",
              }}
            >
              clarity
            </span>
            .
          </span>
        </p>

        <div
          style={{
            height: isSmallMobile ? 34 : isMobile ? 40 : 46,
            overflow: "hidden",
            margin: isSmallMobile ? "0 auto 10px" : "0 auto 12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <p
            key={phraseIndex}
            style={{
              fontFamily: font.serif,
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: isSmallMobile
                ? "clamp(22px, 6.6vw, 28px)"
                : isMobile
                  ? "clamp(25px, 5.8vw, 33px)"
                  : "clamp(30px, 3.4vw, 40px)",
              lineHeight: 1.04,
              letterSpacing: "-.02em",
              color: "rgba(30,26,16,.74)",
              animation: `heroPhraseSlideUp .58s ${introEase} both`,
            }}
          >
            {rotatingPhrases[phraseIndex]}
          </p>
        </div>

        <p
          style={{
            fontFamily: font.sans,
            fontSize: isSmallMobile ? 13 : isMobile ? 15 : 16,
            lineHeight: 1.76,
            color: T.ink60,
            maxWidth: 760,
            margin: "0 auto 16px",
            animation: `revealSoftUp .9s ${introEase} .3s both`,
            position: "relative",
            zIndex: 1,
          }}
        >
          Heuristic Labs helps enterprises turn AI ambition into reliable
          business outcomes through strategy, custom systems, and fast applied
          R&D.
        </p>

        <div
          style={{
            width: "100%",
            marginTop: isSmallMobile ? 6 : 10,
            paddingTop: isSmallMobile ? 8 : 10,
            paddingBottom: isSmallMobile ? 4 : 7,
            borderTop: `1px dashed ${T.ink12}`,
            position: "relative",
            overflow: "hidden",
            background: "linear-gradient(180deg, rgba(255,255,255,.14), rgba(255,255,255,0))",
            borderRadius: 16,
          }}
        >
          <p
            style={{
              marginBottom: isSmallMobile ? 10 : 12,
              fontFamily: font.sans,
              fontSize: isSmallMobile ? 12 : 14,
              color: "rgba(30,26,16,.6)",
              letterSpacing: ".015em",
              textAlign: "center",
            }}
          >
            Loved by teams who ship every week
          </p>

          <div
            style={{
              position: "relative",
              overflow: "hidden",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: isSmallMobile ? 28 : isMobile ? 38 : 56,
                width: "max-content",
                animation: `heroCompanyMarquee ${isMobile ? 26 : 34}s linear infinite`,
                padding: isSmallMobile ? "8px 0 5px" : "10px 0 6px",
              }}
            >
              {marqueeCompanies.map((name, idx) => (
                <span
                  key={`${name}-${idx}`}
                  style={{
                    fontFamily: font.sans,
                    fontSize: isSmallMobile ? 18 : isMobile ? 20 : 24,
                    fontWeight: 700,
                    color: "rgba(30,26,16,.56)",
                    letterSpacing: ".04em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
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
            marginTop: isSmallMobile ? 18 : 24,
          }}
        >
          {STATS.map((item, i) => (
            <div
              key={item.label}
              style={{
                border: `1px dashed ${T.ink12}`,
                borderRadius: 16,
                padding: isSmallMobile ? "10px 12px" : "12px 14px",
                textAlign: "center",
                background: "linear-gradient(160deg, rgba(255,255,255,.36), rgba(255,255,255,.18))",
                minHeight: isSmallMobile ? 72 : 84,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                animation: `revealSoftUp .72s ${introEase} ${0.72 + i * 0.08}s both`,
                transition:
                  "transform .28s ease, box-shadow .28s ease, border-color .28s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 14px rgba(30,26,16,.07)";
                e.currentTarget.style.borderColor = "rgba(30,26,16,.24)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = T.ink12;
              }}
            >
              <div
                style={{
                  fontFamily: font.serif,
                  fontSize: isSmallMobile ? 22 : 26,
                  lineHeight: 1,
                  color: T.ink,
                  marginBottom: 5,
                }}
              >
                {item.value}
              </div>
              <div
                style={{
                  fontFamily: font.sans,
                  fontSize: 11,
                  letterSpacing: ".02em",
                  color: T.ink60,
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
