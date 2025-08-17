const express = require("express");
const router = express.Router();
const Project = require("../models/projectModel");

// Obtener todos los proyectos
// Obtener todos los proyectos en un idioma específico
router.get("/", async (req, res) => {
  // Obtiene el idioma de la query string, por defecto será 'es'
  const lang = req.query.lang || 'es';

  try {
    // Busca todos los proyectos
    const projects = await Project.find();

    // Transforma los datos para devolver solo el idioma solicitado
    const translatedProjects = projects.map(p => ({
      _id: p._id,
      // Para cada campo multilingüe, selecciona el idioma correcto
      title: p.title[lang],
      description: p.description[lang],
      status: p.status[lang],
      category: p.category[lang],
      // Los campos que no son multilingües se quedan igual
      emoji: p.emoji,
      technologies: p.technologies,
      repository_url: p.repository_url,
      demo_url: p.demo_url,
      image_url: p.image_url,
      createdAt: p.createdAt,
      updatedAt: p.updatedAt
    }));

    res.json(translatedProjects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;
