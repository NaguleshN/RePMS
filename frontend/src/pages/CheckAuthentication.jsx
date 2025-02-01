import { useState, useEffect, useRef } from "react";
import { Navigate, Outlet } from "react-router-dom";

const CheckAuthentication = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(null); // Use null to track loading state
    const hasChecked = useRef(false); // Prevent duplicate API calls

    useEffect(() => {
        if (hasChecked.current) return; // Prevent re-running
        hasChecked.current = true;

        const checkAuth = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/auth/verify", {
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

    if (isLoggedIn === null) return <div>Loading...</div>; // Show loading state

    return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

export default CheckAuthentication;
