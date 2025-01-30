import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HomeScreen.css"; // Import the CSS file

const HomeScreen = () => {
  const [user, setUser] = useState('');
  const navigate = useNavigate(); // Correct placement

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/auth/get-user", {
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
  }, [navigate]); // Dependency array added

  const handleApply = () => {
    navigate("/apply");
  };

  return (
    <div>
      <button onClick={handleApply}>Apply</button>
    </div>
  );
};

export default HomeScreen;
