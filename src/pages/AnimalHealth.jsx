import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Bird,
  Bone,
  Cat,
  HeartPulse,
  MessageCircle,
  PawPrint,
  Rabbit,
  ShieldCheck,
  Syringe,
} from 'lucide-react'

function AnimalHealth() {
  return (
    <>
      <section className="section services-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">ANIMAL HEALTH</span>

            <h1>Better knowledge. Healthier animals.</h1>

            <p>
              Explore practical animal health information covering pets,
              poultry, rabbits and livestock. Learn about common health
              problems, prevention and responsible care.
            </p>
          </div>

          <div className="services-grid">
            <article className="service-card">
              <div className="service-icon">
                <PawPrint size={27} />
              </div>

              <h3>Dogs</h3>

              <p>
                Learn about vaccination, parasite control, nutrition,
                common diseases and preventive healthcare for dogs.
              </p>

              <Link to="/book-consultation">
                Get Veterinary Guidance
                <ArrowRight size={15} />
              </Link>
            </article>

            <article className="service-card">
              <div className="service-icon">
                <Cat size={27} />
              </div>

              <h3>Cats</h3>

              <p>
                Explore responsible cat care, vaccination, parasite
                prevention, nutrition and common health concerns.
              </p>

              <Link to="/book-consultation">
                Get Veterinary Guidance
                <ArrowRight size={15} />
              </Link>
            </article>

            <article className="service-card">
              <div className="service-icon">
                <Bird size={27} />
              </div>

              <h3>Poultry</h3>

              <p>
                Learn about poultry health, biosecurity, vaccination and
                prevention of common diseases affecting chickens.
              </p>

              <Link to="/book-consultation">
                Get Poultry Guidance
                <ArrowRight size={15} />
              </Link>
            </article>

            <article className="service-card">
              <div className="service-icon">
                <Rabbit size={27} />
              </div>

              <h3>Rabbits</h3>

              <p>
                Practical guidance on rabbit nutrition, housing,
                disease prevention and general healthcare.
              </p>

              <Link to="/book-consultation">
                Get Rabbit Guidance
                <ArrowRight size={15} />
              </Link>
            </article>

            <article className="service-card">
              <div className="service-icon">
                <Bone size={27} />
              </div>

              <h3>Cattle</h3>

              <p>
                Information on cattle health, nutrition, parasite
                management, disease prevention and herd wellbeing.
              </p>

              <Link to="/book-consultation">
                Get Livestock Guidance
                <ArrowRight size={15} />
              </Link>
            </article>

            <article className="service-card">
              <div className="service-icon">
                <HeartPulse size={27} />
              </div>

              <h3>Goats & Sheep</h3>

              <p>
                Learn about small-ruminant health, parasite control,
                nutrition and common disease prevention.
              </p>

              <Link to="/book-consultation">
                Get Livestock Guidance
                <ArrowRight size={15} />
              </Link>
            </article>

            <article className="service-card">
              <div className="service-icon">
                <Syringe size={27} />
              </div>

              <h3>Vaccination</h3>

              <p>
                Understand the role of vaccination and why schedules
                should be appropriate for the animal and local disease risks.
              </p>

              <Link to="/book-consultation">
                Ask About Vaccination
                <ArrowRight size={15} />
              </Link>
            </article>

            <article className="service-card">
              <div className="service-icon">
                <ShieldCheck size={27} />
              </div>

              <h3>Disease Prevention</h3>

              <p>
                Learn about hygiene, biosecurity, parasite control and
                other measures that help protect animal health.
              </p>

              <Link to="/book-consultation">
                Get Preventive Guidance
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
              CONCERNED ABOUT YOUR ANIMAL?
            </span>

            <h2>Get veterinary guidance.</h2>

            <p>
              Tell us about your animal and the health problem you are
              experiencing.
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

export default AnimalHealth