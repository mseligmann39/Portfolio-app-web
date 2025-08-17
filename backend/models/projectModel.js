const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  emoji: { type: String, default: "" },
  description: { type: String, required: true },
  technologies: { type: [String], required: true },
  status: { type: String, enum: ["en desarrollo", "finalizado", "prototipo"], default: "en desarrollo" },
  category: { type: String, default: "" },
  repository_url: { type: String, default: null },
  demo_url: { type: String, default: null },
  image_url: { type: String, default: null },
  verMas: { type: Boolean, default: false },
}, { timestamps: true }); // createdAt, updatedAt automáticos

module.exports = mongoose.model("Project", ProjectSchema);
