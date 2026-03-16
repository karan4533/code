import { useEffect, useState } from "react";
import "./App.css";

const faqItems = [
  {
    question: "How quickly can we launch something in production?",
    answer:
      "Most teams reach a production-ready first workflow in 6-10 weeks, depending on integration access and governance approvals.",
  },
  {
    question: "Can you work with strict compliance and security constraints?",
    answer:
      "Yes. We design with auditability, data boundaries, and policy controls from the first architecture draft.",
  },
  {
    question: "Do you replace internal teams?",
    answer:
      "No. We partner with internal teams, transfer capability, and leave behind maintainable systems and playbooks.",
  },
];

function App() {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const revealNodes = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    revealNodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header" aria-label="Site header">
        <div className="container nav">
          <a className="brand" href="#top">
            <span className="brand-dot" aria-hidden="true"></span>
            Heuristic Labs
          </a>

          <nav aria-label="Primary navigation">
            <ul className="nav-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#process">Process</a>
              </li>
              <li>
                <a href="#cases">Case studies</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          <a className="btn btn-primary" href="#contact">
            Book a strategy call
          </a>
        </div>
      </header>

      <main id="main-content">
        <section id="top" className="hero container" aria-labelledby="hero-title">
          <div className="hero-grid" data-reveal>
            <article>
              <p className="pill">Applied AI Lab</p>
              <h1 id="hero-title">
                Lead your AI transformation with systems that ship and scale.
              </h1>
              <p>
                We partner with enterprise teams to design secure AI workflows, deploy
                production assistants, and measure impact in weeks, not quarters.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#contact">
                  Start your roadmap
                </a>
                <a className="btn btn-secondary" href="#cases">
                  See outcomes
                </a>
              </div>
            </article>

            <aside className="hero-card" aria-label="Company impact metrics">
              <h2 className="hero-card-title">Execution-first AI.</h2>
              <p className="hero-card-copy">
                Built for regulated industries, mission-critical operations, and teams
                that need measurable value.
              </p>
              <ul className="hero-kpis">
                <li>
                  <span>Automation uplift</span>
                  <strong>92%</strong>
                </li>
                <li>
                  <span>Avg. first deployment</span>
                  <strong>8 weeks</strong>
                </li>
                <li>
                  <span>Leadership experience</span>
                  <strong>40+ years</strong>
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <section id="about" className="section" aria-labelledby="about-title">
          <div className="container">
            <div className="split" data-reveal>
              <div>
                <p className="pill">About</p>
                <h2 id="about-title" className="section-title">
                  An enterprise AI lab built for real operators.
                </h2>
              </div>
              <p>
                We remove noise from AI adoption. Every engagement starts with your
                workflows, risk profile, and existing systems. Then we build the
                smallest valuable model stack that can prove ROI quickly.
              </p>
            </div>

            <div className="cards" data-reveal>
              <article className="card">
                <h3>Pragmatic architecture</h3>
                <p>
                  We choose models and orchestration patterns based on business
                  constraints, not trends.
                </p>
              </article>
              <article className="card">
                <h3>Compliance by design</h3>
                <p>
                  Security, traceability, and policy controls are designed in from day
                  one.
                </p>
              </article>
              <article className="card">
                <h3>Delivery accountability</h3>
                <p>
                  Each sprint ties to measurable operational outcomes and ownership in
                  your team.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="services" className="section" aria-labelledby="services-title">
          <div className="container">
            <div className="split" data-reveal>
              <div>
                <p className="pill">Services</p>
                <h2 id="services-title" className="section-title">
                  What we build
                </h2>
              </div>
              <p>
                From strategy to production systems, our scope covers architecture,
                implementation, and enablement.
              </p>
            </div>

            <ul className="service-list" data-reveal>
              <li>
                <h3>Enterprise AI assistants and copilots</h3>
                <p>
                  Agentic retrieval systems integrated with your internal platforms and
                  knowledge boundaries.
                </p>
              </li>
              <li>
                <h3>Industrial automation intelligence</h3>
                <p>
                  Vision and language systems for maintenance, process monitoring, and
                  technician support.
                </p>
              </li>
              <li>
                <h3>Governance and model risk controls</h3>
                <p>
                  Evaluation pipelines, policy gates, and audit trails for safe and
                  compliant deployments.
                </p>
              </li>
              <li>
                <h3>AI operating model and capability transfer</h3>
                <p>
                  Playbooks and upskilling so your team can own and evolve solutions
                  after launch.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section id="process" className="section" aria-labelledby="process-title">
          <div className="container">
            <div className="split" data-reveal>
              <div>
                <p className="pill">Process</p>
                <h2 id="process-title" className="section-title">
                  A delivery structure that de-risks adoption
                </h2>
              </div>
              <p>
                We move in focused phases so stakeholders stay aligned and value
                appears early.
              </p>
            </div>

            <ol className="step-list" data-reveal>
              <li>
                <h3>Discovery and use-case ranking</h3>
                <p>Map constraints, data access, and expected business impact.</p>
              </li>
              <li>
                <h3>Rapid pilot and validation</h3>
                <p>
                  Prototype the narrowest high-value workflow and evaluate with real
                  users.
                </p>
              </li>
              <li>
                <h3>Production hardening</h3>
                <p>
                  Add observability, governance controls, and integration resilience.
                </p>
              </li>
              <li>
                <h3>Scale and internal enablement</h3>
                <p>
                  Operationalize rollout, train teams, and install continuous
                  improvement loops.
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section id="cases" className="section" aria-labelledby="cases-title">
          <div className="container">
            <div className="split" data-reveal>
              <div>
                <p className="pill">Case studies</p>
                <h2 id="cases-title" className="section-title">
                  Recent outcomes
                </h2>
              </div>
              <p>
                Representative programs showing speed, risk reduction, and measurable
                operational lift.
              </p>
            </div>

            <ul className="case-list" data-reveal>
              <li>
                <h3>Global manufacturer: maintenance intelligence copilot</h3>
                <p>
                  Connected manuals, historical logs, and IoT events into a guided
                  troubleshooting assistant.
                </p>
                <p className="metric">
                  Result: 31% faster diagnosis and 23% less downtime in one plant
                  region.
                </p>
              </li>
              <li>
                <h3>Insurance enterprise: policy operations automation</h3>
                <p>
                  Deployed a secure assistant for policy interpretation and exception
                  triage workflows.
                </p>
                <p className="metric">Result: 47% reduction in manual review cycle time.</p>
              </li>
              <li>
                <h3>Healthcare network: governance-first AI launch</h3>
                <p>
                  Built model risk controls, prompt evaluation workflows, and audit
                  trail reporting.
                </p>
                <p className="metric">
                  Result: compliant rollout across 6 business units in under 10 weeks.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section id="faq" className="section" aria-labelledby="faq-title">
          <div className="container">
            <div className="split" data-reveal>
              <div>
                <p className="pill">FAQ</p>
                <h2 id="faq-title" className="section-title">
                  Common questions
                </h2>
              </div>
              <p>Short answers to the questions we get before most projects begin.</p>
            </div>

            <ul className="faq-list" data-reveal>
              {faqItems.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <li className="faq-item" key={item.question} data-open={isOpen}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    >
                      {item.question}
                    </button>
                    <div className="faq-content">{item.answer}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section id="contact" className="section" aria-labelledby="contact-title">
          <div className="container contact-grid" data-reveal>
            <article className="contact-panel">
              <p className="pill">Contact</p>
              <h2 id="contact-title" className="section-title">
                Plan your AI roadmap.
              </h2>
              <p className="contact-copy">
                Share your goals and constraints. We will send a tailored plan with
                architecture direction, phased milestones, and likely ROI windows.
              </p>
              <p>
                <strong>Email:</strong> hello@heuristiclabs.ai
              </p>
              <p>
                <strong>Office hours:</strong> Monday-Friday, 9:00-18:00
              </p>
            </article>

            <form className="contact-panel contact-form" aria-label="Contact form">
              <div>
                <label htmlFor="name">Full name</label>
                <input id="name" name="name" type="text" autoComplete="name" required />
              </div>

              <div>
                <label htmlFor="email">Work email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </div>

              <div>
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                />
              </div>

              <div>
                <label htmlFor="scope">Primary scope</label>
                <select id="scope" name="scope">
                  <option>AI assistant deployment</option>
                  <option>Industrial automation AI</option>
                  <option>Governance and risk framework</option>
                  <option>AI strategy and roadmap</option>
                </select>
              </div>

              <div>
                <label htmlFor="message">Project context</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="What outcomes are you targeting in the next 3-6 months?"
                ></textarea>
              </div>

              <button className="btn btn-primary" type="submit">
                Request consultation
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer" aria-label="Site footer">
        <div className="container footer-wrap">
          <article>
            <a className="brand" href="#top">
              <span className="brand-dot" aria-hidden="true"></span>
              Heuristic Labs
            </a>
            <p className="footer-copy">
              Enterprise AI systems with practical architecture, governance rigor, and
              measurable outcomes.
            </p>
          </article>

          <nav aria-label="Footer navigation">
            <ul className="footer-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#cases">Case studies</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </nav>

          <article>
            <p>
              <strong>Heuristic Labs</strong>
            </p>
            <p>Applied AI consulting and implementation</p>
            <p className="footer-legal">Copyright 2026 Heuristic Labs</p>
          </article>
        </div>
      </footer>
    </>
  );
}

export default App;
