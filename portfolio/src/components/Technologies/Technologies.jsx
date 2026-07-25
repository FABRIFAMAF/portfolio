import './Technologies.css'

function Technologies({ technologies }) {
  return (
    <section className="technologies" id="technologies">
      <div className="technologies-container">
        <p className="section-label">Tecnologías</p>

        <h2>Herramientas con las que trabajo</h2>

        <p className="technologies-description">
          Tecnologías utilizadas en mis proyectos y en mi formación como
          desarrollador backend.
        </p>

        <ul className="technologies-list">
          {technologies.map((technology) => (
            <li className="technology-item" key={technology}>
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Technologies