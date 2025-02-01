import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Logout from './pages/Logout.jsx';
import ViewProject from './pages/ViewProject.jsx'
import NotFound from './pages/NotFound.jsx';

function App() {

  return (
    
    <Router>
      {/* <div className="main-content"> */}
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/theme" element={<Themes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/view" element={<ViewProject />} />
        <Route element={<CheckAuthentication />}>
            <Route path="/allprojects" element={<ListProjects />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* </div> */}
    </Router>
  )
}

export default App
