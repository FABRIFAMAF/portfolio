import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar-header">
      <nav className="navbar">
        <a className="navbar-brand" href="#">
          Fabrizio Peralta
        </a>

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
    </header>
  )
}

export default Navbar