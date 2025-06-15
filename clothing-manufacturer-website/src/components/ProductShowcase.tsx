import { useState } from 'react'
import '../styles/ProductShowcase.css'

interface Shirt {
  id: number
  name: string
  description: string
  materials: string[]
  image: string
}

const ProductShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  
  const shirts: Shirt[] = [
    {
      id: 1,
      name: 'Classic Oxford',
      description: 'Timeless formal shirt perfect for business attire',
      materials: ['100% Cotton', 'Premium Buttons', 'Reinforced Stitching'],
      image: '/shirt1.jpg'
    },
    {
      id: 2,
      name: 'Linen Blend',
      description: 'Breathable shirt ideal for warm climates',
      materials: ['55% Linen', '45% Cotton', 'Mother-of-pearl Buttons'],
      image: '/shirt2.jpg'
    },
    {
      id: 3,
      name: 'Performance Polo',
      description: 'Moisture-wicking polo for active professionals',
      materials: ['Polyester Blend', 'UV Protection', 'Stretch Fabric'],
      image: '/shirt3.jpg'
    }
  ]

  return (
    <section className="product-showcase">
      <div className="container">
        <h2>Our Products</h2>
        <div className="category-filter">
          <button 
            className={activeCategory === 'all' ? 'active' : ''}
            onClick={() => setActiveCategory('all')}
          >
            All
          </button>
          <button 
            className={activeCategory === 'formal' ? 'active' : ''}
            onClick={() => setActiveCategory('formal')}
          >
            Formal
          </button>
          <button 
            className={activeCategory === 'casual' ? 'active' : ''}
            onClick={() => setActiveCategory('casual')}
          >
            Casual
          </button>
          <button 
            className={activeCategory === 'performance' ? 'active' : ''}
            onClick={() => setActiveCategory('performance')}
          >
            Performance
          </button>
        </div>
        
        <div className="shirt-grid">
          {shirts.map(shirt => (
            <div key={shirt.id} className="shirt-card">
              <div className="shirt-image">
                <img src={shirt.image} alt={shirt.name} />
              </div>
              <div className="shirt-details">
                <h3>{shirt.name}</h3>
                <p>{shirt.description}</p>
                <ul className="materials-list">
                  {shirt.materials.map((material, index) => (
                    <li key={index}>{material}</li>
                  ))}
                </ul>
                <button className="inquire-button">Inquire About This Product</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase