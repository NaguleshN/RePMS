// import 
const serverUrl = "http://localhost:5000"

export const ApplyApi = async(formData) =>{
    try {
        const jsonData = Object.fromEntries(formData.entries());
        console.log("Form:", jsonData);
        const res = await fetch("http://localhost:5000/api/forms/apply", {
            method : "POST",
            // headers: {
            //     "Content-Type": "multipart/form-data",
            // },
            body: formData,
        }
        );
        const data = await res.json();  
        console.log("Project added successfully:", data);
        return data;
      } catch (error) {
        console.error("Error adding project:", error);
        throw error;
      }
}