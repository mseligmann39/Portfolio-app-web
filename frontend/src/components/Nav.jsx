import React from "react";

function Nav({ content }) {
  return (
    <nav>
      <ul className="nav-links">
        <li>
          <a href="#about">{content.navAbout}</a>
        </li>
        <li>
          <a href="#projects">{content.navProjects}</a>
        </li>
        <li>
          <a href="#skills">{content.navSkills}</a>
        </li>
        <li>
          <a href="#contact">{content.navContact}</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
