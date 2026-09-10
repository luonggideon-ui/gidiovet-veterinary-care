import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  HeartPulse,
  MessageCircle,
  PawPrint,
  ShieldCheck,
  Stethoscope,
} from 'lucide-react'

function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot"></span>
              24/7 WORLDWIDE VETERINARY CARE
            </div>

            <h1>
              Every Animal Has
              <span>A Story.</span>
            </h1>

            <p className="hero-text">
              Professional veterinary guidance and animal healthcare support,
              available online wherever you are in the world.
            </p>

            <div className="hero-actions">
              <Link
                to="/book-consultation"
                className="primary-button"
              >
                <Stethoscope size={18} />
                Book a Consultation
              </Link>

              <Link
                to="/services"
                className="secondary-button"
              >
                Explore Services
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="hero-contact">
              <MessageCircle size={17} />
              <span>
                WhatsApp:{' '}
                <strong>+237 671 964 562</strong>
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="main-card">
              <div className="animal-circle">
                <PawPrint size={95} strokeWidth={1.5} />
              </div>

              <div className="care-badge">
                <HeartPulse size={27} />

                <div>
                  <strong>Professional Care</strong>
                  <span>Your animal's wellbeing matters</span>
                </div>
              </div>
            </div>

            <div className="floating-card card-one">
              <Clock3 size={24} />

              <div>
                <strong>24/7 Available</strong>
                <span>Online worldwide</span>
              </div>
            </div>

            <div className="floating-card card-two">
              <ShieldCheck size={24} />

              <div>
                <strong>Trusted Guidance</strong>
                <span>Animal health support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">
              WHAT WE OFFER
            </span>

            <h2>
              Caring for animals wherever you are.
            </h2>

            <p>
              Gidiovet Online Veterinary Care makes veterinary information,
              consultation and animal healthcare guidance easier to access
              through the internet.
            </p>
          </div>

          <div className="services-grid">
            <article className="service-card">
              <div className="service-icon">
                <Stethoscope size={26} />
              </div>

              <h3>Online Veterinary Consultation</h3>

              <p>
                Discuss your animal's health concerns and receive professional
                veterinary guidance remotely.
              </p>

              <Link to="/book-consultation">
                Book Consultation
                <ArrowRight size={15} />
              </Link>
            </article>

            <article className="service-card">
              <div className="service-icon">
                <HeartPulse size={26} />
              </div>

              <h3>Animal Health Guidance</h3>

              <p>
                Learn about common diseases, warning signs, prevention and
                responsible animal healthcare.
              </p>

              <Link to="/animal-health">
                Learn More
                <ArrowRight size={15} />
              </Link>
            </article>

            <article className="service-card">
              <div className="service-icon">
                <PawPrint size={26} />
              </div>

              <h3>Pet & Livestock Care</h3>

              <p>
                Practical guidance for pets, poultry, rabbits, livestock and
                other animals.
              </p>

              <Link to="/services">
                View Services
                <ArrowRight size={15} />
              </Link>
            </article>

            <article className="service-card">
              <div className="service-icon">
                <ShieldCheck size={26} />
              </div>

              <h3>Preventive Health</h3>

              <p>
                Guidance on vaccination, parasite control, hygiene and other
                preventive animal health practices.
              </p>

              <Link to="/animal-health">
                Learn More
                <ArrowRight size={15} />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section about-section">
        <div className="container about-grid">
          <div className="about-visual">
            <div className="about-icon">
              <PawPrint size={90} strokeWidth={1.5} />
            </div>

            <div className="about-stat">
              <strong>24/7</strong>
              <span>Worldwide online veterinary support</span>
            </div>
          </div>

          <div className="about-content">
            <span className="section-label">
              WHY GIDIOVET?
            </span>

            <h2>
              Veterinary support with
              <span> your animal's wellbeing at heart.</span>
            </h2>

            <p>
              Our goal is to make reliable animal health information and
              professional veterinary guidance easier to access wherever you
              are.
            </p>

            <p>
              Whether you care for a pet, poultry, rabbits or livestock,
              Gidiovet is designed to help you make better-informed decisions
              about animal health and wellbeing.
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

      <section className="cta-section">
        <div className="container cta-content">
          <div>
            <span className="section-label light">
              NEED VETERINARY GUIDANCE?
            </span>

            <h2>Let's talk about your animal.</h2>

            <p>
              Start an online consultation with Gidiovet today.
            </p>
          </div>

          <Link
            to="/book-consultation"
            className="cta-button"
          >
            <MessageCircle size={19} />
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home