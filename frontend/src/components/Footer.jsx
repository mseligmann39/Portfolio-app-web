import React from "react";
import styles from './Footer.module.css';

function Footer({ footerText }) {
  return (
    <footer className={styles.footer}>
      <p>{footerText}</p>
    </footer>
  );
}

export default Footer;
