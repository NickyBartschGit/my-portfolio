import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

export default function App() 
{
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      threshold: 0.4
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);

 useEffect(() => {
  const elements = document.querySelectorAll(".reveal");

  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);
  return (

    
    <>
      <Navbar activeSection={activeSection} />

      <div className="hero-bg"></div>

      <main className="container fade-in">

        {/* HERO */}
        <section id="about" className="section reveal">

          <p className="eyebrow">
            ENTRY-LEVEL IT & TECHNICAL SUPPORT
          </p>

          <div className="hire-badge">
  Available for Entry-Level IT / QA Roles
</div>

          <h1 className="hero-title">
            Technical support &
            <br />
            troubleshooting focused.
          </h1>

          <p className="hero-text">
            Technology professional comfortable working in structured ticketing environments, troubleshooting user/system issues, and documenting resolutions clearly.
          </p>

        </section>



        {/* SKILLS */}
        <section id="skills" className="section reveal">

          <h2>Technical Skills</h2>

          <div className="grid">

            <div className="card">
              <h3>IT Support</h3>
              <p className="muted">
                Tier 1 & 2 troubleshooting, escalation handling,
                and end-user support.
              </p>
            </div>

            <div className="card">
              <h3>QA & Debugging</h3>
              <p className="muted">
                Workflow testing, issue tracking,
                SDLC familiarity, and debugging.
              </p>
            </div>

            <div className="card">
              <h3>Technical Documentation</h3>
              <p className="muted">
                Process documentation, onboarding,
                operational procedures, and organization.
              </p>
            </div>

            <div className="card">
              <h3>Web Fundamentals</h3>
              <p className="muted">
                React fundamentals, responsive layouts,
                and component-based UI structure.
              </p>
            </div>

          </div>

        </section>

        {/* TOOLS */}
<section className="section reveal">

  <h2>Tools & Technologies</h2>

  <div className="tech-stack">

    <div className="tech-pill">Windows</div>
    <div className="tech-pill">Jira</div>
    <div className="tech-pill">React</div>
    <div className="tech-pill">JavaScript</div>
    <div className="tech-pill">Git</div>
    <div className="tech-pill">HTML/CSS</div>
    <div className="tech-pill">SDLC</div>
    <div className="tech-pill">Technical Documentation</div>
    <div className="tech-pill">Troubleshooting</div>
    <div className="tech-pill">Inventory Systems</div>
    <div className="tech-pill">UI/UX Fundamentals</div>

  </div>

</section>

{/* PROJECTS */}
<section id="projects" className="section reveal">

  <h2>Projects</h2>

  <div className="grid">

    <div className="card">

      <h3>Gong Cha Shawnessy – Retail Web Application</h3>

      <p className="muted">
        Built a React-based retail web application as part of a team project during my
        Software Development Certificate program at SAIT.
      </p>

      <p className="muted">
        Contributed to UI layout, dynamic menu structure, and improving overall user experience
        through iterative testing and feedback.
      </p>

      <a
  href="https://gongcha-shawnessy.vercel.app/"
  target="_blank"
  rel="noreferrer"
  className="project-link"
>
  View Project
</a>

    </div>

    <div className="card">

  <h3>QA Testing – Personal Portfolio Website</h3>

<p className="muted">
  Conducted manual UI testing on my portfolio website, identifying and fixing layout
  and navigation issues across mobile and desktop views.
</p>

<a
  href="/projects/qa-testing-report.md"
  target="_blank"
  rel="noreferrer"
  className="project-link"
>
  View Test Report
</a>

</div>

  </div>

</section>

        {/* EXPERIENCE */}
        <section id="experience" className="section reveal">

          <h2>Experience</h2>

          <div className="card">

            <h3>Calgary Coop — Bakery Supervisor</h3>

            <ul className="muted">
              <li>Resolved operational and workflow issues in fast-paced environments</li>
              <li>Created structured documentation and onboarding guides</li>
              <li>Maintained inventory tracking systems and data accuracy</li>
              <li>Acted as escalation point for workflow disruptions</li>
              <li>Prioritized and triaged daily operational issues</li>
            </ul>

          </div>

        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications" className="section reveal">

          <h2>Certifications</h2>

          <div className="card">
            <h3>CompTIA A+</h3>

            <p className="muted">
              Currently in progress — Core 1 & Core 2
            </p>
          </div>

        </section>

    {/* CONTACT */}
<section id="contact" className="section reveal">

  <h2>Contact</h2>

  <div className="card">

    <div className="contact-buttons">

 <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=nicky.bartsch11@gmail.com"
  target="_blank"
  rel="noreferrer"
  className="btn primary"
>
  Email Me
</a>

  <a href="/resume.pdf" download className="btn secondary">
    Download Resume
  </a>

</div>

    <p className="muted" style={{ marginTop: "16px" }}>
      Based in Calgary, Alberta
    </p>

  </div>

</section>

      </main>
    </>
  );
}