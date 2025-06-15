import { useState } from 'react'
import '../styles/ContactForm.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    productInterest: 'general'
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will contact you shortly.')
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
      productInterest: 'general'
    })
  }

  return (
    <section className="contact-form">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>Ready to discuss your shirt manufacturing needs? Contact us today for a quote or more information.</p>
            <div className="contact-details">
              <p><strong>Email:</strong> info@shirtcraft.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Address:</strong> 123 Manufacturing St, Textile City, TC 12345</p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name*</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input 
                type="text" 
                id="company" 
                name="company" 
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="productInterest">Product Interest</label>
              <select 
                id="productInterest" 
                name="productInterest" 
                value={formData.productInterest}
                onChange={handleChange}
              >
                <option value="general">General Inquiry</option>
                <option value="formal">Formal Shirts</option>
                <option value="casual">Casual Shirts</option>
                <option value="custom">Custom Designs</option>
                <option value="bulk">Bulk Orders</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message*</label>
              <textarea 
                id="message" 
                name="message" 
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required 
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm