
const ApplyForm = async (req, res) => {
    try {
    const formData = req.body;
    console.log(req.body)
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
      }
    console.log("Received form data:", formData);
    console.log("Hello from form");
    res.send({message:"data rec"})

  } catch (error) {
      console.error("Error processing form:", error);
      res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};



export default ApplyForm