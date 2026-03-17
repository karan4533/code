import { useState, useEffect } from "react";
import "./styles/global.css";
import { Nav } from "./components/nav";
import { LandingPage } from "./components/pages/LandingPage";
import { Hero } from "./components/pages/Hero";
import { WhoWeAre } from "./components/pages/WhoWeAre";
import { Services } from "./components/pages/Services";
import { CaseStudies } from "./components/pages/CaseStudies";
import { Team } from "./components/pages/Team";
import { FAQ } from "./components/pages/FAQ";
import { Contact } from "./components/pages/Contact";
import { Footer } from "./components/pages/Footer";

export default function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [pendingSection, setPendingSection] = useState(null);

  useEffect(() => {
    if (showLanding || !pendingSection) return;

    const scrollToSection = () => {
      const element = document.getElementById(pendingSection);
      if (!element) return;
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setPendingSection(null);
    };

    const frame = window.requestAnimationFrame(scrollToSection);
    return () => window.cancelAnimationFrame(frame);
  }, [pendingSection, showLanding]);

  const handleLogoClick = () => {
    setShowLanding(true);
    setPendingSection(null);
  };

  const handleHomeClick = () => {
    setShowLanding(false);
    setPendingSection(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLandingAbout = () => {
    setPendingSection("about");
    setShowLanding(false);
  };

  const handleLandingService = () => {
    setPendingSection("services");
    setShowLanding(false);
  };

  const handleLandingCaseStudies = () => {
    setPendingSection("case-studies");
    setShowLanding(false);
  };

  const handleLandingContact = () => {
    setPendingSection("contact");
    setShowLanding(false);
  };

  const handleContactClick = () => {
    if (showLanding) {
      setPendingSection("contact");
      setShowLanding(false);
      return;
    }

    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleExitLanding = () => {
    setShowLanding(false);
    setPendingSection(null);
  };

  return (
    <>
      {showLanding && (
        <LandingPage
          onExit={handleExitLanding}
          onHome={handleHomeClick}
          onAbout={handleLandingAbout}
          onService={handleLandingService}
          onCaseStudies={handleLandingCaseStudies}
          onContact={handleLandingContact}
        />
      )}
      <Nav
        onLogoClick={handleLogoClick}
        onHomeClick={handleHomeClick}
        onContactClick={handleContactClick}
        isLanding={showLanding}
      />
      {!showLanding && (
        <>
          <Hero />
          <WhoWeAre />
          <Services />
          <CaseStudies />
          <Team />
          <FAQ />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}
