import { useState } from 'react'
import '../styles/Testimonials.css'

interface Testimonial {
  id: number
  name: string
  company: string
  text: string
  rating: number
}

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'Executive Apparel',
      text: 'We\'ve been working with ShirtCraft for 5 years and their consistency in quality and delivery is unmatched in the industry.',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'Urban Threads',
      text: 'Their attention to detail on our custom shirt designs has helped elevate our brand in a competitive market.',
      rating: 5
    },
    {
      id: 3,
      name: 'David Wilson',
      company: 'Corporate Style',
      text: 'Reliable, high-quality manufacturing with fair pricing. They\'ve become an extension of our team.',
      rating: 4
    }
  ]

  return (
    <section className="testimonials">
      <div className="container">
        <h2>What Our Clients Say</h2>
        
        <div className="testimonial-container">
          <div className="testimonial">
            <div className="rating">
              {'★'.repeat(testimonials[activeTestimonial].rating)}
              {'☆'.repeat(5 - testimonials[activeTestimonial].rating)}
            </div>
            <p className="testimonial-text">"{testimonials[activeTestimonial].text}"</p>
            <div className="client-info">
              <strong>{testimonials[activeTestimonial].name}</strong>
              <span>, {testimonials[activeTestimonial].company}</span>
            </div>
          </div>
          
          <div className="testimonial-nav">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={activeTestimonial === index ? 'active' : ''}
                onClick={() => setActiveTestimonial(index)}
              >
                ●
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials