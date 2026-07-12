import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import data from "./data.json";

function App() {
  const [language, setLanguage] = useState("es");

  const content = data[language];
  const profile = data.profile;
  const projects = data.projects;
  const skills = data.skills;
  const experience = data.experience;

  const navLinks = content.navAbout
    ? [
        { to: "#home", text: data[language].navAbout ? "Inicio" : "Home" }, // Home/Inicio
        { to: "#about", text: content.navAbout },
        { to: "#experience", text: content.navExperience || "Experiencia" },
        { to: "#projects", text: content.navProjects },
        { to: "#skills", text: content.navSkills },
        { to: "#contact", text: content.navContact },
      ]
    : [];

  const footerText = content.footerText;

  return (
    <>
      <Header
        language={language}
        setLanguage={setLanguage}
        navLinks={navLinks}
        profileName={profile?.name}
      />
      <main className="page-container">
        <section id="home">
          <Home profile={profile} language={language} />
        </section>
        <section id="about">
          <About profile={profile} content={content} language={language} />
        </section>
        <section id="experience">
          <Experience experience={experience} content={content} language={language} />
        </section>
        <section id="projects">
          <Projects projects={projects} content={content} language={language} />
        </section>
        <section id="skills">
          <Skills skills={skills} content={content} />
        </section>
        <section id="contact">
          <Contact content={content} profile={profile} />
        </section>
      </main>
      <Footer footerText={footerText} profile={profile} />
    </>
  );
}

export default App;
