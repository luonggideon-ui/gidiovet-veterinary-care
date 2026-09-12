import {
  Mail,
  MapPin,
  MessageCircle,
  Clock3,
} from 'lucide-react'

function Contact() {
  return (
    <>
      <section className="section services-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">CONTACT GIDIOVET</span>

            <h1>We’re here to help.</h1>

            <p>
              Contact Gidiovet Online Veterinary Care for animal health
              guidance, consultation requests and general enquiries.
            </p>
          </div>

          <div className="services-grid">
            <article className="service-card">
              <div className="service-icon">
                <MessageCircle size={27} />
              </div>

              <h3>WhatsApp</h3>

              <p>
                Send us a message directly on WhatsApp for veterinary
                guidance and consultation enquiries.
              </p>

              <a
                href="https://wa.me/237671964562"
                target="_blank"
                rel="noreferrer"
              >
                +237 671 964 562
              </a>
            </article>

            <article className="service-card">
              <div className="service-icon">
                <Mail size={27} />
              </div>

              <h3>Email</h3>

              <p>
                You can also contact Gidiovet by email for enquiries and
                animal health support.
              </p>

              <a href="mailto:gidiovetcare@gmail.com">
                gidiovetcare@gmail.com
              </a>
            </article>

            <article className="service-card">
              <div className="service-icon">
                <Clock3 size={27} />
              </div>

              <h3>Availability</h3>

              <p>
                Our online service is available for consultation requests
                and animal health enquiries 24 hours a day.
              </p>

              <span>Available online 24/7</span>
            </article>

            <article className="service-card">
              <div className="service-icon">
                <MapPin size={27} />
              </div>

              <h3>Service Area</h3>

              <p>
                Gidiovet operates online, making our animal health guidance
                accessible to animal caregivers worldwide.
              </p>

              <span>Online worldwide</span>
            </article>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-content">
          <div>
            <span className="section-label light">
              READY TO GET IN TOUCH?
            </span>

            <h2>Send us a message on WhatsApp.</h2>

            <p>
              Tell us about your animal and the health concern you need
              guidance with.
            </p>
          </div>

          <a
            href="https://wa.me/237671964562"
            target="_blank"
            rel="noreferrer"
            className="cta-button"
          >
            <MessageCircle size={19} />
            Contact on WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}

export default Contact