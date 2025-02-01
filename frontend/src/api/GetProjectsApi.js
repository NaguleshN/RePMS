const GetProjectsApi = async() => {

    try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/forms/all-projects`, {
            method : "GET",
            credentials: "include", 
        }
        );
        const data = await res.json();  
        return data.projects;
      } catch (error) {
        console.error("Error adding project:", error);
        throw error;
      }
}

export default GetProjectsApi