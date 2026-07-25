import './Hero.css'

function Hero({ profile }) {
  return (
    <main className="main-content">
      <section className="hero">
        <p className="hero-greeting">{profile.greeting}</p>

        <h1>{profile.name}</h1>

        <h2>{profile.title}</h2>

        <p className="hero-description">{profile.description}</p>

        <a className="hero-button" href="#projects">
          {profile.buttonText}
        </a>
      </section>
    </main>
  )
}

export default Hero