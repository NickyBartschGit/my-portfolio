export default function Navbar({ activeSection }) {
  return (
    <nav className="nav">

      <div className="logo">
        Nicky B
      </div>

      <div className="links">

        <a className={activeSection === "about" ? "active" : ""} href="#about">
          About
        </a>

        <a className={activeSection === "skills" ? "active" : ""} href="#skills">
          Skills
        </a>

        <a className={activeSection === "projects" ? "active" : ""} href="#projects">
          Projects
        </a>

        <a className={activeSection === "experience" ? "active" : ""} href="#experience">
          Experience
        </a>

        <a className={activeSection === "certifications" ? "active" : ""} href="#certifications">
          Certifications
        </a>

        <a className={activeSection === "contact" ? "active" : ""} href="#contact">
          Contact
        </a>

      </div>

    </nav>
  );
}