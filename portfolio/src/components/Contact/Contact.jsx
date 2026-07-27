import "./Contact.css"

function Contact({ contact }) {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <p className="section-label">{contact.title}</p>

        <h2>{contact.heading}</h2>

        <p className="contact-description">
          {contact.description}
        </p>

        <div className="contact-links">
          <a href={`mailto:${contact.email}`}>
            Enviar correo
          </a>

          <a
            href={contact.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href={contact.linkedinUrl}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact