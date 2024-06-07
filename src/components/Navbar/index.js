// Write your code here
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'
const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onToggleTheme = () => {
        toggleTheme()
      }

      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const textClassName = isDarkTheme ? 'text-light' : 'text-dark'
      const logoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const bgClassName = isDarkTheme ? 'text-dark' : 'text-light'
      const itemClassName = isDarkTheme ? 'list-text-dark' : 'list-text-light'

      return (
        <div className={`navbar${bgClassName}`}>
          <img src={logoUrl} alt="website logo" className="logo" />
          <ul>
            <li className="desc">
              <Link to="/" className={`nav-link ${itemClassName}`}>
                Home
              </Link>
            </li>
            <li className="desc">
              <Link to="/about" className={`nav-link ${itemClassName}`}>
                About
              </Link>
            </li>
          </ul>
          <button
            className="button"
            type="button"
            data-testid="button"
            onClick={onToggleTheme}
          >
            <img src={imageUrl} alt="theme" className="theme" />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
