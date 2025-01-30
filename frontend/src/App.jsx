import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen.jsx';
import Apply from './pages/Apply.jsx';
import Login from './pages/Login.jsx';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
