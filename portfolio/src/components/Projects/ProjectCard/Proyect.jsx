import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";

function Projects({ projects }) {
  return (
    <section className="projects" id="projects">

      <div className="projects-container">

        <p className="section-label">
          Proyectos
        </p>

        <h2>
          Algunos de los proyectos que desarrollé
        </h2>

        <p className="projects-description">
          Estos proyectos fueron desarrollados como parte de mi formación,
          aplicando conceptos de arquitectura, persistencia, seguridad y
          desarrollo backend con Java.
        </p>

        <div className="projects-grid">

          {projects.map((project) => (

            <ProjectCard
              key={project.id}
              project={project}
            />

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;