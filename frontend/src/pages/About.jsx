import { useOutletContext } from 'react-router-dom';
import useTypewriter from '../hooks/useTypewriter';

function About() {
  const { content, profile } = useOutletContext();

  // Corregido: Se usa profile.aboutText que viene de la API.
  const description = profile?.aboutText || '';
  const typedDescription = useTypewriter(description, 25);

  return (
    <section>
      <h2>{content.aboutTitle || 'Sobre Mí'}</h2>
      <p className="typewriter-text">{typedDescription}</p>
    </section>
  );
}

export default About;
