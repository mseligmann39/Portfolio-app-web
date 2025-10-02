import React from "react";
import styles from './Loader.module.css';

function Loader({ language }) {
  const texts = {
    es: {
      loading: "Cargando...",
      wait: "Por favor, espere."
    },
    en: {
      loading: "Loading...",
      wait: "Please wait."
    }
  };

  const currentTexts = texts[language] || texts.es;

  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
      <div className={styles.loaderText}>
        <p>{currentTexts.loading}</p>
        <p>{currentTexts.wait}</p>
      </div>
    </div>
  );
}

export default Loader;
