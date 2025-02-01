import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import "./HomeScreen.css"; 

const HomeScreen = () => {
  const [user, setUser] = useState('');
  const navigate = useNavigate(); 

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/auth/get-user`, {
          method: "GET",
          credentials: "include",
        });

        const data = await response.json();

        if (!response.ok) {
          alert(data.message);
          navigate("/login");
          return;
        }

        if (data.success) {
          setUser(data.user);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    getData();
  }, [navigate]); 

  const handleApply = () => {
    navigate("/apply");
  };

  const handleProj = () => {
    navigate("/allprojects");
  };

  return (
   <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-sm w-full text-center">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Create a application</h1>
      <button 
        className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={handleApply}
        type="button">
        Apply for the project
      </button>
      <button 
        className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={handleProj}
        type="button">
        View Projects
      </button>
    </div>
  </div>
        </>
  );
};

export default HomeScreen;
