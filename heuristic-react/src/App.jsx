import "./styles/global.css";
import { Nav } from "./components/nav";
import { LandingPage } from "./components/pages/LandingPage";
import { WhoWeAre } from "./components/pages/WhoWeAre";
import { Services } from "./components/pages/Services";
import { CaseStudies } from "./components/pages/CaseStudies";
import { Team } from "./components/pages/Team";
import { FAQ } from "./components/pages/FAQ";
import { Contact } from "./components/pages/Contact";
import { Footer } from "./components/pages/Footer";

export default function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleLogoClick = () => {
    scrollToSection("home");
  };

  const handleHomeClick = () => {
    scrollToSection("home");
  };

  const handleLandingAbout = () => {
    scrollToSection("about");
  };

  const handleLandingService = () => {
    scrollToSection("services");
  };

  const handleLandingCaseStudies = () => {
    scrollToSection("case-studies");
  };

  const handleLandingContact = () => {
    scrollToSection("contact");
  };

  const handleContactClick = () => {
    scrollToSection("contact");
  };

  const handleExitLanding = () => {
    scrollToSection("about");
  };

  return (
    <>
      <Nav
        onLogoClick={handleLogoClick}
        onHomeClick={handleHomeClick}
        onContactClick={handleContactClick}
        isLanding={true}
      />
      <LandingPage
        onExit={handleExitLanding}
        onHome={handleHomeClick}
        onAbout={handleLandingAbout}
        onService={handleLandingService}
        onCaseStudies={handleLandingCaseStudies}
        onContact={handleLandingContact}
        showLocalHeader={false}
      />
      <WhoWeAre />
      <Services />
      <CaseStudies />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
