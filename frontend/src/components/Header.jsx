import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header({ language, setLanguage, navLinks = [], profileName }) {
  const handleLanguageChange = () => {
    const newLanguage = language === 'es' ? 'en' : 'es';
    setLanguage(newLanguage);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <NavLink to="/">
          <img src="/LOGO.png" alt="Logo" />
        </NavLink>
      </div>
      <nav>
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink 
                to={link.to}
                className={({ isActive }) => isActive ? styles.active : ''}
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.langSwitcher}>
        <button onClick={handleLanguageChange}>
          {language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
        </button>
      </div>
    </header>
  );
}

export default Header;
