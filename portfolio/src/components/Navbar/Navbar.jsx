import "./Navbar.css"

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <a className="navbar-logo" href="#home">
          FP
        </a>

        <nav>
          <ul className="navbar-links">
            <li>
              <a href="#about">Sobre mí</a>
            </li>

            <li>
              <a href="#technologies">Tecnologías</a>
            </li>

            <li>
              <a href="#projects">Proyectos</a>
            </li>

            <li>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar