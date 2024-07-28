import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react'

const Navbar = () => {
  
    const [theme, setTheme] = useContext(ThemeContext);

  return (
    <header>
      <div className= "container">
        <Link to="/">
          <h1>Lift Fit</h1>
        </Link>
        <input type="checkbox" className="theme-checkbox " onChange={() =>setTheme(theme === 'light' ? 'dark':'light')}></input> 
      </div>
    </header>
  )
}

export default Navbar