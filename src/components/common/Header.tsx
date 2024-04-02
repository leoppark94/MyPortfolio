import React from 'react'
import './Header.css'
import BackEndIcon from '../../assets/images/header-backend.svg'
import FrontEndIcon from '../../assets/images/header-frontend.svg'
import AIIcon from '../../assets/images/header-AI.svg'
import AboutMeIcon from '../../assets/images/header-aboutme.svg'
import MailIcon from '../../assets/images/header-email.svg'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-title-main">CodeCraft</div>
      <div className="header-title-sub">by Joohyung</div>
      <img src={BackEndIcon} alt="BackEnd" className="icon-backend" />
      <div className="BackEnd-Describe">
        BackEnd
        <br />
        Demo
      </div>
      <img src={FrontEndIcon} alt="FrontEnd" className="icon-frontend" />
      <div className="FrontEnd-Describe">
        FrontEnd
        <br />
        Demo
      </div>
      <img src={AIIcon} alt="AI" className="icon-ai" />
      <div className="AI-Describe">
        AI
        <br />
        Demo
      </div>
      <img src={AboutMeIcon} alt="About Me" className="icon-aboutme" />
      <div className="AboutMe-Describe">
        About
        <br />
        Me
      </div>
      <img src={MailIcon} alt="Email" className="icon-email" />
      <div className="Email-Describe">
        Send
        <br />
        Mail
      </div>
    </header>
  )
}

export default Header
