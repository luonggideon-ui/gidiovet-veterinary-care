import { useState } from 'react'
import {
  CalendarCheck,
  MessageCircle,
  PawPrint,
  Stethoscope,
} from 'lucide-react'

function BookConsultation() {
  const [formData, setFormData] = useState({
    ownerName: '',
    country: '',
    whatsapp: '',
    animalType: '',
    animalName: '',
    age: '',
    sex: '',
    symptoms: '',
    duration: '',
    medication: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const message = `
Hello Gidiovet Online Veterinary Care.

I would like to request a veterinary consultation.

Owner Name: ${formData.ownerName}
Country: ${formData.country}
WhatsApp Number: ${formData.whatsapp}

Animal Type: ${formData.animalType}
Animal Name: ${formData.animalName || 'Not provided'}
Age: ${formData.age || 'Not provided'}
Sex: ${formData.sex || 'Not provided'}

Health Concern / Symptoms:
${formData.symptoms}

How long has this been happening?
${formData.duration || 'Not provided'}

Current medication or treatment:
${formData.medication || 'None provided'}
    `.trim()

    const whatsappUrl = `https://wa.me/237671964562?text=${encodeURIComponent(
      message,
    )}`

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <section className="section services-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">BOOK A CONSULTATION</span>

            <h1>Tell us about your animal.</h1>

            <p>
              Complete the form below with your animal's information and
              health concern. When you submit, the details will be prepared
              in a WhatsApp message to Gidiovet.
            </p>
          </div>

          <div className="consultation-layout">
            <form
              className="consultation-form"
              onSubmit={handleSubmit}
            >
              <div className="form-section-heading">
                <div className="service-icon">
                  <CalendarCheck size={26} />
                </div>

                <div>
                  <h2>Consultation Details</h2>
                  <p>Please provide as much information as possible.</p>
                </div>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="ownerName">
                    Your Name *
                  </label>

                  <input
                    id="ownerName"
                    name="ownerName"
                    type="text"
                    value={formData.ownerName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="country">
                    Country *
                  </label>

                  <input
                    id="country"
                    name="country"
                    type="text"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    placeholder="Example: UAE"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="whatsapp">
                    Your WhatsApp Number *
                  </label>

                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                    placeholder="+971..."
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="animalType">
                    Animal Type *
                  </label>

                  <select
                    id="animalType"
                    name="animalType"
                    value={formData.animalType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">
                      Select animal type
                    </option>

                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                    <option value="Chicken / Poultry">
                      Chicken / Poultry
                    </option>
                    <option value="Rabbit">Rabbit</option>
                    <option value="Cattle">Cattle</option>
                    <option value="Goat">Goat</option>
                    <option value="Sheep">Sheep</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="animalName">
                    Animal Name
                  </label>

                  <input
                    id="animalName"
                    name="animalName"
                    type="text"
                    value={formData.animalName}
                    onChange={handleChange}
                    placeholder="If applicable"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="age">
                    Animal Age
                  </label>

                  <input
                    id="age"
                    name="age"
                    type="text"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="Example: 2 years"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="sex">
                    Sex
                  </label>

                  <select
                    id="sex"
                    name="sex"
                    value={formData.sex}
                    onChange={handleChange}
                  >
                    <option value="">Select sex</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Unknown">Unknown</option>
                  </select>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="symptoms">
                    Health Concern / Symptoms *
                  </label>

                  <textarea
                    id="symptoms"
                    name="symptoms"
                    value={formData.symptoms}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Describe the symptoms or health problem you have noticed."
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="duration">
                    How long has this been happening?
                  </label>

                  <input
                    id="duration"
                    name="duration"
                    type="text"
                    value={formData.duration}
                    onChange={handleChange}
                    placeholder="Example: 3 days"
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="medication">
                    Current Medication or Treatment
                  </label>

                  <textarea
                    id="medication"
                    name="medication"
                    value={formData.medication}
                    onChange={handleChange}
                    rows="3"
                    placeholder="List any medication or treatment already given."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="primary-button consultation-submit"
              >
                <MessageCircle size={19} />
                Send Details on WhatsApp
              </button>

              <p className="form-note">
                This online service provides veterinary guidance and does not
                replace urgent in-person veterinary care when an animal is
                experiencing a medical emergency.
              </p>
            </form>

            <aside className="consultation-info">
              <div className="service-icon">
                <Stethoscope size={28} />
              </div>

              <h2>Before you submit</h2>

              <p>
                Clear information helps us better understand your animal's
                situation.
              </p>

              <div className="consultation-tip">
                <PawPrint size={19} />

                <span>
                  Describe when the problem started and any changes you have
                  noticed.
                </span>
              </div>

              <div className="consultation-tip">
                <PawPrint size={19} />

                <span>
                  Mention any medication, vaccination or treatment already
                  given.
                </span>
              </div>

              <div className="consultation-tip">
                <PawPrint size={19} />

                <span>
                  After opening WhatsApp, you can also attach clear photos or
                  videos if they may help explain the problem.
                </span>
              </div>

              <a
                href="https://wa.me/237671964562"
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                <MessageCircle size={18} />
                Open WhatsApp Directly
              </a>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

export default BookConsultation