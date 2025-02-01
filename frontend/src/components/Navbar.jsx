import React ,{useState,useRef,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css'
import imag from "../assets/re-img.png";
import VerifyAuthApi from '../api/VerifyAuthApi';

function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const hasChecked = useRef(false); 
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
    
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
        <nav className="fixed top-0 left-0 w-full z-50 bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen ? "true" : "false"}
              onClick={toggleMobileMenu} 
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className={`block size-6 ${mobileMenuOpen ? 'hidden' : 'block'}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className={`hidden size-6 ${mobileMenuOpen ? 'block' : 'hidden'}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPO54YUiQ5sJYdK7mtCNAVxfpaqX4e-AQdhWdnXrFnSRCHixI1D8bK2poUTrAlgC8CaHU&usqp=CAU"
                alt="Your Company"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
              <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `rounded-md px-3 py-2 text-sm font-medium ${
                        isActive ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                        }`
                    }
                    >
                    Home
                </NavLink>


                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        `rounded-md px-3 py-2 text-sm font-medium ${
                        isActive ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                        }`
                    }
                    >
                    Contact
                </NavLink>
                
                    <NavLink
                    to="/apply"
                    className={({ isActive }) =>
                        `rounded-md px-3 py-2 text-sm font-medium ${
                        isActive ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                        }`
                    }
                    >
                    Project Intake
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        `rounded-md px-3 py-2 text-sm font-medium ${
                        isActive ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                        }`
                    }
                >
                    About
               </NavLink>

                {isLoggedIn ? (
               <NavLink
                    to="/allprojects"
                    className={({ isActive }) =>
                        `rounded-md px-3 py-2 text-sm font-medium ${
                        isActive ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                        }`
                    }
                >
                    View Projects
               </NavLink>
               ):(
                <div />
                )}
               
               
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="">
              <div className="flex space-x-4">
              {isLoggedIn ? (
                <a
                  href="/logout"
                  className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                  aria-current="page"
                >
                  Logout
                </a>):(
                    <a
                    href="/login"
                    className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                    aria-current="page"
                  >
                    Login
                  </a>
                )}
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
          <a
            href="#"
            className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
            aria-current="page"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Team
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Projects
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Calendar
          </a>
        </div>
      </div>
    </nav>
            );
        }
        {/* <header id="header" className="header d-flex align-items-center fixed-top">
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
        </header> */}

export default Navbar;