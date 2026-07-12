import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import es from "./i18n/es.json";
import en from "./i18n/en.json";

const translations = { es, en };

function App() {
  const [language, setLanguage] = useState("es");
  const data = translations[language];

  const profile = data.profile;
  const projects = data.projects;
  const skills = data.skills;
  const experience = data.experience;
  const nav = data.nav;
  const titles = data.titles;

  const navLinks = [
    { to: "#home", text: nav.home },
    { to: "#about", text: nav.about },
    { to: "#experience", text: nav.experience },
    { to: "#projects", text: nav.projects },
    { to: "#skills", text: nav.skills },
    { to: "#contact", text: nav.contact },
  ];

  const footerText = titles.footerText;

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
          <About profile={profile} content={titles} language={language} />
        </section>
        <section id="experience">
          <Experience experience={experience} content={titles} language={language} />
        </section>
        <section id="projects">
          <Projects projects={projects} content={titles} language={language} />
        </section>
        <section id="skills">
          <Skills skills={skills} content={titles} />
        </section>
        <section id="contact">
          <Contact content={titles} profile={profile} />
        </section>
      </main>
      <Footer footerText={footerText} profile={profile} />
    </>
  );
}

export default App;
