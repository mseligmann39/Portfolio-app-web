import { useOutletContext } from "react-router-dom";
import useTypewriter from "../hooks/useTypewriter";
import styles from "./About.module.css"; // 1. Importa el módulo CSS

function About() {
  const { content, profile } = useOutletContext();

  const description = profile?.aboutText || "";
  const typedDescription = useTypewriter(description, 25);

  return (
    <section>
      <h2>{content.aboutTitle || "Sobre Mí"}</h2>
      {/* 2. Aplica la clase desde el objeto 'styles' */}
      <p className={styles.typewriterText}>{typedDescription}</p>
    </section>
  );
}

export default About;
