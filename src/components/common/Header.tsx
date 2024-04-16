import React, {useState} from 'react'
import './Header.css'
import BackEndIcon from '../../assets/images/header-backend.svg'
import FrontEndIcon from '../../assets/images/header-frontend.svg'
import AIIcon from '../../assets/images/header-AI.svg'
import AboutMeIcon from '../../assets/images/header-aboutme.svg'
import MailIcon from '../../assets/images/header-email.svg'
import toggleIcon from '../../assets/images/header-menu.svg'
import {Link} from 'react-router-dom'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-left-content">
        <div className="header-title-main">CodeCraft</div>
        <div className="header-title-sub">by Joohyung</div>
      </div>
      {/* Toggle menu based on isMenuOpen state */}
      <div className={`header-right-content ${isMenuOpen ? 'show' : ''}`}>
        {/* Backend Icon and Description */}
        <div className="header-icon-describe-box">
          <img src={BackEndIcon} alt="BackEnd" className="icon-backend" />
          <div className="describe-backend">
            BackEnd
            <br />
            Demo
          </div>
        </div>
        {/* Frontend Icon and Description */}
        <Link to="/frontend_demo" className="header-icon-describe-box">
          <img src={FrontEndIcon} alt="FrontEnd" className="icon-frontend" />
          <div className="describe-frontend">
            FrontEnd
            <br />
            Demo
          </div>
        </Link>
        {/* AI Icon and Description */}
        <div className="header-icon-describe-box">
          <img src={AIIcon} alt="AI" className="icon-ai" />
          <div className="describe-AI">
            AI
            <br />
            Demo
          </div>
        </div>
        {/* About Me Icon and Description */}
        <div className="header-icon-describe-box">
          <img src={AboutMeIcon} alt="About Me" className="icon-aboutme" />
          <div className="describe-aboutme">
            About
            <br />
            Me
          </div>
        </div>
        {/* Email Icon and Description */}
        <div className="header-icon-describe-box">
          <img src={MailIcon} alt="Email" className="icon-email" />
          <div className="describe-email">
            Send
            <br />
            Mail
          </div>
        </div>
      </div>
      {/* Hamburger Menu Icon */}
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <img src={toggleIcon} alt="Menu" className="icon-toggle" />
      </div>
    </header>
  )
}

export default Header
