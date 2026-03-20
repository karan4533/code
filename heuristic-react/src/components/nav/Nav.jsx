import { useState } from "react";
import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import companyLogo from "../../assets/logo (1).png";

export function Nav({ onLogoClick, onHomeClick, onContactClick, isLanding }) {
  const { isMobile, isTablet, isSmallMobile } = useViewport();
  const isDesktopWide = !isTablet;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [brandHovered, setBrandHovered] = useState(false);
  const [brandPressed, setBrandPressed] = useState(false);
  const navHeight = isLanding ? 72 : 60;
  const linkSize = isLanding ? 14 : 13;
  const brandSize = isSmallMobile ? 14 : isMobile ? 16 : isTablet ? 17 : isLanding ? 21 : 19;
  const logoSize = isSmallMobile ? 24 : isMobile ? 27 : isLanding ? 34 : 31;

  const navLinks = [
    { label: "Home", onClick: onHomeClick },
    { label: "About", href: "#about" },
    { label: "Service", href: "#services" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Contact", onClick: onContactClick },
  ];

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
                : isLanding
                  ? "0 56px"
                  : "0 48px",
          height: isDesktopWide ? navHeight : "auto",
          background: isLanding ? "rgba(232,227,217,.9)" : "rgba(232,227,217,.94)",
          backdropFilter: "blur(16px)",
          borderBottom: `1px solid ${T.ink12}`,
          fontFamily: font.sans,
          transition: "padding .25s ease, height .25s ease, background .25s ease",
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
              order: 2,
              marginLeft: "auto",
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
              gap: isSmallMobile ? 6 : isMobile ? 8 : isLanding ? 28 : 24,
              listStyle: "none",
              padding: 0,
              margin: 0,
              order: 2,
              marginLeft: "auto",
            }}
          >
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.onClick ? (
                  <button
                    onClick={link.onClick}
                    style={{
                      fontSize: linkSize,
                      fontWeight: 500,
                      letterSpacing: ".01em",
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
                      fontSize: linkSize,
                      fontWeight: 500,
                      letterSpacing: ".01em",
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

        {/* Logo - Left aligned */}
        <button
          onClick={onLogoClick}
          onMouseEnter={() => setBrandHovered(true)}
          onMouseLeave={() => {
            setBrandHovered(false);
            setBrandPressed(false);
          }}
          onMouseDown={() => setBrandPressed(true)}
          onMouseUp={() => setBrandPressed(false)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: isLanding ? 10 : 8,
            fontFamily: font.serif,
            fontSize: brandSize,
            fontWeight: 700,
            color: T.ink,
            textDecoration: "none",
            background: brandHovered ? "#E8E3D9F0" : "transparent",
            border: "none",
            borderRadius: 10,
            cursor: "pointer",
            padding: isSmallMobile ? "4px 6px" : isLanding ? "6px 10px" : "5px 8px",
            order: 1,
            flex: "0 0 auto",
            textAlign: "left",
            transform: brandPressed ? "translateY(1px)" : "translateY(0)",
            transition: "background .2s ease, transform .15s ease",
          }}
        >
          <img
            src={companyLogo}
            alt="Heuristic Labs logo"
            style={{
              width: logoSize,
              height: logoSize,
              objectFit: "contain",
              filter: "brightness(0) saturate(100%)",
              flexShrink: 0,
              transform: brandHovered ? "scale(1.08)" : "scale(1)",
              transition: "transform .2s ease",
            }}
          />
          <span
            style={{
              whiteSpace: "nowrap",
              letterSpacing: brandHovered ? ".01em" : "0em",
              transition: "letter-spacing .2s ease",
            }}
          >
            Heuristic Labs
          </span>
        </button>
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
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: ".01em",
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
        </div>
      )}
    </>
  );
}
