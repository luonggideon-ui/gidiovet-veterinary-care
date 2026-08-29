function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">24/7 WORLDWIDE VETERINARY CARE</p>

          <h1>
            Every Animal Has
            <span> A Story.</span>
          </h1>

          <p className="hero-description">
            Professional veterinary guidance and animal healthcare support,
            available online wherever you are in the world.
          </p>

          <div className="hero-actions">
            <a href="/book-consultation" className="primary-button">
              Book a Consultation
            </a>

            <a href="/services" className="secondary-button">
              Explore Services
            </a>
          </div>
        </div>
      </section>

      <section className="services-preview">
        <div className="section-heading">
          <p className="eyebrow">WHAT WE OFFER</p>

          <h2>
            Caring for animals,
            <span> wherever you are.</span>
          </h2>

          <p>
            Gidiovet Online Veterinary Care provides accessible veterinary
            information, consultation and animal healthcare support through
            the internet.
          </p>
        </div>

        <div className="service-cards">
          <article className="service-card">
            <h3>Online Consultation</h3>
            <p>
              Get veterinary guidance and discuss your animal's health
              concerns remotely.
            </p>
          </article>

          <article className="service-card">
            <h3>Animal Health Guidance</h3>
            <p>
              Learn about common animal diseases, symptoms, prevention and
              appropriate care.
            </p>
          </article>

          <article className="service-card">
            <h3>Pet & Livestock Care</h3>
            <p>
              Practical healthcare support for pets, poultry, rabbits,
              livestock and other animals.
            </p>
          </article>
        </div>
      </section>

      <section className="trust-section">
        <div>
          <p className="eyebrow">GIDIOVET ONLINE VETERINARY CARE</p>

          <h2>
            Veterinary support with
            <span> your animal's wellbeing at heart.</span>
          </h2>

          <p>
            Our goal is simple: make reliable veterinary information and
            professional guidance easier to access, regardless of where you
            are located.
          </p>

          <a href="/about" className="primary-button">
            Learn More About Us
          </a>
        </div>

        <div className="availability-card">
          <strong>24/7</strong>
          <span>Online Service</span>

          <p>
            Worldwide access through the internet.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Home