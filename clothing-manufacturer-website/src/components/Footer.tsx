import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ShirtCraft</h3>
            <p>Premium shirt manufacturing since 2005. Quality fabrics, expert craftsmanship, and reliable delivery.</p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#process">Our Process</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Us</h3>
            <ul>
              <li>123 Manufacturing St</li>
              <li>Textile City, TC 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@shirtcraft.com</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ShirtCraft Manufacturing. All rights reserved.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="LinkedIn">LI</a>
            <a href="#" aria-label="Twitter">TW</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer