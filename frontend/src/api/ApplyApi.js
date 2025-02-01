import { useNavigate } from "react-router-dom";
const serverUrl = "http://localhost:5000"

export const ApplyApi = async(formData) =>{
  // const navigate = useNavigate();
    try {
        const jsonData = Object.fromEntries(formData.entries());
        console.log("Form:", jsonData);
        const res = await fetch("http://localhost:5000/api/forms/apply", {
            method : "POST",
            body: formData,
        }
        );
        const data = await res.json();  
        console.log("Project added successfully:", data);
        alert("Project submitted successfully!");

        // navigate("/");
        return data;
      } catch (error) {
        console.error("Error adding project:", error);
        alert("Error submitting project. Please try again.");
        throw error;
      }
}