import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'

import './App.css';

import Home from './components/Home'
import About from './components/About'
import Packages from './components/Packages'
import MonkeyMeditation from './components/MonkeyMeditation'

function App() {

  const packages = ['Activate your Crystals',
   'Monkey Meditation', 
   'Soak in the Hotsprings', 
   'Hypnotherapy', 
   'Mineral Bath']

  return (
    <div className="App">
      <Router>
      <header>
        <h1 className="title">Welcome to Monty's Mineral SPA</h1>

        <div className="navBar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About Us</Link>
            </li>
            <li>
            <Link to="/packages">Our Packages</Link>
            </li>
            <li>
            <Link to="/MonkeyMeditation">Monkey Meditation</Link>
            </li>
          </ul>
        </div>

      </header>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/packages" element={<Packages packages={packages} />}/>
        <Route path="/MonkeyMeditation" element={<MonkeyMeditation />}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;





