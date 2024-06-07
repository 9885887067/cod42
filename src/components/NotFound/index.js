// Write your code here

import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgClassName = isDarkTheme ? 'notfound-bg-dark' : 'notfound-bg-light'

      const textClassName = isDarkTheme
        ? 'notfound-text-light'
        : 'notfound-text-dark'

      const headingClassName = isDarkTheme
        ? 'notfound-hed-light'
        : 'notfound-hed-dark'

      return (
        <div>
          <Navbar />
          <div className={`notfound-container${bgClassName}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              className="notfound"
              alt="not found"
            />

            <h1 className={`${headingClassName}`}>Lost Your Way?</h1>
            <p className={`${textClassName}`}>
              We cannot seem to find the page ypu are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
