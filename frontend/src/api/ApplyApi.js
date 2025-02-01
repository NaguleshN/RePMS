
export const ApplyApi = async(formData) =>{
    try {
        const jsonData = Object.fromEntries(formData.entries());
        console.log("Form:", jsonData);
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/forms/apply`, {
            method : "POST",
            body: formData,
        }
        );
        const data = await res.json();  
        console.log("Project added successfully:", data);
        alert("Project submitted successfully!");

        return data;
      } catch (error) {
        console.error("Error adding project:", error);
        alert("Error submitting project. Please try again.");
        throw error;
      }
}