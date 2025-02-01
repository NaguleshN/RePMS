import express from 'express';
import ApplyForm from '../controllers/ApplyForm.js';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import Project from '../models/Project.js';
import userVerification from '../middleware/AuthProtect.js';


const applyRoute = express.Router();

// Get the current directory name (for ES modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir); // Ensure 'uploads/' exists
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
    },
});

const upload = multer({ storage });

// applyRoute.use(userVerification);


applyRoute.post("/apply",upload.single('file'), async (req, res) => {
    
    const formData = req.body;
    console.log(req.body)
    
    if (!req.file) {
        return res.status(400).json({success: false, message: 'No file uploaded' });
    }
    
    const hasTeams = req.body.hasTeam === "Yes";
    formData.isInterDepartmental = formData.isInterDepartmental === 'true'; 
    formData.hasTeam = formData.hasTeam.replace(/"/g, '').toLowerCase() === 'yes';
    formData.teamSize = parseInt(formData.teamSize);
    formData.numMembers = parseInt(formData.numMembers);
    try {
        formData.domains = formData.domains.trim() ? JSON.parse(formData.domains) : [];
    } catch (error) {
        console.error("Invalid JSON format for domains:", error);
        formData.domains = [];
    }
    formData.teamMembers = JSON.parse(formData.teamMembers); 
    const newProject = new Project(formData);
    
    try{
        await newProject.save();
        console.log("Received form data:", formData);
        console.log("Hello from form");

        res.status(201).json({
            success: true,
            message: "Project details submitted successfully!",
            data: newProject,
        });

    } catch(error) {
        console.error("Error processing form:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }

});

applyRoute.get("/all-projects",userVerification, async(req,res)=>{
    try {
        console.log( req.user )
        const projects = await Project.find(); // Fetch all projects from the database
        res.status(200).json({ success: true, projects });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error });
    }
})

export default applyRoute 