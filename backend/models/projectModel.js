const mongoose = require("mongoose");

// Objeto para campos multilingües
const languageSchema = {
  es: { type: String, required: true },
  en: { type: String, required: true }
};

const ProjectSchema = new mongoose.Schema({
  title: languageSchema,
  description: languageSchema,
  emoji: { type: String, default: "" },
  technologies: { type: [String], required: true },
  status: languageSchema, // Por ejemplo: { es: "en desarrollo", en: "in progress" }
  category: languageSchema,
  repository_url: { type: String, default: null },
  demo_url: { type: String, default: null },
  image_url: { type: String, default: null }
}, { timestamps: true });

module.exports = mongoose.model("Project", ProjectSchema);