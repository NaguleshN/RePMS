import express from 'express';
import ApplyForm from '../controllers/ApplyForm.js';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import Project from '../models/Project.js';


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
applyRoute.post("/apply",upload.single('file'), async (req, res) => {
    
    const formData = req.body;
    console.log(req.body)

    console.log(formData.file)

    
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }
    
    const hasTeams = req.body.hasTeam === "Yes";
    formData.isInterDepartmental = formData.isInterDepartmental === 'true'; // Convert string to Boolean
    formData.hasTeam = formData.hasTeam.replace(/"/g, '').toLowerCase() === 'yes'; // Convert to Boolean
    formData.teamSize = parseInt(formData.teamSize);
    formData.numMembers = parseInt(formData.numMembers);
    formData.domains = JSON.parse(formData.domains); // Convert JSON string to array
    formData.teamMembers = JSON.parse(formData.teamMembers); // Convert JSON string to array

        // Create and save the project
    const newProject = new Project(formData);
    // const newProject = new Project({
    //     title: formData.title,
    //     projectTheme: formData.projectTheme,
    //     problemStatement: formData.problemStatement,
    //     abstract: formData.abstract,
    //     isInterDepartmental: JSON.parse(formData.isInterDepartmental),
    //     domains: JSON.parse(formData.domains),
    //     teamSize: parseInt(formData.teamSize, 10),
    //     mentor: {
    //         name: formData["mentor[name]"],
    //         designation: formData["mentor[designation]"],
    //         department: formData["mentor[department]"],
    //         email: formData["mentor[email]"],
    //         contact: formData["mentor[contact]"],
    //     },
    //     lead: {
    //         name: formData["lead[name]"],
    //         rollNo: formData["lead[rollNo]"],
    //         institution: formData["lead[institution]"],
    //         department: formData["lead[department]"],
    //         email: formData["lead[email]"],
    //         contact: formData["lead[contact]"],
    //     },
    //     hasTeam: JSON.parse(hasTeams),
    //     numMembers: parseInt(formData.numMembers, 10),
    //     teamMembers: JSON.parse(formData.teamMembers).map(member => ({
    //         name: member.name || "",
    //         rollNo: member.rollNo || "",
    //         email: member.email || "",
    //         contact: member.contact || "",
    //     })),
    //     filePath: req.file ? req.file.path : "", // Ensure file path exists
    //     });
        
        
        try{
    // Save the project in MongoDB
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

}
);

export default applyRoute 