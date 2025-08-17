
const express = require("express");
const router = express.Router();
const Content = require("../models/contentModel");

router.get("/", async (req, res) => {
  const lang = req.query.lang || 'es';
  try {
    const content = await Content.findOne();
    if (!content) return res.status(404).json({ message: "Contenido no encontrado" });

    // Transforma todos los campos para devolver solo el idioma solicitado
    const translatedContent = {};
    for (const key in content._doc) {
      if (content[key] && content[key][lang]) {
        translatedContent[key] = content[key][lang];
      }
    }

    res.json(translatedContent);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;