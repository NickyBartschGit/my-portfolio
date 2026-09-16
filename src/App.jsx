import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

const skills = [
  ["Support & troubleshooting", "Tier 1 & 2 support, issue triage, root-cause thinking, escalation handling, and end-user service."],
  ["Systems & data", "Inventory systems, accurate data entry, database fundamentals, data integrity, and workflow monitoring."],
  ["Documentation & process", "Clear process manuals, onboarding resources, task prioritization, and consistent operational procedures."],
  ["Quality & delivery", "Manual QA testing, Jira workflows, SDLC fundamentals, defect documentation, and responsive web fundamentals."],
];

// Add the exported dashboard image at this public path. The preview and its
// button stay hidden automatically when the image is not present.
const helpDeskDashboardImage = "/images/help_desk_dashboard_photo.png";

const helpDeskMetrics = [
  ["78.5%", "Resolution rate"],
  ["22.27 hrs", "Avg. resolution time"],
  ["60.5%", "SLA compliance"],
  ["4.1 / 5", "Avg. satisfaction"],
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function App() {
  const [activeSection, setActiveSection] = useState("about");
  useEffect(() => {
    const sections = document.querySelectorAll("main section[id]");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)), { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return <>
    <Navbar activeSection={activeSection} />
    <main>
      <section id="about" className="hero section-shell">
        <div className="hero-copy">
          <p className="kicker"><span /> IT SUPPORT &amp; OPERATIONS</p>
          <h1>Reliable support.<br /><em>Clearer systems.</em></h1>
          <p className="hero-lede">I’m Nicky Bartsch, an entry-level technology professional who brings seven years of calm problem-solving, team leadership, and process discipline to IT support and analyst teams.</p>
          <div className="hero-actions"><a className="button button-primary" href="#contact">Let’s connect <Arrow /></a><a className="text-link" href="/resume.pdf" download>Download résumé <Arrow /></a></div>
        </div>
        <aside className="availability-card" aria-label="Career focus"><p className="card-label">CURRENTLY PURSUING</p><h2>CompTIA A+</h2><p>Core 1 &amp; Core 2 · expected October 2026</p><div className="card-rule" /><p className="card-label">OPEN TO</p><ul><li>IT Support &amp; Help Desk</li><li>Operations &amp; Reporting Analyst</li><li>Junior Systems Support</li></ul></aside>
      </section>
      <section className="proof-strip" aria-label="Professional summary"><div><strong>7+</strong><span>years in high-volume operations</span></div><div><strong>Tier 1–2</strong><span>support &amp; escalation mindset</span></div><div><strong>Calgary</strong><span>Alberta · open to opportunities</span></div></section>
      <section id="skills" className="section-shell content-section"><div className="section-intro"><p className="kicker">WHAT I BRING</p><h2>Practical skills that keep work moving.</h2></div><div className="skills-grid">{skills.map(([title, description], index) => <article className="skill-card" key={title}><span className="skill-number">0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>
      <section id="experience" className="section-shell content-section experience-section"><div className="section-intro"><p className="kicker">EXPERIENCE</p><h2>Operations experience with a technical point of view.</h2></div><div className="timeline"><article className="timeline-item"><div className="timeline-meta"><span>2024 — Current</span><span>Calgary, AB</span></div><div><p className="role-company">Calgary Co-op</p><h3>Bakery Supervisor</h3><ul><li>Served as the escalation point for complex operational issues, applying structured troubleshooting to maintain continuous service.</li><li>Created and maintained process manuals and training documentation used for staff onboarding and consistent execution.</li><li>Prioritized daily work, surfaced systemic blockers to management, and coordinated teams in a high-volume environment.</li></ul></div></article><article className="timeline-item"><div className="timeline-meta"><span>2017 — 2024</span><span>Calgary, AB</span></div><div><p className="role-company">Calgary Co-op</p><h3>Bakery Utility Clerk</h3><ul><li>Maintained inventory records with accurate data entry and rotation practices to prevent resource shortages.</li><li>Resolved customer inquiries with an end-user mindset while following strict safety and compliance standards.</li></ul></div></article></div></section>
      <section id="projects" className="section-shell content-section projects-section"><div className="section-intro"><p className="kicker">TRAINING &amp; PROJECT WORK</p><h2>Learning applied to real deliverables.</h2></div><div className="project-grid"><article className="project-card featured-project"><p className="card-label">TEAM PROJECT · SAIT</p><h3>Gong Cha Shawnessy<br />Retail Web Application</h3><p>Collaborated on a responsive retail web application, contributing to dynamic menus, user parameters, and UI/UX improvements. Used Jira to track work, document issues, and resolve bugs within an SDLC-based team workflow.</p><div className="tag-list"><span>Jira</span><span>Manual Testing</span><span>UI/UX</span><span>React Fundamentals</span></div><a className="text-link" href="https://gongcha-shawnessy.vercel.app/" target="_blank" rel="noreferrer">View project <Arrow /></a></article><article className="project-card"><p className="card-label">QUALITY ASSURANCE</p><h3>Portfolio QA<br />Testing Report</h3><p>Performed structured manual UI testing across mobile and desktop layouts. Documented test cases, findings, corrections, and lessons learned in a formal QA report.</p><div className="tag-list"><span>QA Testing</span><span>Defect Tracking</span><span>Documentation</span></div><a className="text-link" href="/qa-testing-report.pdf" target="_blank" rel="noreferrer">Read testing report <Arrow /></a></article><article className="project-card dashboard-project"><div className="dashboard-copy"><p className="card-label">POWER BI · SIMULATED DATASET</p><h3>IT Help Desk<br />Analytics Dashboard</h3><p>Built an interactive Power BI dashboard from a simulated dataset of 200 IT support tickets. Used Power Query and DAX to analyze ticket category, priority, monthly volume, department, root cause, technician performance, and SLA results, with interactive priority filtering.</p><div className="metric-list">{helpDeskMetrics.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div><p className="project-note">Translated the analysis into key findings and practical recommendations for improving resolution performance, SLA compliance, and support operations.</p><div className="tag-list"><span>Power BI</span><span>Power Query</span><span>DAX</span><span>Data Visualization</span></div><a className="text-link" href={helpDeskDashboardImage} target="_blank" rel="noreferrer">View dashboard screenshot <Arrow /></a></div></article><article className="project-card support-lab-card"><p className="card-label">HANDS-ON IT SUPPORT LAB</p><h3>IT Help Desk<br />Troubleshooting Lab</h3><p>Built a simulated IT support environment for a 20-employee business. Documented 15 support tickets, Windows and network troubleshooting workflows, a PowerShell diagnostic script, and a ticket-analysis dashboard.</p><div className="tag-list"><span>Windows Support</span><span>Ticket Documentation</span><span>PowerShell</span><span>Data Analysis</span></div><a className="text-link" href="https://github.com/NickyBartschGit/it-help-desk-troubleshooting-lab" target="_blank" rel="noreferrer">Explore lab on GitHub <Arrow /></a></article></div></section>
      <section id="contact" className="contact-section"><div className="section-shell contact-inner"><p className="kicker">GET IN TOUCH</p><h2>Let’s talk about how I can support your team.</h2><p>I’m seeking an entry-level IT support, systems support, or operations/analyst role where thoughtful troubleshooting and reliable follow-through matter.</p><div className="contact-actions"><a className="button button-primary" href="mailto:nicky.bartsch11@gmail.com">Email Nicky <Arrow /></a><a className="button button-secondary" href="tel:+15879994796" aria-label="Call Nicky">Call Nicky <Arrow /></a></div></div></section>
    </main>
    <footer className="section-shell"><span>© {new Date().getFullYear()} Nicky Bartsch</span><span>IT Support &amp; Operations</span></footer>
  </>;
}
