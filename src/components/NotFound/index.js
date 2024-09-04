// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const paraClass = isDarkTheme ? 'dark' : 'light'
      return (
        <div>
          <Navbar />
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
            />
            <h1 className={paraClass}>Lost Your Way?</h1>
            <p className={paraClass}>
              You cannot seem to be finding the page you are looking for
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
    