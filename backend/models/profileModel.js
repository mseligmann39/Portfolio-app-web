const mongoose = require("mongoose");

const languageSchema = {
  es: { type: String, required: true },
  en: { type: String, required: true }
};

const ProfileSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Tu nombre no necesita traducción
  subtitle: languageSchema,
  aboutText: languageSchema,
  contactEmail: { type: String },
  contactGitHub: { type: String },
  contactLinkedIn: { type: String }
});

module.exports = mongoose.model("Profile", ProfileSchema);