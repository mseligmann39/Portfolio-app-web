import { useOutletContext } from 'react-router-dom';
import styles from './Skills.module.css';

function Skills() {
  const { content } = useOutletContext();

  // NOTA: Tu modelo de Perfil no incluye una lista de habilidades.
  // Para solucionar el error, usamos una lista de ejemplo.
  // Deberías añadir un campo "skills: [String]" a tu profileModel.js
  // y poblarlo en tu base de datos.
  const skills = [
    'React', 'Node.js', 'JavaScript (ES6+)', 'Python', 'MongoDB', 
    'Express', 'HTML5', 'CSS3', 'Git', 'API REST','PHP', 'MySQL' 
  ];

  return (
    <section>
      <h2>{content.skillsTitle || 'Habilidades'}</h2>
      <p>{content.skillsText || 'Estas son algunas de las tecnologías con las que trabajo.'}</p>
      <ul className={styles.skillsList}>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
