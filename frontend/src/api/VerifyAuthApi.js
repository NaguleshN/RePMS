
const VerifyAuthApi = async() => {
    try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/auth/verify`, {
            method : "GET",
            credentials: "include", 
        }
        );
        const data = await res.json();  
        return data.success;
      } catch (error) {
        console.error("failed to verify ", error);
        return false;
      }
}

export default VerifyAuthApi;