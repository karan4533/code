import { useEffect, useState } from "react";
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
  showLocalHeader = true,
}) {
  const { isMobile, isTablet, isSmallMobile } = useViewport();
  const [landingMenuOpen, setLandingMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const introEase = "cubic-bezier(0.16,1,0.3,1)";
  const headerHeight = isSmallMobile ? 56 : isMobile ? 60 : isTablet ? 64 : 72;
  const parallaxOffset = Math.min(scrollY * 0.08, 26);
  const contentLift = Math.min(scrollY * 0.035, 12);
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

  return (
    <div
      id="home"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        background: `radial-gradient(circle at 80% 15%, ${T.bg3} 0%, ${T.bg} 40%, ${T.bg} 100%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animation: `landingCinematicIn .95s ${introEase} both`,
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          opacity: 0.65,
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
          opacity: 0.18,
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
          opacity: 0.11,
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
          padding: isSmallMobile
            ? "8px 12px 24px"
            : isMobile
              ? "8px 16px 28px"
              : isTablet
                ? "12px 24px 34px"
                    : "86px 28px 34px",
                  width: "min(1080px, 100%)",
          marginTop: showLocalHeader ? headerHeight : 0,
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
            opacity: 0.42,
            pointerEvents: "none",
          }}
        />
        <p
          style={{
            fontFamily: font.serif,
            fontSize: isMobile
              ? "clamp(48px, 12.2vw, 68px)"
              : "clamp(66px, 7.1vw, 100px)",
            fontWeight: 700,
            lineHeight: 1.03,
            letterSpacing: "-.028em",
            color: T.ink,
            maxWidth: 860,
            margin: "8px auto 22px",
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
              }}
            >
              clarity
            </span>
            .
          </span>
        </p>

        <p
          style={{
            fontFamily: font.sans,
            fontSize: isSmallMobile ? 13 : isMobile ? 15 : 16,
            lineHeight: 1.76,
            color: T.ink60,
            maxWidth: 760,
            margin: "0 auto 22px",
            animation: `revealSoftUp .9s ${introEase} .3s both`,
            position: "relative",
            zIndex: 1,
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
            background: "linear-gradient(120deg, #221f17 0%, #393327 100%)",
            color: T.w,
            border: "none",
            fontFamily: font.sans,
            fontSize: 13,
            fontWeight: 600,
            cursor: "pointer",
            transition:
              "transform .26s ease, box-shadow .26s ease, filter .26s ease, opacity .26s ease",
            boxShadow: "0 12px 28px rgba(30,26,16,.22)",
            animation: `heroButtonPop .72s ${introEase} .44s both`,
            position: "relative",
            zIndex: 1,
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-2px) scale(1.03)";
            e.target.style.boxShadow = "0 16px 34px rgba(30,26,16,.3)";
            e.target.style.filter = "brightness(1.05)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0) scale(1)";
            e.target.style.boxShadow = "0 12px 28px rgba(30,26,16,.22)";
            e.target.style.filter = "brightness(1)";
          }}
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
            marginTop: isSmallMobile ? 20 : 28,
          }}
        >
          {CAPABILITIES.map((item, i) => (
            <div
              key={item.title}
              style={{
                background: "rgba(255,255,255,.42)",
                border: `1px solid ${T.ink12}`,
                borderRadius: 18,
                padding: isSmallMobile
                  ? "14px 14px 12px"
                  : "17px 17px 15px",
                textAlign: "left",
                backdropFilter: "blur(3px)",
                minHeight: isSmallMobile ? 126 : 138,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                animation: `revealSoftUp .72s ${introEase} ${0.52 + i * 0.08}s both`,
                transition:
                  "transform .28s ease, box-shadow .28s ease, border-color .28s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 16px 28px rgba(30,26,16,.12)";
                e.currentTarget.style.borderColor = "rgba(30,26,16,.2)";
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
                  fontSize: isSmallMobile ? 18 : 20,
                  color: T.ink,
                  marginBottom: 8,
                }}
              >
                {item.title}
              </div>
              <div
                style={{
                  fontFamily: font.sans,
                  fontSize: isSmallMobile ? 13 : 14,
                  lineHeight: 1.6,
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
            marginTop: isSmallMobile ? 14 : 18,
          }}
        >
          {STATS.map((item, i) => (
            <div
              key={item.label}
              style={{
                border: `1px dashed ${T.ink12}`,
                borderRadius: 16,
                padding: isSmallMobile ? "10px 12px" : "12px 14px",
                textAlign: "left",
                background: "rgba(255,255,255,.2)",
                minHeight: isSmallMobile ? 72 : 84,
                animation: `revealSoftUp .72s ${introEase} ${0.72 + i * 0.08}s both`,
                transition:
                  "transform .28s ease, box-shadow .28s ease, border-color .28s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 20px rgba(30,26,16,.1)";
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

        <p
          style={{
            marginTop: 10,
            marginBottom: 8,
            fontFamily: font.sans,
            fontSize: 11,
            color: T.ink40,
            letterSpacing: ".03em",
            textTransform: "uppercase",
          }}
        >

        </p>
      </div>
    </div>
  );
}
