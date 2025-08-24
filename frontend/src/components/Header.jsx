import { NavLink } from 'react-router-dom';

function Header({ language, setLanguage, navLinks = [], profileName }) {
  const handleLanguageChange = () => {
    const newLanguage = language === 'es' ? 'en' : 'es';
    setLanguage(newLanguage);
  };

  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">
          <img src="/LOGO.png" alt="Logo" className="header-logo" />
        </NavLink>
      </div>
      <nav>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink 
                to={link.to}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="lang-switcher">
        <button onClick={handleLanguageChange}>
          {language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
        </button>
      </div>
    </header>
  );
}

export default Header;
