// 1. Importa useState y useEffect desde React
import React, { useState, useEffect } from 'react';

function App() {
  // 2. Crea un estado para guardar los proyectos. Inicialmente es un array vacío.
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);

  // 3. Usa useEffect para hacer la petición a tu API cuando el componente se monte
  useEffect(() => {
    // Define una función asíncrona dentro para poder usar await
    const fetchProjects = async () => {
      try {
        // Pide los datos a tu backend
        const response = await fetch('http://localhost:5000/api/projects');
        // Convierte la respuesta a JSON
        const data = await response.json();
        // Actualiza el estado 'projects' con los datos recibidos
        setProjects(data);
      } catch (error) {
        console.error("Error al obtener los proyectos:", error);
      }
    };
    // Si también necesitas las habilidades, puedes hacer otra petición aquí
   const fetchSkills = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/skills');
      const data = await response.json();
      setSkills(data);
    } catch (error) {
      console.error("Error al obtener las habilidades:", error);
    }
  };
  fetchSkills();
    

    // Llama a la función
    fetchProjects();
  }, []); // El array vacío asegura que este efecto se ejecute solo una vez

  // 4. Renderiza tu componente.
return (
  <>
    <div className="App">
      <h1>Mis Proyectos</h1>
      <div className="projects-grid">
        {/* 5. Mapea el array de proyectos y crea un elemento por cada uno */}
        {projects.map(project => (
          // Usa un 'key' único para cada elemento de la lista, el _id de MongoDB es perfecto
          <div key={project._id} className="project-card">
            <h3>{project.emoji} {project.title}</h3>
            <p>{project.description}</p>
            {/* Aquí puedes mapear también las tecnologías */}
          </div>
        ))}
      </div>
    </div>
    <section className="skills-section">
      <h2>Habilidades</h2>
      <ul className="skills-list">
        {skills.map(skill => (
          <li key={skill._id}>{skill.name}</li>
        ))}
      </ul>
    </section>
  </>
);
}

export default App;