import styles from "./Footer.module.css";

function Footer({ content, profile }) {
  if (!content || !profile) {
    return null;
  }

  const footerText =
    content.footerText?.replace("Maximiliano Seligmann", profile.name) || "";

  return (
    <footer className={styles.footer}>
      <p>{footerText}</p>
    </footer>
  );
}

export default Footer;
