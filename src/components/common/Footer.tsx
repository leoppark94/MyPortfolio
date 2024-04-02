import React from 'react'
import './Footer.css'
import githubIcon from '../../assets/images/footer-github.svg'
import linkedinIcon from '../../assets/images/footer-linkedin.svg'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>Contact</p>
        <a href="https://github.com/leoppark94" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/leo-park-139490262/"
          target="_blank"
          rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
