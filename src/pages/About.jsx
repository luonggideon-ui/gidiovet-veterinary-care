import { Link } from 'react-router-dom'
import {
  CheckCircle2,
  Globe2,
  HeartHandshake,
  MessageCircle,
  PawPrint,
  ShieldCheck,
  Stethoscope,
} from 'lucide-react'

function About() {
  return (
    <>
      <section className="section about-section">
        <div className="container about-grid">
          <div className="about-visual">
            <div className="about-icon">
              <PawPrint size={92} strokeWidth={1.5} />
            </div>

            <div className="about-stat">
              <strong>24/7</strong>
              <span>Online veterinary support worldwide</span>
            </div>
          </div>

          <div className="about-content">
            <span className="section-label">ABOUT GIDIOVET</span>

            <h1>
              Veterinary guidance with
              <span> every animal in mind.</span>
            </h1>

            <p>
              Gidiovet Online Veterinary Care is focused on making animal
              health information and veterinary guidance easier to access
              through the internet.
            </p>

            <p>
              We support pet owners, livestock farmers, poultry keepers,
              rabbit farmers and other animal caregivers with practical
              information that can help them better understand animal health
              and wellbeing.
            </p>

            <div className="benefits">
              <div className="benefit">
                <CheckCircle2 size={19} />
                Online access from anywhere
              </div>

              <div className="benefit">
                <CheckCircle2 size={19} />
                Support for pets and livestock
              </div>

              <div className="benefit">
                <CheckCircle2 size={19} />
                Practical animal health education
              </div>

              <div className="benefit">
                <CheckCircle2 size={19} />
                Available online 24/7
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">WHAT GUIDES US</span>

            <h2>Our approach to animal care.</h2>

            <p>
              Gidiovet is built around accessibility, responsible guidance,
              education and respect for animal wellbeing.
            </p>
          </div>

          <div className="services-grid">
            <article className="service-card">
              <div className="service-icon">
                <Stethoscope size={27} />
              </div>

              <h3>Professional Guidance</h3>

              <p>
                We aim to provide clear and responsible veterinary guidance
                that helps animal caregivers make informed decisions.
              </p>
            </article>

            <article className="service-card">
              <div className="service-icon">
                <Globe2 size={27} />
              </div>

              <h3>Accessible Worldwide</h3>

              <p>
                Our online model is designed to make veterinary information
                easier to access regardless of location.
              </p>
            </article>

            <article className="service-card">
              <div className="service-icon">
                <HeartHandshake size={27} />
              </div>

              <h3>Animal Wellbeing</h3>

              <p>
                Every animal deserves thoughtful care, attention and
                responsible health support.
              </p>
            </article>

            <article className="service-card">
              <div className="service-icon">
                <ShieldCheck size={27} />
              </div>

              <h3>Prevention First</h3>

              <p>
                We encourage disease prevention, vaccination awareness,
                hygiene and early attention to health concerns.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-content">
          <div>
            <span className="section-label light">
              EVERY ANIMAL HAS A STORY
            </span>

            <h2>Let Gidiovet be part of that story.</h2>

            <p>
              Reach out when you need online veterinary guidance or animal
              health support.
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

export default About