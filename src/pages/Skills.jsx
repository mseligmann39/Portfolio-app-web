import styles from "./Skills.module.css";

function Skills({ skills, content }) {

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
