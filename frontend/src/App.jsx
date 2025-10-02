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

function App() {
  const [language, setLanguage] = useState("es");
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // En desarrollo, si VITE_API_URL no está definida en un archivo .env,
  // se usará la URL de localhost como valor por defecto.
  const API_BASE_URL =
    import.meta.env.VITE_API_URL || "https://apimaxi.seligmann.es/api/";


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Usamos la nueva URL base para todas las peticiones
        const profileRes = await fetch(
          `${API_BASE_URL}profile.php?lang=${language}`
        );
        const profileData = await profileRes.json();
        setProfile(profileData);

        const projectsRes = await fetch(
          `${API_BASE_URL}projects.php?lang=${language}`
        );
        const projectsData = await projectsRes.json();
        setProjects(projectsData);

        const contentRes = await fetch(
          `${API_BASE_URL}content.php?lang=${language}`
        );
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

  const footerText = profile?.name
    ? content.footerText?.replace("Maximiliano Seligmann", profile.name)
    : content.footerText;

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
      <Footer footerText={footerText} />
    </>
  );
}

export default App;
