import { useState } from "react";
import { Sun, Moon } from "lucide-react";
export default function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const links = [
    ["about", "About"],
    ["skills", "Skills"],
    ["experience", "Experience"],
    ["projects", "Projects"],
    ["education", "Education"],
  ];
  return (
    <header>
      <nav>
        <a href="#top" className="logo">
          <span className="dot" />
          SURYA
        </a>
        <ul className={`nav-links ${open ? "open" : ""}`}>
          {links.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/assets/Surya_Pratap_Mallick_Software_Developer_Resume (1).pdf"
              className="nav-cta"
              target="_blank"
            >
              Resume ↓
            </a>
          </li>
        </ul>
        <div className="nav-right">
          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
          <button
            className="menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
}
