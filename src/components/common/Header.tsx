import React, {useState} from 'react'
import './Header.css'
import BackEndIcon from '../../assets/images/header-backend.svg'
import FrontEndIcon from '../../assets/images/header-frontend.svg'
import AIIcon from '../../assets/images/header-AI.svg'
import AboutMeIcon from '../../assets/images/header-aboutme.svg'
import MailIcon from '../../assets/images/header-email.svg'
import toggleIcon from '../../assets/images/header-menu.svg'

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
        <img src={BackEndIcon} alt="BackEnd" className="icon-backend" />
        <div className="BackEnd-Describe">
          BackEnd
          <br />
          Demo
        </div>
        {/* Frontend Icon and Description */}
        <img src={FrontEndIcon} alt="FrontEnd" className="icon-frontend" />
        <div className="FrontEnd-Describe">
          FrontEnd
          <br />
          Demo
        </div>
        {/* AI Icon and Description */}
        <img src={AIIcon} alt="AI" className="icon-ai" />
        <div className="AI-Describe">
          AI
          <br />
          Demo
        </div>
        {/* About Me Icon and Description */}
        <img src={AboutMeIcon} alt="About Me" className="icon-aboutme" />
        <div className="AboutMe-Describe">
          About
          <br />
          Me
        </div>
        {/* Email Icon and Description */}
        <img src={MailIcon} alt="Email" className="icon-email" />
        <div className="Email-Describe">
          Send
          <br />
          Mail
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
