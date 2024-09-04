// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onClicked = () => {
        toggleTheme()
      }
      const homeClass = isDarkTheme ? 'dark-p' : 'light-p'
      const imgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const imgUrl2 = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
      return (
        <div className="navbar-bg">
          <img src={imgUrl} alt="website logo" />
          <ul>
            <li className={homeClass}>
              <Link to="/">
                <p>Home</p>
              </Link>
            </li>
            <li className={homeClass}>
              <Link to="/about">
                <p>About</p>
              </Link>
            </li>
          </ul>
          <button type="button" onClick={onClicked}>
            <img src={imgUrl2} alt="theme" />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
