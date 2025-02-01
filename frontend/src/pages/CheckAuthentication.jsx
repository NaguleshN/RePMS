import { useState, useEffect, useRef } from "react";
import { Navigate, Outlet } from "react-router-dom";

const CheckAuthentication = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(null); 
    const hasChecked = useRef(false); 

    useEffect(() => {
        if (hasChecked.current) return; 
        hasChecked.current = true;

        const checkAuth = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/auth/verify`, {
                    credentials: "include",
                });
                const data = await res.json();
                setIsLoggedIn(data.success);
            } catch (error) {
                console.error("Authentication check failed:", error);
                setIsLoggedIn(false);
            }
        };

        checkAuth();
    }, []);

    if (isLoggedIn === null) return <div>Loading...</div>;

    return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

export default CheckAuthentication;
