import { useEffect, useState } from "react";
import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import companyLogo from "../../assets/logo (1).png";

export function Nav({ onLogoClick, onHomeClick, onContactClick, isLanding }) {
  const { isMobile, isTablet, isSmallMobile } = useViewport();
  const isDesktopWide = !isTablet;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
  const [activeDesktopSubmenu, setActiveDesktopSubmenu] = useState(null);
  const [brandHovered, setBrandHovered] = useState(false);
  const [brandPressed, setBrandPressed] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navHeight = isLanding ? 74 : 60;
  const linkSize = isLanding ? 14 : 13;
  const brandSize = isSmallMobile ? 14 : isMobile ? 15 : isTablet ? 16 : isLanding ? 19 : 18;
  const logoSize = isSmallMobile ? 23 : isMobile ? 25 : isLanding ? 30 : 28;

  const navLinks = [
    { label: "Home", onClick: onHomeClick },
    { label: "About", href: "#about" },
    { label: "Leadership", href: "#team" },
    { label: "Service", href: "#services" },
    {
      label: "Case Studies",
      href: "#case-studies",
      subLinks: [
        { label: "Case Study", href: "#case-studies" },
        { label: "Research Updates", href: "#research-updates" },
      ],
    },
    { label: "Contact", onClick: onContactClick },
  ];

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!activeDesktopSubmenu) return;

    const onDocumentClick = () => setActiveDesktopSubmenu(null);
    window.addEventListener("click", onDocumentClick);
    return () => window.removeEventListener("click", onDocumentClick);
  }, [activeDesktopSubmenu]);

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: isSmallMobile ? 8 : isMobile ? 10 : 12,
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
                ? "0 20px"
                : isLanding
                  ? "0 26px"
                  : "0 24px",
          height: isDesktopWide ? navHeight : "auto",
          width: isDesktopWide ? "min(1240px, calc(100% - 44px))" : "calc(100% - 16px)",
          margin: "0 auto",
          borderRadius: isDesktopWide ? 999 : 20,
          overflow: isDesktopWide ? "visible" : "hidden",
          isolation: "isolate",
          background: isScrolled ? "#eee9e0" : "#eee9e0",
          backdropFilter: "none",
          WebkitBackdropFilter: "none",
          border: `1px solid ${isScrolled ? "rgba(30,26,16,.1)" : "rgba(30,26,16,.07)"}`,
          backgroundClip: "padding-box",
          boxShadow: isScrolled
            ? "0 4px 12px rgba(20,16,8,.06)"
            : "0 2px 8px rgba(20,16,8,.05)",
          fontFamily: font.sans,
          transition:
            "padding .25s ease, height .25s ease, background .25s ease, box-shadow .25s ease, border-color .25s ease",
        }}
      >
        {/* Hamburger Menu Button - Mobile Only */}
        {isTablet && (
          <button
            onClick={() => {
              setMobileMenuOpen((prev) => {
                const next = !prev;
                if (!next) setActiveMobileSubmenu(null);
                return next;
              });
            }}
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
              alignItems: "center",
              gap: isSmallMobile ? 6 : isMobile ? 8 : isLanding ? 30 : 24,
              listStyle: "none",
              padding: 0,
              margin: 0,
              order: 2,
              marginLeft: "auto",
            }}
          >
            {navLinks.map((link) => (
              <li key={link.label} style={{ position: "relative" }}>
                {link.onClick ? (
                  <button
                    onClick={link.onClick}
                    style={{
                      fontSize: linkSize,
                      fontWeight: 600,
                      letterSpacing: ".015em",
                      color: "rgba(30,26,16,.74)",
                      textDecoration: "none",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      borderRadius: 10,
                      padding: "6px 4px",
                      fontFamily: font.sans,
                      whiteSpace: "nowrap",
                      transition: "color .2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "rgba(30,26,16,.96)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(30,26,16,.74)";
                    }}
                  >
                    {link.label}
                  </button>
                ) : link.subLinks ? (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setActiveDesktopSubmenu((prev) =>
                        prev === link.label ? null : link.label
                      );
                    }}
                    style={{
                      fontSize: linkSize,
                      fontWeight: 600,
                      letterSpacing: ".015em",
                      color: "rgba(30,26,16,.74)",
                      textDecoration: "none",
                      background: "transparent",
                      border: "none",
                      borderRadius: 10,
                      padding: "6px 4px",
                      whiteSpace: "nowrap",
                      transition: "color .2s ease",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      cursor: "pointer",
                      fontFamily: font.sans,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "rgba(30,26,16,.96)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(30,26,16,.74)";
                    }}
                  >
                    <span>{link.label}</span>
                    <span
                      aria-hidden="true"
                      style={{
                        width: 7,
                        height: 7,
                        borderRight: "1.6px solid rgba(30,26,16,.72)",
                        borderBottom: "1.6px solid rgba(30,26,16,.72)",
                        transform:
                          activeDesktopSubmenu === link.label
                            ? "rotate(-135deg) translateY(-1px)"
                            : "rotate(45deg) translateY(-1px)",
                        transition: "transform .2s ease",
                      }}
                    />
                  </button>
                ) : (
                  <a
                    href={link.href}
                    style={{
                      fontSize: linkSize,
                      fontWeight: 600,
                      letterSpacing: ".015em",
                      color: "rgba(30,26,16,.74)",
                      textDecoration: "none",
                      borderRadius: 10,
                      padding: "6px 4px",
                      whiteSpace: "nowrap",
                      transition: "color .2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "rgba(30,26,16,.96)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(30,26,16,.74)";
                    }}
                  >
                    {link.label}
                  </a>
                )}

                {link.subLinks && activeDesktopSubmenu === link.label && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      position: "absolute",
                      top: "calc(100% + 10px)",
                      left: 0,
                      minWidth: 180,
                      background: "rgba(244,240,233,.98)",
                      border: "1px solid rgba(30,26,16,.11)",
                      borderRadius: 12,
                      boxShadow: "0 10px 22px rgba(20,16,8,.12)",
                      padding: 6,
                      zIndex: 260,
                    }}
                  >
                    {link.subLinks.map((subLink) => (
                      <a
                        key={subLink.label}
                        href={subLink.href}
                        onClick={() => setActiveDesktopSubmenu(null)}
                        style={{
                          display: "block",
                          fontSize: 13,
                          fontWeight: 600,
                          letterSpacing: ".012em",
                          color: "rgba(30,26,16,.8)",
                          textDecoration: "none",
                          borderRadius: 8,
                          padding: "9px 10px",
                          transition: "background .2s ease, color .2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "rgba(232,226,214,.9)";
                          e.currentTarget.style.color = "rgba(30,26,16,.98)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                          e.currentTarget.style.color = "rgba(30,26,16,.8)";
                        }}
                      >
                        {subLink.label}
                      </a>
                    ))}
                  </div>
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
            background: brandHovered ? "rgba(236,230,219,.72)" : "transparent",
            border: "none",
            borderRadius: 14,
            cursor: "pointer",
            padding: isSmallMobile ? "4px 6px" : isLanding ? "7px 10px" : "5px 8px",
            order: 1,
            flex: "0 0 auto",
            textAlign: "left",
            transform: brandPressed ? "translateY(1px)" : "translateY(0)",
            transition: "background .2s ease, transform .15s ease, box-shadow .2s ease",
            boxShadow: brandHovered ? "0 2px 8px rgba(20,16,8,.04)" : "none",
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
            top: isSmallMobile ? 66 : 74,
            left: isSmallMobile ? 8 : 12,
            right: isSmallMobile ? 8 : 12,
            background: "rgba(244,240,233,.95)",
            backdropFilter: "blur(18px) saturate(130%)",
            border: `1px solid rgba(30,26,16,.12)`,
            borderRadius: 18,
            boxShadow: "0 12px 28px rgba(20,16,8,.12)",
            padding: "14px 10px",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            animation: "slideDownMenu .3s ease-out",
            zIndex: 210,
          }}
        >
          {navLinks.map((link) => {
            const itemStyle = {
              width: "100%",
              textAlign: "left",
              padding: "12px 16px",
              borderRadius: 12,
              background: "rgba(236,230,219,.82)",
              border: `1px solid rgba(30,26,16,.1)`,
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: ".01em",
              color: T.ink,
              fontFamily: font.sans,
              cursor: "pointer",
              transition: "background .2s ease, transform .2s ease",
              textDecoration: "none",
              display: "block",
            };

            const subItemStyle = {
              ...itemStyle,
              width: "calc(100% - 16px)",
              marginLeft: 16,
              padding: "10px 14px",
              fontSize: 12,
              background: "rgba(233,227,216,.7)",
            };

            const mobileArrowStyle = {
              width: 7,
              height: 7,
              borderRight: "1.6px solid rgba(30,26,16,.72)",
              borderBottom: "1.6px solid rgba(30,26,16,.72)",
              transform:
                activeMobileSubmenu === link.label
                  ? "rotate(-135deg) translateY(-1px)"
                  : "rotate(45deg) translateY(-1px)",
              transition: "transform .2s ease",
              marginLeft: 10,
              flexShrink: 0,
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
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(232,226,214,.96)";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(236,230,219,.82)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {link.label}
                </button>
              );
            } else if (link.subLinks) {
              return (
                <div key={link.label}>
                  <button
                    onClick={() => {
                      setActiveMobileSubmenu((prev) =>
                        prev === link.label ? null : link.label
                      );
                    }}
                    style={{
                      ...itemStyle,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      background:
                        activeMobileSubmenu === link.label
                          ? "rgba(232,226,214,.96)"
                          : "rgba(236,230,219,.82)",
                    }}
                  >
                    <span>{link.label}</span>
                    <span aria-hidden="true" style={mobileArrowStyle} />
                  </button>

                  {activeMobileSubmenu === link.label &&
                    link.subLinks.map((subLink) => (
                        <a
                          key={`${link.label}-${subLink.label}`}
                          href={subLink.href}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setActiveMobileSubmenu(null);
                          }}
                          style={{
                            ...subItemStyle,
                            color: T.ink,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "rgba(230,224,212,.92)";
                            e.currentTarget.style.transform = "translateY(-1px)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "rgba(233,227,216,.7)";
                            e.currentTarget.style.transform = "translateY(0)";
                          }}
                        >
                          {subLink.label}
                        </a>
                      ))}
                </div>
              );
            } else {
              return (
                <div key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={itemStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(232,226,214,.96)";
                      e.currentTarget.style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(236,230,219,.82)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {link.label}
                  </a>
                </div>
              );
            }
          })}
        </div>
      )}
    </>
  );
}
