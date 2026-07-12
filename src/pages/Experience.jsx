import styles from "./Experience.module.css";

function Experience({ experience, content }) {
  if (!experience || experience.length === 0) return null;

  return (
    <section id="experience" className={styles.experienceSection}>
      <h2>{content.experienceTitle || "Experiencia Laboral"}</h2>
      <div className={styles.timeline}>
        {experience.map((item) => (
          <div key={item.id} className={styles.timelineItem}>
            <div className={styles.timelineHeader}>
              <h3 className={styles.role}>{item.role}</h3>
              <span className={styles.period}>{item.period}</span>
            </div>
            <h4 className={styles.company}>{item.company}</h4>
            <p className={styles.description}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
