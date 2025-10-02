import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  const { profile } = useOutletContext();

  useEffect(() => {
    // Añade una clase al body para deshabilitar el scroll
    document.body.classList.add('no-scroll');

    // Limpia la clase cuando el componente se desmonta
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez

  if (!profile) return null;

  return (
    <div className={styles.container}>
      <h1 className={`${styles.name} fade-in-up-animation`} style={{ animationDelay: '0.2s' }}>
        {profile.name}
      </h1>
      <p className={`${styles.subtitle} fade-in-up-animation`} style={{ animationDelay: '0.5s' }}>
        {profile.subtitle}
      </p>
    </div>
  );
}

export default Home;
