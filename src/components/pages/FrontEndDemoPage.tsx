import React from 'react'
import ReactImage from '../../assets/images/React-icon.svg'
import FigmaImage from '../../assets/images/Figma-icon.svg'
import githubImage from '../../assets/images/footer-github.svg'
import './FrontEndDemoPage.css'

const FrontEndDemoPage: React.FC = () => {
  return (
    <div className="frontend_demo_body">
      <div className="frontend_demo_title">Welcome to the Front End Demo!</div>

      <div className="forntend_demo_text">
        This website is a front-end demo version that I have designed and developed
        myself, ensuring adherence to the latest web standards for a seamless user
        experience.
      </div>

      <div className="frontend_demo_title">Technology Stack</div>

      <div className="ReactDIV">
        <div>
          <img src={ReactImage} alt="ReactLogo" className="ReactLogo" />
        </div>
        <div className="react_text_box">
          <div className="forntend_demo_small_title">React with TypeScript</div>
          <div className="forntend_demo_text">
            I employed React, a powerful JavaScript library, alongside TypeScript to build
            dynamic user interfaces. TypeScript adds static type definitions, which
            improves code quality and robustness, making the development process more
            efficient and error-resistant.
          </div>
        </div>
      </div>

      <div className="FigmaDIV">
        <div className="figma_text_box">
          <div className="forntend_demo_small_title">Figma</div>
          <div className="forntend_demo_text">
            For the design process, I utilized Figma, a modern tool that supports
            efficient collaboration and prototyping.
          </div>
        </div>
        <div>
          <img src={FigmaImage} alt="FigmaLogo" className="FigmaLogo" />
        </div>
      </div>

      <div className="GithubDIV">
        <div>
          <img src={githubImage} alt="GithubLogo" className="githubImage"></img>
        </div>
        <div className="github_text_box">
          <div className="forntend_demo_small_title">Code Sharing</div>
          <div className="forntend_demo_text">
            The complete codebase for this website is available in my GitHub repository
            named [REPO_Name]. Feel free to explore and reference my code.
          </div>
        </div>
      </div>

      <div className="forntend_demo_text">
        As someone proficient in various programming languages, including JavaScript and
        TypeScript, you can observe my technical skills through this demo. I encourage you
        to explore the website and experience the user interface that I have crafted.
      </div>
    </div>
  )
}

export default FrontEndDemoPage
