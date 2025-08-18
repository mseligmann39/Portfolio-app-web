import React, { useState, useEffect } from "react";
import "./style.css";

// Importamos todos nuestros componentes de presentación
import Header from "./components/Header";
import Nav from "./components/Nav";
import Secciones from "./components/Secciones";
import Footer from "./components/Footer";

function App() {
  // --- ESTADOS ---
  // Gestiona el idioma actual de la aplicación
  const [lang, setLang] = useState("es");
  // Almacena los datos del perfil (nombre, subtítulo, etc.)
  const [profile, setProfile] = useState(null);
  // Almacena la lista de proyectos
  const [projects, setProjects] = useState([]);
  // Almacena todo el contenido de texto de la UI (títulos, botones, etc.)
  const [content, setContent] = useState(null);

  // --- PETICIONES A LA API ---
  // Se ejecutan cada vez que el estado 'lang' cambia
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Pedimos todos los datos en paralelo para mejorar el rendimiento
        const [profileRes, projectsRes, contentRes] = await Promise.all([
          //fetch(`http://localhost:5000/api/profile?lang=${lang}`),
          fetch(`${import.meta.env.VITE_API_URL}/api/content?lang=${lang}`),
          fetch(`${import.meta.env.VITE_API_URL}/api/profile?lang=${lang}`),
          fetch(`${import.meta.env.VITE_API_URL}/api/projects?lang=${lang}`),
          // fetch(`http://localhost:5000/api/content?lang=${lang}`),
          //fetch(`http://localhost:5000/api/content?lang=${lang}`),
        ]);

        // Convertimos las respuestas a JSON
        const profileData = await profileRes.json();
        const projectsData = await projectsRes.json();
        const contentData = await contentRes.json();

        // Actualizamos los estados con los datos recibidos
        setProfile(profileData);
        setProjects(projectsData);
        setContent(contentData);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, [lang]);

  // --- LÓGICA DERIVADA ---
  // ¡AQUÍ ESTÁ LA MAGIA!
  // En lugar de pedir una lista de skills a la API, la creamos dinámicamente.
  // 1. Creamos un array con TODAS las tecnologías de TODOS los proyectos.
  // 2. Usamos 'Set' para eliminar duplicados y obtener una lista de habilidades únicas.
  const uniqueSkills = [...new Set(projects.flatMap((p) => p.technologies))];

  // Muestra un estado de carga mientras los datos esenciales no lleguen
  if (!profile || !content) {
    return <div>Cargando Portfolio...</div>;
  }

  // --- RENDERIZADO ---
  // El return es limpio: solo ensambla los componentes y les pasa los datos necesarios
  return (
    <>
      <Header profile={profile} setLang={setLang} />
      <Nav content={content} />
      <Secciones
        profile={profile}
        projects={projects}
        skills={uniqueSkills} // Le pasamos la lista de skills únicas que acabamos de crear
        content={content}
      />
      <Footer content={content} profile={profile} />
    </>
  );
}

export default App;
