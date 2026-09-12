import { Link } from 'react-router-dom'
import {
  ArrowRight,
  HeartPulse,
  MessageCircle,
  PawPrint,
  ShieldCheck,
  Stethoscope,
  Syringe,
} from 'lucide-react'

function Services() {
  return (
    <>
      <section className="section services-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">OUR SERVICES</span>

            <h1>Veterinary support wherever you are.</h1>

            <p>
              Gidiovet Online Veterinary Care provides accessible animal health
              guidance and online veterinary support for pet owners, farmers
              and animal caregivers.
            </p>
          </div>

          <div className="services-grid">
            <article className="service-card">
              <div className="service-icon">
                <Stethoscope size={27} />
              </div>

              <h3>Online Veterinary Consultation</h3>

              <p>
                Discuss your animal's health concerns remotely and receive
                professional veterinary guidance.
              </p>

              <Link to="/book-consultation">
                Book Consultation
                <ArrowRight size={15} />
              </Link>
            </article>

            <article className="service-card">
              <div className="service-icon">
                <HeartPulse size={27} />
              </div>

              <h3>Animal Health Guidance</h3>

              <p>
                Learn about common symptoms, diseases, prevention and
                responsible animal healthcare.
              </p>

              <Link to="/animal-health">
                Learn More
                <ArrowRight size={15} />
              </Link>
            </article>

            <article className="service-card">
              <div className="service-icon">
                <PawPrint size={27} />
              </div>

              <h3>Pet Care</h3>

              <p>
                Practical health guidance for dogs, cats and other companion
                animals.
              </p>

              <Link to="/book-consultation">
                Get Support
                <ArrowRight size={15} />
              </Link>
            </article>

            <article className="service-card">
              <div className="service-icon">
                <ShieldCheck size={27} />
              </div>

              <h3>Preventive Healthcare</h3>

              <p>
                Guidance on parasite control, hygiene, nutrition and disease
                prevention.
              </p>

              <Link to="/animal-health">
                Learn More
                <ArrowRight size={15} />
              </Link>
            </article>

            <article className="service-card">
              <div className="service-icon">
                <Syringe size={27} />
              </div>

              <h3>Vaccination Guidance</h3>

              <p>
                Understand vaccination schedules and important preventive
                measures for different animals.
              </p>

              <Link to="/animal-health">
                View Health Guidance
                <ArrowRight size={15} />
              </Link>
            </article>

            <article className="service-card">
              <div className="service-icon">
                <PawPrint size={27} />
              </div>

              <h3>Livestock & Poultry Care</h3>

              <p>
                Health guidance for cattle, goats, sheep, poultry, rabbits and
                other farm animals.
              </p>

              <Link to="/book-consultation">
                Get Veterinary Guidance
                <ArrowRight size={15} />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-content">
          <div>
            <span className="section-label light">
              NEED HELP WITH YOUR ANIMAL?
            </span>

            <h2>Talk to Gidiovet today.</h2>

            <p>
              Start an online veterinary consultation wherever you are.
            </p>
          </div>

          <Link to="/book-consultation" className="cta-button">
            <MessageCircle size={19} />
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  )
}

export default Services