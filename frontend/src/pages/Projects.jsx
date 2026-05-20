import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./Projects.module.css";

function Projects() {
  const { projects, content } = useOutletContext();
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageUrl) => setSelectedImage(imageUrl);
  const closeModal = () => setSelectedImage(null);

  return (
    <section>
      <h2>{content.projectsTitle || "Proyectos"}</h2>
      <div className={styles.projectsGrid}>
        {[...projects].sort((a, b) => {
            if (a._id > b._id) return -1;
            if (a._id < b._id) return 1;
            return 0;
          }).map((project) => (
          <div
            key={project._id}
            className={`${styles.projectCard} ${
              styles[`status-${project.status.replace(" ", "-")}`]
            }`}
          >
            <img
              src={project.image_url}
              alt={`${project.title} screenshot`}
              className={styles.projectImage}
              onClick={() => openModal(project.image_url)}
            />
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>
                {project.title}
                {(project.status === "en desarrollo" ||
                  project.status === "in progress") && (
                  <span className={styles.projectStatusTag}>
                    {project.status}
                  </span>
                )}
              </h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.projectLinks}>
                {project.demo_url && (
                  <a
                    href={project.demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                )}
                {project.repository_url && (
                  <a
                    href={project.repository_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* SVG Icon */}
                    Repo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className={styles.imageModalOverlay} onClick={closeModal}>
          <div
            className={styles.imageModalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedImage} alt="Project zoom" />
            <button className={styles.closeModalButton} onClick={closeModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
