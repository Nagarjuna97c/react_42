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

      const logo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const navBackground = isDarkTheme
        ? 'nav-bar nav-bar-dark'
        : 'nav-bar nav-bar-light'

      const navLink = isDarkTheme ? 'link' : 'link-light'

      const theme = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      return (
        <div className={navBackground}>
          <img src={logo} alt="website logo" className="logo" />
          <ul className="nav-links ">
            <li>
              <Link to="/" className={navLink}>
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link to="/about" className={navLink}>
                <p>About</p>
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="button"
            testid="theme"
            onClick={onToggleTheme}
          >
            <img src={theme} alt="theme" className="theme-image" />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
