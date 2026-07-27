import "./ProjectCard.css"

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-image-container">
        <img
          className="project-image"
          src={project.image}
          alt={`Captura del proyecto ${project.title}`}
        />
      </div>

      <div className="project-card-content">
        <h3>{project.title}</h3>

        <p className="project-type">
          {project.type}
        </p>

        

        <p className="project-description">
          {project.description}
        </p>

        <ul className="project-technologies">
          {project.technologies.map((technology) => (
            <li key={technology}>
              {technology}
            </li>
          ))}
        </ul>

        <a
            className="project-link"
            href={project.repositoryUrl}
            target="_blank"
            rel="noreferrer"
            >
            Ver en GitHub
        </a>
      </div>
    </article>
  )
}

export default ProjectCard