import { useState, useEffect, useRef } from "react";
import styles from "./Projects.module.css";

function Projects({ projects, content, language }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const sortedProjects = [...projects].sort((a, b) => {
    if (a.id > b.id) return -1;
    if (a.id < b.id) return 1;
    return 0;
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      // On mobile viewports, skip sticky calculations as layout becomes normal stacked sections
      if (window.innerWidth <= 768) {
        return;
      }

      const rect = containerRef.current.getBoundingClientRect();
      const viewHeight = window.innerHeight;

      // Calculate scroll progress within the projects section
      const scrolled = -rect.top;
      const totalScrollable = rect.height - viewHeight;

      if (totalScrollable <= 0) return;

      let progress = scrolled / totalScrollable;
      progress = Math.max(0, Math.min(1, progress));

      const numProjects = sortedProjects.length;
      const index = Math.min(Math.floor(progress * numProjects), numProjects - 1);
      
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [sortedProjects.length]);

  const scrollToProject = (index) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY;
    const containerTop = rect.top + scrollTop;
    const totalScrollable = rect.height - window.innerHeight;
    const numProjects = sortedProjects.length;

    // Scroll to the middle of the scroll range for the given project
    const targetScroll = containerTop + (index / (numProjects - 1 || 1)) * totalScrollable;

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };



  return (
    <section
      id="projects"
      ref={containerRef}
      className={styles.projectsSection}
      style={{ "--num-projects": sortedProjects.length }}
    >
      <div className={styles.stickyContainer}>
        {/* Background Images Layer */}
        <div className={styles.bgContainer}>
          {sortedProjects.map((project, idx) => (
            <div
              key={`bg-${project.id}`}
              className={`${styles.projectBg} ${idx === activeIndex ? styles.activeBg : ""}`}
              style={{ backgroundImage: `url(${project.image_url})` }}
            />
          ))}
        </div>

        {/* Section Title */}
        <h2 className={styles.sectionTitle}>{content.projectsTitle || "Proyectos"}</h2>

        {/* Content Slides */}
        <div className={styles.slidesContainer}>
          {sortedProjects.map((project, idx) => {
            const title = project.title;
            const description = project.description;
            const status = project.status;
            const isDevelopment = status === "en desarrollo" || status === "in progress";
            const isActive = idx === activeIndex;

            return (
              <div
                key={`slide-${project.id}`}
                className={`${styles.projectSlide} ${isActive ? styles.activeSlide : ""}`}
              >
                <div
                  className={styles.mobileSlideBg}
                  style={{ backgroundImage: `url(${project.image_url})` }}
                />
                <div className={styles.slideContent}>
                  <span className={styles.projectCategory}>
                    {project.category || (isDevelopment ? "En Desarrollo" : "Completado")}
                  </span>
                  <h3 className={styles.projectTitle}>
                    {title}
                    {isDevelopment && (
                      <span className={styles.projectStatusTag}>
                        {status}
                      </span>
                    )}
                  </h3>
                  <div className={styles.projectTechnologies}>
                    {project.technologies &&
                      project.technologies.map((tech) => (
                        <span key={tech} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                  </div>
                  <p className={styles.projectDescription}>{description}</p>
                  <div className={styles.projectLinks}>
                    {project.demo_url && (
                      <a
                        href={project.demo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.btnDemo}
                      >
                        Demo
                      </a>
                    )}
                    {project.repository_url && (
                      <a
                        href={project.repository_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.btnRepo}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className={styles.contactIcon}
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        Repo
                      </a>
                    )}

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Indicators Dots */}
        <div className={styles.dotsIndicator}>
          {sortedProjects.map((_, idx) => (
            <button
              key={`dot-${idx}`}
              className={`${styles.dot} ${idx === activeIndex ? styles.activeDot : ""}`}
              onClick={() => scrollToProject(idx)}
              aria-label={`Ir al proyecto ${idx + 1}`}
            />
          ))}
        </div>
      </div>


    </section>
  );
}

export default Projects;
