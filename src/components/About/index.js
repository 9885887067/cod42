// Write your code here

import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutBgClassName = isDarkTheme ? 'about-bg-dark' : 'about-bg-light'
      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const textClassName = isDarkTheme ? 'text-light' : 'text-dark'

      return (
        <div className={`about-bg-container ${aboutBgClassName}`}>
          <Navbar />
          <div className="about-container">
            <img src={imageUrl} alt="about" className="about-image" />
            <h1 className={`about${textClassName}`}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
