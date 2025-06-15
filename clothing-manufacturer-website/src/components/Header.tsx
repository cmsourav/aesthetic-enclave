import { useState } from 'react'
import '../styles/Header.css'

interface HeaderProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

const Header = ({ activeTab, setActiveTab }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="logo">ShirtCraft</div>
        
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
        
        <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <button 
                className={activeTab === 'home' ? 'active' : ''}
                onClick={() => setActiveTab('home')}
              >
                Home
              </button>
            </li>
            <li>
              <button 
                className={activeTab === 'products' ? 'active' : ''}
                onClick={() => setActiveTab('products')}
              >
                Products
              </button>
            </li>
            <li>
              <button 
                className={activeTab === 'process' ? 'active' : ''}
                onClick={() => setActiveTab('process')}
              >
                Our Process
              </button>
            </li>
            <li>
              <button 
                className={activeTab === 'about' ? 'active' : ''}
                onClick={() => setActiveTab('about')}
              >
                About Us
              </button>
            </li>
            <li>
              <button 
                className={activeTab === 'contact' ? 'active' : ''}
                onClick={() => setActiveTab('contact')}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header