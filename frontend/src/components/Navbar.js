import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
    const {logout} = useLogout()
    const [theme, setTheme] = useContext(ThemeContext);
    const {user}= useAuthContext()
    const handleClick = () => {
      logout()
    }

  return (
    <header>
      <div className= "container">
        <Link to="/">
          <h1>Lift Fit</h1>
        </Link>
        <nav>
          {user&& (<div>
            <span>{user.email}</span>
            <button onClick={handleClick}>Log out</button>
          </div>
          )}
          
          {!user && (
          <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
          </div>
          )}
        </nav>

        <input type="checkbox" className="theme-checkbox " onChange={() =>setTheme(theme === 'light' ? 'dark':'light')}></input> 
        
      </div>
    </header>
  )
}

export default Navbar