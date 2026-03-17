import { useState } from "react";
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

  return (
    <>
      <header className="site-header" aria-label="Site header">
        <div className="container nav-grid">
          <nav aria-label="Primary navigation" className="nav-left">
            <a href="#about">About</a>
            <a href="#cases">Case Studies</a>
            <a href="#services">News</a>
          </nav>

          <a className="brand" href="#top">
            Claura
          </a>

          <div className="nav-right">
            <a className="btn btn-dark" href="#contact">
              Book a free call
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero section container" aria-labelledby="hero-title">
          <div className="hero-left">
            <p className="pill">About us</p>
            <h1 id="hero-title" className="display-title">
              On a mission to simplify automation.
            </h1>
            <p className="lead">
              We partner with enterprise teams to design secure AI workflows, deploy
              production assistants, and measure impact in weeks, not quarters.
            </p>
            <div className="hero-actions">
              <a className="btn btn-dark" href="#contact">
                Start your roadmap
              </a>
              <a className="btn btn-light" href="#process">
                How we work
              </a>
            </div>
          </div>

          <div className="hero-right" aria-hidden="true">
            <div className="flower-art"></div>
          </div>
        </section>

        <section id="about" className="section container">
          <div className="title-split">
            <div>
              <p className="pill">Who we are</p>
              <h2 className="section-title">An enterprise AI lab built for real operators.</h2>
            </div>
            <p className="lead-small">
              We remove noise from AI adoption. Every engagement starts with your
              workflows, risk profile, and existing systems. Then we build the smallest
              valuable model stack that can prove ROI quickly.
            </p>
          </div>

          <ul className="stats-grid">
            <li>
              <strong>92%</strong>
              <span>Automation uplift</span>
            </li>
            <li>
              <strong>8 weeks</strong>
              <span>Avg. first deployment</span>
            </li>
            <li>
              <strong>40+ years</strong>
              <span>Leadership experience</span>
            </li>
          </ul>

          <div className="card-grid three">
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
        </section>

        <section id="services" className="section container">
          <div className="title-split">
            <div>
              <p className="pill">Services</p>
              <h2 className="section-title">What we build</h2>
            </div>
            <p className="lead-small">
              From strategy to production systems, our scope covers architecture,
              implementation, and enablement.
            </p>
          </div>

          <ul className="stack-list">
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
                Playbooks and upskilling so your team can own and evolve solutions after
                launch.
              </p>
            </li>
          </ul>
        </section>

        <section id="process" className="section container">
          <div className="title-split">
            <div>
              <p className="pill">Process</p>
              <h2 className="section-title">A delivery structure that de-risks adoption</h2>
            </div>
            <p className="lead-small">
              We move in focused phases so stakeholders stay aligned and value appears
              early.
            </p>
          </div>

          <ol className="steps">
            <li>
              <h3>Discovery and use-case ranking</h3>
              <p>Map constraints, data access, and expected business impact.</p>
            </li>
            <li>
              <h3>Rapid pilot and validation</h3>
              <p>
                Prototype the narrowest high-value workflow and evaluate with real users.
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
                Operationalize rollout, train teams, and install continuous improvement
                loops.
              </p>
            </li>
          </ol>
        </section>

        <section id="cases" className="section container">
          <div className="title-split">
            <div>
              <p className="pill">Case studies</p>
              <h2 className="section-title">Recent outcomes</h2>
            </div>
            <p className="lead-small">
              Representative programs showing speed, risk reduction, and measurable
              operational lift.
            </p>
          </div>

          <ul className="card-grid three">
            <li className="card">
              <h3>Global manufacturer: maintenance intelligence copilot</h3>
              <p>
                Connected manuals, historical logs, and IoT events into a guided
                troubleshooting assistant.
              </p>
              <p className="metric">
                Result: 31% faster diagnosis and 23% less downtime in one plant region.
              </p>
            </li>
            <li className="card">
              <h3>Insurance enterprise: policy operations automation</h3>
              <p>
                Deployed a secure assistant for policy interpretation and exception
                triage workflows.
              </p>
              <p className="metric">Result: 47% reduction in manual review cycle time.</p>
            </li>
            <li className="card">
              <h3>Healthcare network: governance-first AI launch</h3>
              <p>
                Built model risk controls, prompt evaluation workflows, and audit trail
                reporting.
              </p>
              <p className="metric">
                Result: compliant rollout across 6 business units in under 10 weeks.
              </p>
            </li>
          </ul>
        </section>

        <section id="faq" className="section container faq-wrap">
          <p className="pill center">FAQ</p>
          <h2 className="section-title center">Your questions answered.</h2>
          <p className="lead-small center width">
            Everything you need to know about working with us. Still have questions?
            Book a free call and we&apos;ll walk you through it.
          </p>

          <ul className="faq-list">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <li className="faq-item" key={item.question} data-open={isOpen}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span>{item.question}</span>
                    <span className="plus">+</span>
                  </button>
                  <div className="faq-content">{item.answer}</div>
                </li>
              );
            })}
          </ul>
        </section>

        <section id="contact" className="section container contact-wrap">
          <article className="contact-copy-block">
            <p className="pill">Contact</p>
            <h2 className="section-title">Plan your AI roadmap.</h2>
            <p className="lead-small">
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

          <form className="contact-form" aria-label="Contact form">
            <label htmlFor="name">Full name</label>
            <input id="name" name="name" type="text" autoComplete="name" required />

            <label htmlFor="email">Work email</label>
            <input id="email" name="email" type="email" autoComplete="email" required />

            <label htmlFor="company">Company</label>
            <input id="company" name="company" type="text" autoComplete="organization" />

            <label htmlFor="scope">Primary scope</label>
            <select id="scope" name="scope">
              <option>AI assistant deployment</option>
              <option>Industrial automation AI</option>
              <option>Governance and risk framework</option>
              <option>AI strategy and roadmap</option>
            </select>

            <label htmlFor="message">Project context</label>
            <textarea
              id="message"
              name="message"
              placeholder="What outcomes are you targeting in the next 3-6 months?"
            ></textarea>

            <button className="btn btn-dark" type="submit">
              Request consultation
            </button>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-top-flower" aria-hidden="true">
          <div className="flower-art small"></div>
        </div>

        <div className="container footer-grid">
          <div>
            <h4>Navigate</h4>
            <a href="#top">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
          </div>
          <div>
            <h4>Resources</h4>
            <a href="#cases">Case Studies</a>
            <a href="#process">How We Work</a>
            <a href="#faq">FAQ</a>
            <a href="#services">News</a>
          </div>
          <div>
            <h4>Connect</h4>
            <a href="#contact">Book a Call</a>
            <a href="#contact">Twitter</a>
            <a href="#contact">Instagram</a>
            <a href="#contact">Meta</a>
          </div>
          <div>
            <h4>Legal</h4>
            <a href="#contact">Privacy Policy</a>
            <a href="#contact">Terms of Service</a>
            <a href="#contact">Cookie Policy</a>
            <a href="#contact">Accessibility</a>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>Copyright 2026 Heuristic Labs</p>
          <p>Created by Heuristic Labs</p>
        </div>
      </footer>
    </>
  );
}

export default App;
