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
    <> <Navbar />
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    {isLoggedOut ? (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-sm w-full text-center">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Logged out successfully...
      </h1>
      <a href="/login">Login</a>
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
