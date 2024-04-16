import React from 'react'
import ReactImage from '../../assets/images/React-icon.svg'
import FigmaImage from '../../assets/images/Figma-icon.svg'
import githubImage from '../../assets/images/footer-github.svg'

const FrontEndDemoPage: React.FC = () => {
  return (
    <div>
      <div>Welcome to the Front End Demo!</div>
      <div>
        This website is a front-end demo version that I have designed and developed
        myself, ensuring adherence to the latest web standards for a seamless user
        experience.
      </div>
      <div>Technology Stack</div>
      <div>
        <img src={ReactImage} alt="ReactLogo" />
      </div>
      <div>React with TypeScript</div>
      <div>
        I employed React, a powerful JavaScript library, alongside TypeScript to build
        dynamic user interfaces. TypeScript adds static type definitions, which improves
        code quality and robustness, making the development process more efficient and
        error-resistant.
      </div>
      <div>
        <img src={FigmaImage} alt="FigmaLogo" />
      </div>
      <div>Figma</div>
      <div>
        For the design process, I utilized Figma, a modern tool that supports efficient
        collaboration and prototyping.
      </div>
      <div>
        <img src={githubImage} alt="GithubLogo"></img>
      </div>
      <div>Code Sharing</div>
      <div>
        The complete codebase for this website is available in my GitHub repository named
        [REPO_Name]. Feel free to explore and reference my code.
      </div>
      <div>
        As someone proficient in various programming languages, including JavaScript and
        TypeScript, you can observe my technical skills through this demo. I encourage you
        to explore the website and experience the user interface that I have crafted.
      </div>
    </div>
  )
}

export default FrontEndDemoPage
