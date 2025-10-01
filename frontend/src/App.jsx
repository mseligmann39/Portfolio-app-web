import { useState, useEffect } from "react";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

// --- INICIO DE LA MODIFICACIÓN ---
// Lee la URL de la API desde las variables de entorno de Vite.
// Para 'npm run dev', usará la variable en .env.development.
// Para 'npm run build', usará la variable en .env.production.
const API_BASE_URL = import.meta.env.VITE_API_URL;
// --- FIN DE LA MODIFICACIÓN ---

function App() {
  const [language, setLanguage] = useState("es");
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Si la URL de la API no está definida, muestra un error y no intentes hacer fetch.
    if (!API_BASE_URL) {
      console.error("Error: VITE_API_URL no está definida en tus archivos .env");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        
        const profileRes = await fetch(`${API_BASE_URL}/profile.php?lang=${language}`);
        const profileData = await profileRes.json();
        setProfile(profileData);

        const projectsRes = await fetch(`${API_BASE_URL}/projects.php?lang=${language}`);
        const projectsData = await projectsRes.json();
        setProjects(projectsData);

        const contentRes = await fetch(`${API_BASE_URL}/content.php?lang=${language}`);
        const contentData = await contentRes.json();
        setContent(contentData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [language]);

  const navLinks = content.navAbout
    ? [
        { to: "/about", text: content.navAbout },
        { to: "/projects", text: content.navProjects },
        { to: "/skills", text: content.navSkills },
        { to: "/contact", text: content.navContact },
      ]
    : [];

  if (loading) {
    return <Loader language={language} />;
  }

  return (
    <>
      <Header
        language={language}
        setLanguage={setLanguage}
        navLinks={navLinks}
        profileName={profile?.name}
      />
      <main key={location.pathname} className="page-enter">
        <Routes>
          <Route
            path="/"
            element={
              <Outlet context={{ profile, projects, content, language }} />
            }
          >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="skills" element={<Skills />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </main>
      <Footer footerText={content.footerText} />
    </>
  );
}

export default App;