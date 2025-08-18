// En src/components/Nav.jsx
import React, { useState } from "react";

// 4.1 - Recibe la prop setLang
function Nav({ content, setLang }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav>
      <button
        className="nav-toggle"
        aria-label="Abrir menú"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        ☰
      </button>

      <ul className={`nav-links ${isNavOpen ? "nav-open" : ""}`}>
        <li>
          <a href="#about" onClick={() => setIsNavOpen(false)}>
            {content.navAbout}
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => setIsNavOpen(false)}>
            {content.navProjects}
          </a>
        </li>
        <li>
          <a href="#skills" onClick={() => setIsNavOpen(false)}>
            {content.navSkills}
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsNavOpen(false)}>
            {content.navContact}
          </a>
        </li>

        {/* 4.2 - Pega aquí los botones y envuélvelos en un li */}
        <li className="lang-options-mobile">
          <button
            onClick={() => {
              setLang("es");
              setIsNavOpen(false);
            }}
          >
            ES
          </button>
          <span>|</span>
          <button
            onClick={() => {
              setLang("en");
              setIsNavOpen(false);
            }}
          >
            EN
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
