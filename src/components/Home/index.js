import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const image = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const headingClass = isDarkTheme ? 'home-heading' : 'home-heading-light'

      const background = isDarkTheme ? 'dark-background' : 'light-background'

      return (
        <div className={background}>
          <Navbar />
          <div className="home">
            <img src={image} alt="home" className="home-image" />
            <h1 className={headingClass}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
