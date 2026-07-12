import { useState, useEffect } from "react";
import styles from "./Header.module.css";

function Header({ language, setLanguage, navLinks = [] }) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "skills", "contact"];
      let currentSection = "home";

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            currentSection = sectionId;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    // Call it initially
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = () => {
    const newLanguage = language === "es" ? "en" : "es";
    setLanguage(newLanguage);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="#home">
          <img src="/LOGO.png" alt="Logo" className={styles.headerLogo} />
        </a>
      </div>
      <nav>
        <ul className={styles.navLinks}>
          {navLinks.map((link) => {
            const targetId = link.to.substring(1);
            const isActive = activeSection === targetId;
            return (
              <li key={link.to}>
                <a
                  href={link.to}
                  className={isActive ? styles.active : ""}
                >
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className={styles.langSwitcher}>
        <button onClick={handleLanguageChange}>
          {language === "es" ? "Switch to English" : "Cambiar a Español"}
        </button>
      </div>
    </header>
  );
}

export default Header;
