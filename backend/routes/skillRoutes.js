// backend/routes/skillRoutes.js
const express = require('express');
const router = express.Router();
const Skill = require('../models/skillModel');

// GET /api/skills - Obtener todas las habilidades
router.get('/', async (req, res) => {
  try {
    const skills = await Skill.find({});
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las habilidades" });
  }
});

module.exports = router;