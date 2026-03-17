import { useState } from "react";
import { T, font } from "../../constants/designTokens";
import { useViewport } from "../../hooks/useViewport";
import { Reveal, Btn } from "../shared";

export function Contact() {
  const { isMobile, isTablet, isSmallMobile } = useViewport();
  const [chips, setChips] = useState([]);
  const toggle = (c) =>
    setChips((p) =>
      p.includes(c)
        ? p.filter((x) => x !== c)
        : [...p, c]
    );
  const chipList = [
    "Custom AI Build",
    "AI Strategy",
    "GenAI Automation",
    "Need to scale operations",
    "R&D Partnership",
    "Security & compliance",
  ];

  return (
    <section
      id="contact"
      style={{
        background: T.bg2,
        padding: isSmallMobile
          ? "40px 0"
          : isMobile
            ? "56px 0"
            : "80px 0",
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                isTablet ? "1fr" : "1fr 1.4fr",
              gap: isSmallMobile ? 20 : 32,
              alignItems: "start",
            }}
          >
            {/* left teal card */}
            <div
              style={{
                borderRadius: 20,
                overflow: "hidden",
                background: `linear-gradient(160deg, ${T.teal} 0%, ${T.tealMid} 50%, ${T.tealDk} 100%)`,
                padding: isSmallMobile
                  ? "32px 28px"
                  : "48px 40px",
                minHeight: isSmallMobile
                  ? 340
                  : 420,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{
                    color: "#F5C842",
                    fontSize: isSmallMobile ? 14 : 18,
                    letterSpacing: 2,
                    marginBottom: 8,
                  }}
                >
                  ★★★★★
                </div>
                <div
                  style={{
                    fontSize: isSmallMobile
                      ? 12
                      : 13,
                    color: T.w60,
                    marginBottom: 28,
                    fontFamily: font.sans,
                  }}
                >
                  Helped over 10+ enterprises
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: font.serif,
                    fontSize: 32,
                    fontWeight: 700,
                    color: T.w,
                    lineHeight: 1.15,
                    letterSpacing: "-.02em",
                    marginBottom: 16,
                  }}
                >
                  Start your AI journey{" "}
                  <span
                    style={{
                      color: T.amber,
                      fontStyle: "italic",
                      fontWeight: 700,
                    }}
                  >
                    today.
                  </span>
                </div>
                <p
                  style={{
                    fontSize: 14,
                    color: T.w60,
                    lineHeight: 1.65,
                    fontFamily: font.sans,
                  }}
                >
                  Talk to us free 30-minute assessment and we'll show you
                  exactly where AI can save you time and money.
                </p>
              </div>
            </div>

            {/* right form */}
            <div style={{ padding: "8px 0" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    isMobile ? "1fr" : "1fr 1fr",
                  gap: isSmallMobile ? 10 : 12,
                  marginBottom: 14,
                }}
              >
                {["Name*", "Email*"].map((ph) => (
                  <input
                    key={ph}
                    placeholder={ph}
                    style={{
                      width: "100%",
                      padding: isSmallMobile
                        ? "10px 12px"
                        : "12px 16px",
                      background: T.bg,
                      border: `1.5px solid ${T.ink12}`,
                      borderRadius: 12,
                      fontFamily: font.sans,
                      fontSize: isSmallMobile
                        ? 13
                        : 14,
                      color: T.ink,
                      outline: "none",
                    }}
                  />
                ))}
              </div>
              <p
                style={{
                  fontSize: isSmallMobile
                    ? 12
                    : 13,
                  color: T.ink60,
                  marginBottom: 10,
                  fontFamily: font.sans,
                }}
              >
                What services are you interested in?
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    isMobile ? "1fr" : "1fr 1fr",
                  gap: isSmallMobile ? 6 : 8,
                  marginBottom: 14,
                }}
              >
                {chipList.map((c) => (
                  <div
                    key={c}
                    onClick={() => toggle(c)}
                    style={{
                      padding: isSmallMobile
                        ? "7px 10px"
                        : "9px 14px",
                      borderRadius: 10,
                      cursor: "pointer",
                      border: chips.includes(c)
                        ? `1.5px solid ${T.ink}`
                        : `1.5px solid ${T.ink12}`,
                      background: chips.includes(c)
                        ? T.ink07
                        : "transparent",
                      fontSize: isSmallMobile
                        ? 11
                        : 12,
                      fontWeight: 500,
                      color: chips.includes(c)
                        ? T.ink
                        : T.ink60,
                      display: "flex",
                      alignItems: "center",
                      gap: isSmallMobile ? 5 : 7,
                      fontFamily: font.sans,
                      transition: ".2s",
                    }}
                  >
                    <span
                      style={{
                        width: isSmallMobile ? 12 : 14,
                        height: isSmallMobile ? 12 : 14,
                        borderRadius: "50%",
                        border: chips.includes(c)
                          ? `1.5px solid ${T.ink}`
                          : `1.5px solid ${T.ink40}`,
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {chips.includes(c) && (
                        <span
                          style={{
                            width: 5,
                            height: 5,
                            borderRadius: "50%",
                            background: T.ink,
                            display: "block",
                          }}
                        />
                      )}
                    </span>
                    {c}
                  </div>
                ))}
              </div>
              <textarea
                placeholder="Tell us about your business…"
                style={{
                  width: "100%",
                  padding: isSmallMobile
                    ? "10px 12px"
                    : "12px 16px",
                  height: isSmallMobile ? 80 : 100,
                  resize: "none",
                  background: T.bg,
                  border: `1.5px solid ${T.ink12}`,
                  borderRadius: 12,
                  fontFamily: font.sans,
                  fontSize: isSmallMobile
                    ? 13
                    : 14,
                  color: T.ink,
                  outline: "none",
                  marginBottom: 14,
                }}
              />
              <button
                style={{
                  width: "100%",
                  padding: isSmallMobile ? 12 : 15,
                  borderRadius: 100,
                  background: T.ink,
                  color: T.w,
                  fontFamily: font.sans,
                  fontSize: isSmallMobile ? 13 : 15,
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                Talk to us call
                <span
                  style={{
                    width: isSmallMobile ? 18 : 22,
                    height: isSmallMobile ? 18 : 22,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,.15)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: isSmallMobile ? 9 : 11,
                  }}
                >
                  ↗
                </span>
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
