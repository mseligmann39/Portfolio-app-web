const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();

// --- Configuración de CORS ---
// 1. Define tu lista de dominios permitidos (whitelist)
const allowedOrigins = [
  "https://seligmann.es", // Tu dominio principal
  "https://maxi.seligmann.es", // Tu subdominio
  "http://localhost:5173", // Tu entorno de desarrollo local
];

const corsOptions = {
  origin: function (origin, callback) {
    // 2. Comprueba si el origen de la petición está en tu lista blanca
    //    o si no hay origen (para herramientas como Postman)
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true); // Permite el acceso
    } else {
      callback(new Error("No permitido por la política de CORS")); // Rechaza la petición
    }
  },
};

// 3. Usa la configuración de CORS como el PRIMER middleware
app.use(cors(corsOptions));

// --- Otros Middlewares ---
app.use(express.json());

// --- Conexión a MongoDB Atlas ---
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Conectado a MongoDB Atlas"))
  .catch((err) => console.error("❌ Error de conexión:", err));

// --- Rutas de la API ---
const projectsRouter = require("./routes/projectRoutes");
const profileRouter = require("./routes/profileRoutes");
const contentRouter = require("./routes/contentRoutes");

app.use("/api/projects", projectsRouter);
app.use("/api/content", contentRouter);
app.use("/api/profile", profileRouter);

// --- Ruta para Health Check de UptimeRobot ---
app.get("/api/health-check", async (req, res) => {
  // La URL de tu API que quieres mantener activa
  const apiUrl = "https://portfolio-app-web-maxi.onrender.com/api/projects";

  try {
    // Hacemos una llamada a la API de proyectos para "despertarla"
    const response = await fetch(apiUrl);

    // Verificamos si la respuesta de la API fue exitosa
    if (response.ok) {
      console.log("Health check superado. La API respondió correctamente.");
      // Si todo va bien, devolvemos un 200 a UptimeRobot
      res.status(200).json({ status: "ok", message: "API is healthy" });
    } else {
      // Si la API responde con un error, se lo notificamos a UptimeRobot
      console.error(
        `Health check fallido. La API respondió con estado: ${response.status}`
      );
      res
        .status(500)
        .json({
          status: "error",
          message: `API returned status: ${response.status}`,
        });
    }
  } catch (error) {
    // Si hay un error de red (no se puede conectar), también lo notificamos
    console.error("Health check fallido. No se pudo conectar a la API.", error);
    res
      .status(500)
      .json({ status: "error", message: "Failed to connect to the API" });
  }
});

// --- Arranque del Servidor ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("🚀 Servidor corriendo en puerto ~", PORT));
