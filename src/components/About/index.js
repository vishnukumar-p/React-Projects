// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgClass = isDarkTheme ? 'bg-dark' : 'bg-light'
      const imgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      return (
        <div className={bgClass}>
          <Navbar />
          <div>
            <img src={imgUrl} alt="about" />
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
