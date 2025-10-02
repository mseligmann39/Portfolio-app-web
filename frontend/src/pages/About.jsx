import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import useTypewriter from '../hooks/useTypewriter';
import styles from './About.module.css';

function About() {
  const { content, profile } = useOutletContext(); // Corregido: obtener profile

  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  const description = profile.aboutText || ''; // Corregido: usar profile.aboutText
  const typedDescription = useTypewriter(description, 30);

  return (
    <section className={styles.aboutContainer}>
      <h2>{content.aboutTitle || 'Sobre Mí'}</h2>
      <p className={styles.description}>
        {typedDescription}
        <span className="typewriter-text"></span>
      </p>
    </section>
  );
}

export default About;
