import React ,{useState,useRef,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css'
import imag from "../assets/re-img.png";
import VerifyAuthApi from '../api/VerifyAuthApi';

function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const hasChecked = useRef(false); 
    
    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
              const result = await VerifyAuthApi();
              setIsLoggedIn(result);
            } catch (error) {
              console.error("Authentication check failed:", error);
              setIsLoggedIn(false);
            }
          };
      
          checkAuthStatus(); 
    
        }, []);
        
    return (
        <header id="header" className="header d-flex align-items-center fixed-top">
            <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
                <a href="/" className="logo d-flex align-items-center">
                    <img src={imag} alt="Logo" className="logo-image" />
                </a>

                <nav id="navmenu" className="navmenu">
                <ul>
                        <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About Us</NavLink></li>
                        <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact Us</NavLink></li>
                        <li><NavLink to="/apply" className={({ isActive }) => (isActive ? 'active' : '')}>Apply Now</NavLink></li>
                        {isLoggedIn ? (
                            <li><NavLink to="/logout" className={({ isActive }) => (isActive ? 'active' : '')}>Logout</NavLink></li>
                            
                            ) : (
                            <li><NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : '')}>Login</NavLink></li>
                        )}
                        <li><NavLink to="/allprojects" className={({ isActive }) => (isActive ? 'active' : '')}>View projects</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;