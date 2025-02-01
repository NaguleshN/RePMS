import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen.jsx';
import Apply from './pages/Apply.jsx';
import Login from './pages/Login.jsx';
import ListProjects from './pages/ListProjects.jsx';
import CheckAuthentication from './pages/CheckAuthentication.jsx';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/allprojects" element={<ListProjects />} /> */}
        <Route element={<CheckAuthentication />}>
            <Route path="/allprojects" element={<ListProjects />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
