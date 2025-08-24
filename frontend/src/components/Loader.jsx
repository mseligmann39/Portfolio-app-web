import React from "react";

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
    <div className="loader-container">
      <div className="loader"></div>
      <div className="loader-text">
        <p>{currentTexts.loading}</p>
        <p>{currentTexts.wait}</p>
      </div>
    </div>
  );
}

export default Loader;
