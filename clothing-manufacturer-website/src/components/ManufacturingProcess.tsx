import '../styles/ManufacturingProcess.css'

const ManufacturingProcess = () => {
  const processSteps = [
    {
      title: 'Material Sourcing',
      description: 'We partner with ethical suppliers to source the highest quality fabrics and materials.',
      icon: '🛒'
    },
    {
      title: 'Precision Cutting',
      description: 'State-of-the-art cutting machines ensure perfect pattern matching and minimal waste.',
      icon: '✂️'
    },
    {
      title: 'Expert Stitching',
      description: 'Skilled artisans with decades of experience construct each shirt with care.',
      icon: '🧵'
    },
    {
      title: 'Quality Control',
      description: 'Every shirt undergoes rigorous inspection before leaving our facility.',
      icon: '🔍'
    },
    {
      title: 'Sustainable Packaging',
      description: 'Eco-friendly packaging that protects your products while minimizing environmental impact.',
      icon: '📦'
    }
  ]

  return (
    <section className="manufacturing-process">
      <div className="container">
        <h2>Our Manufacturing Process</h2>
        <p className="subtitle">Quality craftsmanship at every step</p>
        
        <div className="process-steps">
          {processSteps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ManufacturingProcess