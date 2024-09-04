// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgClass = isDarkTheme ? 'bg-dark' : 'bg-light'
      const imgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      return (
        <div className={bgClass}>
          <Navbar />
          <div>
            <img src={imgUrl} alt="home" />
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
