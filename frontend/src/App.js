import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"
import { useAuthContext } from "./hooks/useAuthContext"
import Navbar from "./components/Navbar"
import Home from './pages/Home'
import Signup from "./pages/Signup"
import Login from "./pages/Login"

import { ThemeContext } from './context/ThemeContext'
import { useContext } from 'react'

function App() {
  const {user} = useAuthContext()
  const [theme] = useContext(ThemeContext);
  return (
    <div className={`App ${theme}`}>
      <Router>
        <Navbar/>
        <div className="pages">
          <Routes>
          <Route 
              path="/"
              element={user ? <Home /> : <Navigate to="/login"></Navigate>}
            />
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/"></Navigate>} 
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/"></Navigate>} 
            />
            
          </Routes>
        </div>
       
      </Router>
    </div>
  
  );
}

export default App;
