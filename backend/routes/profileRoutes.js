const express = require("express");
const router = express.Router();
const Profile = require("../models/profileModel");

router.get("/", async (req, res) => {
  const lang = req.query.lang || 'es';
  try {
    // Solo hay un perfil, así que usamos findOne()
    const profile = await Profile.findOne();
    if (!profile) return res.status(404).json({ message: "Perfil no encontrado" });

    const translatedProfile = {
      name: profile.name,
      subtitle: profile.subtitle[lang],
      aboutText: profile.aboutText[lang],
      contactEmail: profile.contactEmail,
      contactGitHub: profile.contactGitHub,
      contactLinkedIn: profile.contactLinkedIn
    };
    res.json(translatedProfile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;