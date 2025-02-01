import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'

const Logout = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  useEffect(() => {
    const handleLogout = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/auth/logout`, {
          method: 'POST',
          credentials: 'include',
        });

        const data = await res.json();
        console.log(data.success)
        if (data.success) {
          setIsLoggedOut(true); // Successfully logged out
        } else {
          setIsLoggedOut(false); // Failed to log out
        }
      } catch (error) {
        console.error("Logout failed:", error);
        setIsLoggedOut(false); // Failed to log out
      }
    };

    handleLogout();
  }, []);

  return (
    <> 
    {/* <Navbar /> */}
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    {isLoggedOut ? (

<div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        {/* Logo */}
        <div className="flex justify-center">
          <img 
            className="h-12 w-auto" 
            src="https://blogs.microsoft.com/wp-content/uploads/prod/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen-1024x376.jpg" 
            alt="Your Company" 
          />
        </div>
  
        {/* Heading */}
        <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-gray-900">
        Logged out successfully...
        </h2>
  
        {/* Form */}
        <div className="mt-6 flex justify-center text-center">
          
          <a 
            type="button" 
            href="/" 
            className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>


    ):(
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-sm w-full text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Logout failed...
      </h1>
      <a href="/login">Try Again</a>
      </div>
    )}
  </div>
  
</>



  );
};

export default Logout;
