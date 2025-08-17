import React from "react";

function Secciones({ profile, projects, skills, content }) {
  return (
    <main>
      <section id="about" className="container">
        <h2>{content.aboutTitle}</h2>
        <p>{profile.aboutText}</p>
      </section>

      <section id="projects" className="container">
        <h2>{content.projectsTitle}</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project._id} className="project-card">
              <h3>
                {project.emoji} {project.title}
              </h3>
              <p>{project.description}</p>
              <div className="technologies">
                <strong>Tecnologías:</strong>
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <a
                href={project.repository_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Ver más
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="container">
        <h2>{content.skillsTitle}</h2>
        <p>{content.skillsText}</p>
        <h4>{content.digitalSkillsTitle}</h4>
        <p>{content.digitalSkillsText}</p>
        <ul className="skills-list">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section id="contact" className="container">
        <h2>{content.contactTitle}</h2>
        <p>Email: {profile.contactEmail}</p>
        <p>
          GitHub:{" "}
          <a
            href={profile.contactGitHub}
            target="_blank"
            rel="noopener noreferrer"
          >
            {profile.contactGitHub}
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href={profile.contactLinkedIn}
            target="_blank"
            rel="noopener noreferrer"
          >
            {profile.contactLinkedIn}
          </a>
        </p>
        <a href="/docs/cv.pdf" download className="btn">
          {content.downloadCV}
        </a>
      </section>
    </main>
  );
}

export default Secciones;
