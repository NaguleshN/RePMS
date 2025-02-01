import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen.jsx';
import Apply from './pages/Apply.jsx';
import Login from './pages/Login.jsx';
import ListProjects from './pages/ListProjects.jsx';

import CheckAuthentication from './pages/CheckAuthentication.jsx';

import Home from './components/Home.jsx';
import Themes from './components/Themes.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import Navbar from './components/Navbar.jsx';
import './styles/App.css';

function App() {

  return (
    
    <Router>
      <Navbar />
      <div className="main-content">

      <Routes>
        {/* <Route path="/" element={<HomeScreen />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/theme" element={<Themes />} />
        {/* <Route path="/add-project" element={<AddProject />} /> */}
        
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/login" element={<Login />} />
        <Route element={<CheckAuthentication />}>
            <Route path="/allprojects" element={<ListProjects />} />
        </Route>
      </Routes>
      </div>
    </Router>
  )
}

export default App
