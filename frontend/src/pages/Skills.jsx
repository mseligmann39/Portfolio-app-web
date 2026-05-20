import { useOutletContext } from "react-router-dom";
import styles from "./Skills.module.css";

function Skills() {
  const { content } = useOutletContext();

  // Usamos la lista de ejemplo como antes
  const skills = [
    "React",
    "Node.js",
    "JavaScript (ES6+)",
    "Python",
    "MongoDB",
    "Express",
    "HTML5",
    "CSS3",
    "Git",
    "API REST",
  ];

  return (
    <section>
      <h2>{content.skillsTitle || "Habilidades"}</h2>
      <p>
        {content.skillsText ||
          "Estas son algunas de las tecnologías con las que trabajo."}
      </p>
      <ul className={styles.skillsList}>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
