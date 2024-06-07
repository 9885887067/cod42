// Write your code here
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeBgClassName = isDarkTheme ? 'home-bg-dark' : 'home-bg-light'
      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const textClassName = isDarkTheme ? 'text-light' : 'text-dark'

      return (
        <div className={`home${homeBgClassName}`}>
          <Navbar />
          <div className="home-container">
            <img src={imageUrl} alt="home" className="home-image" />
            <p className={`home${textClassName}`}>Home</p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
