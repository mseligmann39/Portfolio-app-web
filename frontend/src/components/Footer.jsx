import React from "react";

function Footer({ content, profile }) {
  // Creamos el texto del footer reemplazando el nombre dinámicamente

  // Primero nos aseguramos de que content y profile existan
  if (!content || !profile) {
    return null; // O un footer por defecto
  }

  // Luego, creamos el texto de forma segura
  const footerText =
    content.footerText?.replace("Maximiliano Seligmann", profile.name) || "";

  return (
    <footer>
      <p>{footerText}</p>
    </footer>
  );
}

export default Footer;
