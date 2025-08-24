const mongoose = require("mongoose");

const languageSchema = {
  es: { type: String, required: true },
  en: { type: String, required: true }
};

const contentSchema = new mongoose.Schema({
  // Títulos de las secciones
  aboutTitle: languageSchema,
  projectsTitle: languageSchema,
  skillsTitle: languageSchema,
  contactTitle: languageSchema,

  // Contenido específico de la sección de Habilidades
  skillsText: languageSchema, // Para la descripción general de habilidades
  digitalSkillsTitle: languageSchema, // Para el subtítulo "Competencias Digitales"
  digitalSkillsText: languageSchema, // Para el texto de competencias digitales

  // Textos de la barra de navegación
  navAbout: languageSchema,
  navProjects: languageSchema,
  navSkills: languageSchema,
  navContact: languageSchema,

  // Otros textos
  downloadCV: languageSchema,
  contactText: languageSchema, // Texto para la página de contacto
  footerText: languageSchema
});

module.exports = mongoose.model("Content", contentSchema);