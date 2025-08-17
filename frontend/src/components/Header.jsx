import React, { useState } from "react";

function Header({ profile, setLang }) {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  return (
    <header>
      <div className="header-content">
        <h1>{profile.name}</h1>
        <p>{profile.subtitle}</p>
      </div>
      <div id="lang-switcher">
        <button
          id="lang-toggle"
          onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
        >
          🌐
        </button>
        <div id="lang-options" className={isLangMenuOpen ? "" : "hidden"}>
          <button
            onClick={() => {
              setLang("es");
              setIsLangMenuOpen(false);
            }}
          >
            ES
          </button>
          <button
            onClick={() => {
              setLang("en");
              setIsLangMenuOpen(false);
            }}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
