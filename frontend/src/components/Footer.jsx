import React from "react";

function Footer({ content, profile }) {
  // Creamos el texto del footer reemplazando el nombre dinámicamente
  const footerText = content.footerText.replace(
    "Maximiliano Seligmann",
    profile.name
  );

  return (
    <footer>
      <p>{footerText}</p>
    </footer>
  );
}

export default Footer;
