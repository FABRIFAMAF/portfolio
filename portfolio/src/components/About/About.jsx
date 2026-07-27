import './About.css'

function About({ profile }) {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <p className="section-label">{profile.aboutTitle}</p>

        <div className="about-content">
          <h2>{profile.aboutHeading}</h2>

          <p>{profile.aboutText}</p>
        </div>
      </div>
    </section>
  )
}

export default About