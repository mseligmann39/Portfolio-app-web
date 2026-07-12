import useTypewriter from "../hooks/useTypewriter";
import styles from "./About.module.css";

function About({ profile, content }) {
  const description = profile?.aboutText || "";
  const typedDescription = useTypewriter(description, 5);

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
