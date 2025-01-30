import React from 'react'; 
import Project from '../models/Project.js';

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

    //   const file = req.file;

    //   if (!file) {
    //       return res.status(400).json({ success: false, message: "No file uploaded" });
    //   }

//       const newProject = new Project({
//           title: formData.title,
//           projectTheme: formData.projectTheme,
//           problemStatement: formData.problemStatement,
//           abstract: formData.abstract,
//           isInterDepartmental: formData.isInterDepartmental === "true",
//           domains: formData.domains, // Assuming comma-separated values
//           teamSize: parseInt(formData.teamSize, 10),
//           mentor: {
//               name: formData.mentorName,
//               designation: formData.mentorDesignation,
//               department: formData.mentorDepartment,
//               email: formData.mentorEmail,
//               contact: formData.mentorContact,
//           },
//           lead: {
//               name: formData.leadName,
//               rollNo: formData.rollNo,
//               institution: formData.institution,
//               department: formData.department,
//               email: formData.email,
//               contact: formData.contact,
//           },
//           hasTeam: formData.hasTeam === "true",
//           numMembers: parseInt(formData.numMembers, 10),
//           teamMembers: formData.teamMembers, // Assuming comma-separated values
//         //   filePath: `/uploads/${file.filename}`,
//       });

//       await newProject.save();

//       res.status(201).json({
//           success: true,
//           message: "Project details submitted successfully!",
//           data: newProject,
//       });

  } catch (error) {
      console.error("Error processing form:", error);
      res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};



export default ApplyForm