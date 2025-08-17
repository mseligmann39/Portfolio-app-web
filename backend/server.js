const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Conexión a MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => console.log("✅ Conectado a MongoDB Atlas"))
.catch(err => console.error("❌ Error de conexión:", err));

// Rutas
const projectsRouter = require("./routes/projectRoutes");
const profileRouter = require("./routes/profileRoutes");
const contentRouter = require("./routes/contentRoutes");
app.use("/api/projects", projectsRouter);
app.use("/api/content", contentRouter);
app.use("/api/profile", profileRouter); 
// Puerto

