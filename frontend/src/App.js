import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from './pages/Home'

import { ThemeContext } from './context/ThemeContext'
import { useContext } from 'react'

function App() {
  const [theme] = useContext(ThemeContext);
  return (
    <div className={`App ${theme}`}>
      <Router>
        <Navbar/>
        <div className="pages">
          <Routes>
            <Route
            path="/"
            element={<Home/>}
            >
            </Route>
          </Routes>
        </div>
       
      </Router>
    </div>
  
  );
}

export default App;
