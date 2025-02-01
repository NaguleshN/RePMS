import React, { useEffect, useState } from 'react';
import GetProjectsApi from '../api/GetProjectsApi';
import { useNavigate } from 'react-router-dom';

const ListProjects = () => {
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();

    const getProj = async () => {
        try {
            const res = await GetProjectsApi();
            console.log(res)
            if (!res) {
                navigate("/"); // Redirect if token is invalid
              }
              else{
                  setProjects(res); // Assuming `res` is an array
              }
        } catch (error) {
            console.error("Error fetching projects:", error);
        }
    };

    useEffect(() => {
        getProj();
    }, []); 

    return (
       
        <div className="flex flex-wrap justify-center gap-6 p-6">
        {projects && projects.length > 0 ? (
          projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{project.abstract}</p>
  
              <div className="mb-3">
                <span className="text-gray-800 font-semibold">
                  Project Theme:
                </span>
                <span className="text-gray-600"> {project.projectTheme}</span>
              </div>
  
              <div className="mb-3">
                <span className="text-gray-800 font-semibold">
                  Problem Statement:
                </span>
                <span className="text-gray-600"> {project.problemStatement}</span>
              </div>
  
              <div className="mb-3">
                <span className="text-gray-800 font-semibold">Domains:</span>
                <span className="text-gray-600">
                  {" "}
                  {project.domains ? project.domains.join(", ") : "N/A"}
                </span>
              </div>
  
              <div className="mb-3">
                <span className="text-gray-800 font-semibold">Institution:</span>
                <span className="text-gray-600"> {project.lead.institution}</span>
              </div>
  
              <div className="border-t mt-4 pt-3">
                <h3 className="text-lg font-semibold text-gray-800">Lead</h3>
                <p className="text-gray-600 text-sm">
                  {project.lead.name} ({project.lead.rollNo})
                </p>
                <p className="text-gray-600 text-sm">
                  Dept: {project.lead.department}
                </p>
                <p className="text-gray-600 text-sm">
                  Email: {project.lead.email}
                </p>
                <p className="text-gray-600 text-sm">
                  Contact: {project.lead.contact}
                </p>
              </div>
  
              <div className="border-t mt-4 pt-3">
                <h3 className="text-lg font-semibold text-gray-800">Mentor</h3>
                <p className="text-gray-600 text-sm">{project.mentor.name}</p>
                <p className="text-gray-600 text-sm">
                  Dept: {project.mentor.department}
                </p>
                <p className="text-gray-600 text-sm">
                  Designation: {project.mentor.designation}
                </p>
                <p className="text-gray-600 text-sm">
                  Email: {project.mentor.email}
                </p>
                <p className="text-gray-600 text-sm">
                  Contact: {project.mentor.contact}
                </p>
              </div>
  
              <div className="border-t mt-4 pt-3">
                <h3 className="text-lg font-semibold text-gray-800">
                  Team Members ({project.teamSize})
                </h3>
                <ul className="text-gray-600 text-sm">
                  {project.teamMembers?.map((member, index) => (
                    <li key={index}>
                      {member.name} ({member.rollNo}) - {member.email}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        ) : (
          <p>Loading projects...</p>
        )}
      </div>


    );
};

export default ListProjects;
