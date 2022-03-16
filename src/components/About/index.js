import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const aboutHeadingClass = isDarkTheme
        ? 'home-heading'
        : 'home-heading-light'

      const aboutBackground = isDarkTheme
        ? 'dark-background'
        : 'light-background'

      return (
        <div className={aboutBackground}>
          <Navbar />
          <div className="about">
            <img src={aboutImage} alt="about" className="about-image" />
            <h1 className={aboutHeadingClass}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
