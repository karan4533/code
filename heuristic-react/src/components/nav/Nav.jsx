import { useState } from "react";
import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Btn } from "../shared/Btn";

export function Nav({ onLogoClick, onHomeClick, onContactClick, isLanding }) {
  const { isMobile, isTablet, isSmallMobile } = useViewport();
  const isDesktopWide = !isTablet;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", onClick: onHomeClick },
    { label: "About", href: "#about" },
    { label: "Service", href: "#services" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Contact", onClick: onContactClick },
  ];

  const handleNavClick = (onClick) => {
    if (onClick) onClick();
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: isLanding ? 200 : 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: isDesktopWide ? "nowrap" : "wrap",
          rowGap: isSmallMobile ? 6 : isMobile ? 8 : isTablet ? 10 : 0,
          padding: isSmallMobile
            ? "8px 12px"
            : isMobile
              ? "10px 16px"
              : isTablet
                ? "0 24px"
                : "0 48px",
          height: isDesktopWide ? 60 : "auto",
          background: "rgba(232,227,217,.94)",
          backdropFilter: "blur(16px)",
          borderBottom: `1px solid ${T.ink12}`,
          fontFamily: font.sans,
        }}
      >
        {/* Hamburger Menu Button - Mobile Only */}
        {isTablet && (
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
              order: 1,
            }}
          >
            <span
              style={{
                width: "100%",
                height: 2,
                background: T.ink,
                borderRadius: 2,
                transform: mobileMenuOpen
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
                opacity: mobileMenuOpen ? 0 : 1,
                transition: ".3s",
              }}
            />
            <span
              style={{
                width: "100%",
                height: 2,
                background: T.ink,
                borderRadius: 2,
                transform: mobileMenuOpen
                  ? "rotate(-45deg) translateY(-11px)"
                  : "none",
                transition: ".3s",
              }}
            />
          </button>
        )}

        {/* Desktop Navigation - Hidden on Mobile */}
        {isDesktopWide && (
          <ul
            style={{
              display: "flex",
              gap: isSmallMobile ? 6 : isMobile ? 8 : 28,
              listStyle: "none",
              padding: 0,
              margin: 0,
              order: 1,
            }}
          >
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.onClick ? (
                  <button
                    onClick={link.onClick}
                    style={{
                      fontSize: 14,
                      fontWeight: 400,
                      color: T.ink60,
                      textDecoration: "none",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      fontFamily: font.sans,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {link.label}
                  </button>
                ) : (
                  <a
                    href={link.href}
                    style={{
                      fontSize: 14,
                      fontWeight: 400,
                      color: T.ink60,
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        )}

        {/* Logo - Desktop Center, Mobile Left */}
        <button
          onClick={onLogoClick}
          style={{
            fontFamily: font.serif,
            fontSize: isSmallMobile ? 15 : isMobile ? 17 : 19,
            fontWeight: 600,
            color: T.ink,
            textDecoration: "none",
            position: isDesktopWide ? "absolute" : "static",
            left: isDesktopWide ? "50%" : "auto",
            transform: isDesktopWide ? "translateX(-50%)" : "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            order: isTablet ? 2 : 2,
            flex: isTablet ? 1 : "auto",
            textAlign: "center",
          }}
        >
          Heuristic Labs
        </button>

        {/* Talk to Us Button - Desktop Only */}
        <div style={{ order: 3, marginLeft: isDesktopWide ? "auto" : "0" }}>
          {isDesktopWide && <Btn dark onClick={onContactClick}>Talk to us</Btn>}
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isTablet && mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: isTablet ? "auto" : "60px",
            left: 0,
            right: 0,
            background: "rgba(232,227,217,.98)",
            backdropFilter: "blur(16px)",
            borderBottom: `1px solid ${T.ink12}`,
            padding: "16px 12px",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            animation: "slideDownMenu .3s ease-out",
            zIndex: 199,
          }}
        >
          {navLinks.map((link) => {
            const itemStyle = {
              width: "100%",
              textAlign: "left",
              padding: "12px 16px",
              borderRadius: 12,
              background: T.ink07,
              border: `1px solid ${T.ink12}`,
              fontSize: 14,
              fontWeight: 500,
              color: T.ink,
              fontFamily: font.sans,
              cursor: "pointer",
              transition: ".2s",
              textDecoration: "none",
              display: "block",
            };

            if (link.onClick) {
              return (
                <button
                  key={link.label}
                  onClick={() => {
                    link.onClick();
                    setMobileMenuOpen(false);
                  }}
                  style={itemStyle}
                  onMouseEnter={(e) => (e.target.style.background = T.ink12)}
                  onMouseLeave={(e) => (e.target.style.background = T.ink07)}
                >
                  {link.label}
                </button>
              );
            } else {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={itemStyle}
                  onMouseEnter={(e) => (e.target.style.background = T.ink12)}
                  onMouseLeave={(e) => (e.target.style.background = T.ink07)}
                >
                  {link.label}
                </a>
              );
            }
          })}
          <Btn
            dark
            onClick={() => handleNavClick(onContactClick)}
            style={{ width: "100%", justifyContent: "center" }}
          >
            Talk to us
          </Btn>
        </div>
      )}
    </>
  );
}
