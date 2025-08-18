const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();

// Middleware
app.use(cors({
    origin: ['https://maxi.seligmann.es','http://localhost:5173'] , // Reemplaza con el dominio de tu frontend en Hostinger
    methods: ['GET'], // Métodos HTTP permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
}));
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

const corsOptions = {
  origin: function (origin, callback) {
    // 2. Comprueba si el origen de la petición está en tu lista blanca
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      // Si está permitido (o es una petición sin origen como Postman), permite el acceso
      callback(null, true);
    } else {
      // Si no está permitido, rechaza la petición
      callback(new Error('No permitido por CORS'));
    }
  }
};

// 3. Usa la nueva configuración
app.use(cors(corsOptions));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server corriendo en puerto ~', PORT));