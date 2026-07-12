import useTypewriter from "../hooks/useTypewriter";
import styles from "./About.module.css";

function About({ profile, content, language }) {
  const description = profile?.aboutText[language] || profile?.aboutText.es || "";
  const typedDescription = useTypewriter(description, 25);

  return (
    <section className={styles.aboutContainer}>
      <h2>{content.aboutTitle || "Sobre Mí"}</h2>
      <p className={styles.description}>
        {typedDescription}
        <span className="typewriter-text"></span>
      </p>
    </section>
  );
}

export default About;
