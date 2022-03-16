import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return isDarkTheme ? (
        <div className="dark-background">
          <Navbar />
          <div className="not-found">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-image"
            />
            <h1 className="not-found-heading">Lost Your Way?</h1>
            <p className="not-found-para">
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      ) : (
        <div className="light-background">
          <Navbar />
          <div className="not-found">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-image"
            />
            <h1 className="not-found-heading-light">Lost Your Way?</h1>
            <p className="not-found-para-light">
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
