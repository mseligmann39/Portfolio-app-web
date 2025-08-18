// En src/components/Loader.jsx
import React from "react";

function Loader() {
  return (
    // Ya no necesitas el div exterior
    <div className="loader-container">
      <div className="loader"></div>
      <div className="loader-text">
        <p>Cargando...</p>
        <p>Por favor espere.</p>
        {/* He quitado la línea de reiniciar para que sea más limpio */}
      </div>
    </div>
  );
}

export default Loader;
