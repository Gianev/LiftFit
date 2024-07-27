import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"

import Navbar from "./components/Navbar"
import ReactDOM from "react-dom/client";
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
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
