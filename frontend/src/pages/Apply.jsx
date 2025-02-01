import { useState,useEffect } from 'react';
import { ApplyApi } from '../api/ApplyApi';
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar'

const Apply = () => {
  
  const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [titleError, setTitleError] = useState("");
    const [projectTheme, setProjectTheme] = useState("");
    const [problemStatement, setProblemStatement] = useState("");
    const [abstract, setAbstract] = useState("");
    const [file, setFile] = useState(null);
    const [isInterDepartmental, setIsInterDepartmental] = useState(false);
    const [domains, setDomains] = useState([]); 
    const [teamSize, setTeamSize] = useState(1);
    const [mentor, setMentor] = useState({
        name: "",
        designation: "",
        department: "",
        email: "",
        contact: "",
    });
    const [lead, setLead] = useState({
        name: "",
        rollNo: "",
        institution: "",
        department: "",
        email: "",
        contact: "",
    });
    
    const [hasTeam, setHasTeam] = useState("");
    const [numMembers, setNumMembers] = useState(1);
    const [teamMembers, setTeamMembers] = useState([]);

    const handleNumMembersChange = (event) => {
        const num = event.target.value;
        setNumMembers(num);
    
        const updatedMembers = Array.from({ length: num }, (_, index) => ({
          name: teamMembers[index]?.name || '',
          rollNo: teamMembers[index]?.rollNo || '',
          email: teamMembers[index]?.email || '',
          contact: teamMembers[index]?.contact || '',
        }));
        setTeamMembers(updatedMembers);
      };
 
     
    
    const handleThemeChange = (event) => {
        setProjectTheme(event.target.value);
    };

    const handleInterDepartmentalChange = (event) => {
        setIsInterDepartmental(event.target.value === 'Yes');
    };

    const handleDomainChange = (event) => {
        const selectedDomains = Array.from(event.target.selectedOptions, option => option.value);
        setDomains(selectedDomains);
      };

    const handleTeamSizeChange = (event) => {
        const value = event.target.value;
        if (value <= 6) {
          setTeamSize(value);
        } else {
          alert("Please enter a number less than or equal to 6.");
        }
    };
    
      const handleHasTeamChange = (e) => {
        setHasTeam(e.target.value);
      };

      const handleMentorChange = (e) => {
        const { name, value } = e.target;
        setMentor((prevState) => ({
            ...prevState,
            [name]: value,
        }));
      };
      const handleProjectLeadChange = (e) => {
        const { name, value } = e.target;
        setLead((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleTeamMemberChange = (index, field, value) => {
      setTeamMembers((prevMembers) => {
          const newMembers = [...prevMembers];
  
          if (!newMembers[index]) {
              newMembers[index] = { name: "", rollNo: "", email: "", contact: "" };
          }
  
          newMembers[index][field] = value;
          return newMembers;
      });
  };
  
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim()) {
          alert("Project title is required.");
          return;
      }
      
      if (!projectTheme.trim()) {
          alert("Project theme is required.");
          return;
      }
      
      if (!problemStatement.trim()) {
          alert("Problem statement is required.");
          return;
      }
      
      if (!abstract.trim()) {
          alert("Abstract is required.");
          return;
      }
      
      if (file === null) {
          alert("Please upload a project file.");
          return;
      }
      
      if (teamSize <= 0) {
          alert("Team size must be greater than 0.");
          return;
      }
      
      if (!mentor.name.trim()) {
          alert("Mentor's name is required.");
          return;
      }
      
      if (!mentor.designation.trim()) {
          alert("Mentor's designation is required.");
          return;
      }
      
      if (!mentor.department.trim()) {
          alert("Mentor's department is required.");
          return;
      }
      
      if (!mentor.email.trim()) {
          alert("Mentor's email is required.");
          return;
      }
      
      if (!mentor.contact.trim()) {
          alert("Mentor's contact number is required.");
          return;
      }
      
      if (!lead.name.trim()) {
          alert("Lead's name is required.");
          return;
      }
      
      if (!lead.rollNo.trim()) {
          alert("Lead's roll number is required.");
          return;
      }
      
      if (!lead.institution.trim()) {
          alert("Lead's institution is required.");
          return;
      }
      
      if (!lead.department.trim()) {
          alert("Lead's department is required.");
          return;
      }
      
      if (!lead.email.trim()) {
          alert("Lead's email is required.");
          return;
      }
      
      if (!lead.contact.trim()) {
          alert("Lead's contact number is required.");
          return;
      }
      
      if (hasTeam === "") {
          alert("Please select whether you have a team.");
          return;
      }
      
      if (numMembers <= 0) {
          alert("Number of team members must be greater than 0.");
          return;
      }
      
      if (hasTeam === "Yes" && teamMembers.length === 0) {
          alert("Please add at least one team member.");
          return;
      }
      
      
        const formData = new FormData();
        formData.append("title", title);
        formData.append("projectTheme", projectTheme);
        formData.append("problemStatement", problemStatement);
        formData.append("abstract", abstract);
        formData.append("file", file); // Attach the actual file object
        formData.append("isInterDepartmental",  JSON.stringify(isInterDepartmental));
        formData.append("domains", JSON.stringify(domains)); // Convert array to JSON string
        formData.append("teamSize", teamSize);

        formData.append("mentor[name]", mentor.name);
        formData.append("mentor[designation]", mentor.designation);
        formData.append("mentor[department]", mentor.department);
        formData.append("mentor[email]", mentor.email);
        formData.append("mentor[contact]", mentor.contact);

        formData.append("lead[name]", lead.name);
        formData.append("lead[rollNo]", lead.rollNo);
        formData.append("lead[institution]", lead.institution);
        formData.append("lead[department]", lead.department);
        formData.append("lead[email]", lead.email);
        formData.append("lead[contact]", lead.contact);

        formData.append("hasTeam", JSON.stringify(hasTeam));
        formData.append("numMembers", numMembers);
        formData.append("teamMembers", JSON.stringify(teamMembers));
        
        const result = await ApplyApi(formData);
        console.log(result.success === true)
        if(result.success === true){
          navigate("/")
        }

    }

    useEffect(() => {
      setTeamMembers(Array.from({ length: numMembers }, () => ({ name: "", rollNo: "", email: "", contact: "" })));
  }, [numMembers]);
  
  return (
    <> <Navbar />
    <form className="m-5 flex justify-center items-center" onSubmit={handleSubmit}> 
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
        <div className="flex items-center mt-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxzBeCr_sg6QKaBQWRQUkGxgcRAFTaR5orwA&s" alt="Profile" className="w-14 h-16 mr-4 rounded-full" />
            <div>
                <h1 className="font-bold">Project management site</h1>
                <p className="mt-1 text-sm text-gray-600">
                This information will be displayed publicly so be careful what you share.
                </p>
            </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-900">
                1. Title of the project
                </label>
                <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                    id="title"
                    name="title"
                    className={`block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 ${titleError ? 'border-red-600' : ''}`}
                    type="text"
                    placeholder="Enter project title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    />
                </div>
                </div>
            </div>
            </div>


            <br />
            <fieldset>
            <legend className="text-sm font-semibold text-gray-900">2. Theme of your project</legend>
  <div className="mt-6 space-y-6">
    <div className="flex items-center gap-x-3">
      <input
        id="energy-storage"
        name="project-theme"
        type="radio"
        value="Energy/ Energy storage"
        onChange={handleThemeChange}
        checked={projectTheme === "Energy/ Energy storage"}
        className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400"
        required
      />
      <label htmlFor="energy-storage" className="block text-sm font-medium text-gray-900">
        Energy/ Energy storage
      </label>
    </div>
    <div className="flex items-center gap-x-3">
      <input
        id="intelligent-transportation"
        name="project-theme"
        type="radio"
        value="Intelligent transportation"
        onChange={handleThemeChange}
        checked={projectTheme === "Intelligent transportation"}
        className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400"
        required
      />
      <label htmlFor="intelligent-transportation" className="block text-sm font-medium text-gray-900">
        Intelligent transportation
      </label>
    </div>
    <div className="flex items-center gap-x-3">
      <input
        id="agriculture-technology"
        name="project-theme"
        type="radio"
        value="Agriculture Technology"
        onChange={handleThemeChange}
        checked={projectTheme === "Agriculture Technology"}
        className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400"
        required
      />
      <label htmlFor="agriculture-technology" className="block text-sm font-medium text-gray-900">
        Agriculture Technology
      </label>
    </div>
    <div className="flex items-center gap-x-3">
      <input
        id="underwater-systems"
        name="project-theme"
        type="radio"
        value="Underwater systems"
        onChange={handleThemeChange}
        checked={projectTheme === "Underwater systems"}
        className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400"
        required
      />
      <label htmlFor="underwater-systems" className="block text-sm font-medium text-gray-900">
        Underwater systems
      </label>
    </div>
    <div className="flex items-center gap-x-3">
      <input
        id="defense-technology"
        name="project-theme"
        type="radio"
        value="Defense Technology"
        onChange={handleThemeChange}
        checked={projectTheme === "Defense Technology"}
        className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400"
        required
      />
      <label htmlFor="defense-technology" className="block text-sm font-medium text-gray-900">
        Defense Technology
      </label>
    </div>
  </div>
</fieldset>


    <div className="mt-6">
      <fieldset>
        <legend className="text-sm font-semibold text-gray-900">3. Problem Statement</legend>
        <textarea
          value={problemStatement}
          onChange={(e)=>{setProblemStatement(e.target.value)}}
          rows="4"
          className="mt-2 p-2 w-full border rounded-md text-sm text-gray-900"
          placeholder="Describe the problem your project is addressing..."
          required
        />
      </fieldset>

      <fieldset className="mt-6">
        <legend className="text-sm font-semibold text-gray-900">4. Abstract</legend>
        <textarea
          value={abstract}
          onChange={(e)=>{setAbstract(e.target.value)}}
          rows="4"
          className="mt-2 p-2 w-full border rounded-md text-sm text-gray-900"
          placeholder="Provide a brief summary of your project..."
          required
        />
      </fieldset>

      <div className="mt-4">
        <p className="text-sm text-gray-600">Problem Statement: {problemStatement}</p>
        <p className="text-sm text-gray-600">Abstract: {abstract}</p>
      </div>
    </div>

            <fieldset className="mt-6">
                <legend className="text-sm font-semibold text-gray-900">5. Upload Proposal document</legend>
                <input
                type="file"
                // accept="application/pdf"
                onChange={(e) => setFile(e.target.files[0])}
                className="mt-2 p-2 w-full border rounded-md text-sm text-gray-900"
                required
                />
            </fieldset>
            <div className="mt-6">
                {/* Question 1: Is the project inter-departmental */}
                <fieldset>
                    <legend className="text-sm font-semibold text-gray-900">6. Is your project inter-departmental?</legend>
                    <div className="flex items-center gap-x-3">
                    <input
                        type="radio"
                        id="yes"
                        name="inter-departmental"
                        value="Yes"
                        checked={isInterDepartmental === true}
                        onChange={handleInterDepartmentalChange}
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        required
                    />
                    <label htmlFor="yes" className="text-sm font-medium text-gray-900">Yes</label>
                    </div>
                    <div className="flex items-center gap-x-3">
                    <input
                        type="radio"
                        id="no"
                        name="inter-departmental"
                        value="No"
                        onChange={handleInterDepartmentalChange}
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        required
                    />
                    <label htmlFor="no" className="text-sm font-medium text-gray-900">No</label>
                    </div>
                </fieldset>

                {/* Question 2: Choose the domain of the project */}
                {isInterDepartmental && (
                    <fieldset className="mt-4">
                    <legend className="text-sm font-semibold text-gray-900">7. Choose the domain of the project proposed</legend>
                    <select
                        multiple
                        value={domains}
                        onChange={handleDomainChange}
                        className="mt-2 block w-full text-sm border-gray-300 rounded-md"
                        required
                    >
                        <option value="AERONAUTICAL">AERONAUTICAL</option>
                        <option value="AUTOMOBILE">AUTOMOBILE</option>
                        <option value="ARTIFICIAL INTELLIGENCE & DATA ANALYTICS">ARTIFICIAL INTELLIGENCE & DATA ANALYTICS</option>
                        <option value="BIO TECHNOLOGY">BIO TECHNOLOGY</option>
                        <option value="CIVIL">CIVIL</option>
                        <option value="COMPUTER SCIENCE">COMPUTER SCIENCE</option>
                        <option value="ECE">ECE</option>
                        <option value="EEE">EEE</option>
                        <option value="ELECTRONICS & INSTRUMENTATION">ELECTRONICS & INSTRUMENTATION</option>
                        <option value="FASHION TECHNOLOGY">FASHION TECHNOLOGY</option>
                        <option value="INFORMATION SCIENCE & ENGINEERING">INFORMATION SCIENCE & ENGINEERING</option>
                        <option value="INFORMATION TECHNOLOGY">INFORMATION TECHNOLOGY</option>
                        <option value="MECHANICAL">MECHANICAL</option>
                        <option value="MECHATRONICS">MECHATRONICS</option>
                        <option value="TEXTILE">TEXTILE</option>
                        <option value="Other">Other</option>
                    </select>
                    </fieldset>
                )}

                <fieldset className="mt-4">
                    <legend className="text-sm font-semibold text-gray-900">8. No. of members in your team</legend>
                    <input
                    type="number"
                    value={teamSize}
                    onChange={handleTeamSizeChange}
                    max="6"
                    className="mt-2 p-2 border-gray-300 rounded-md w-full"
                    placeholder="Enter a number less than or equal to 6"
                    required
                    />
                </fieldset>
                </div>

                <div className="mt-6">
    <h3 className="font-semibold text-lg text-gray-900">Mentor details</h3>

    {/* Mentor Name */}
    <fieldset className="mt-4">
        <legend className="text-sm font-semibold text-gray-900">9. Mentor Name</legend>
        <input
            type="text"
            name="name"
            value={mentor.name}
            onChange={handleMentorChange}
            className="mt-2 p-2 border-gray-300 rounded-md w-full"
            placeholder="Enter mentor's name"
            required
        />
    </fieldset>

    {/* Mentor Designation */}
    <fieldset className="mt-4">
        <legend className="text-sm font-semibold text-gray-900">10. Mentor Designation</legend>
        <select
            name="designation"
            value={mentor.designation}
            onChange={handleMentorChange}
            className="mt-2 p-2 border-gray-300 rounded-md w-full"
            required
        >
            <option value="Department head">Department head</option>
            <option value="Professor">Professor</option>
            <option value="Associate professor">Associate professor</option>
            <option value="Assistant professor">Assistant professor</option>
            <option value="Other">Other</option>
        </select>
    </fieldset>

    {/* Mentor Department */}
    <fieldset className="mt-4">
        <legend className="text-sm font-semibold text-gray-900">11. Department of Mentor</legend>
        <input
            type="text"
            name="department"
            value={mentor.department}
            onChange={handleMentorChange}
            className="mt-2 p-2 border-gray-300 rounded-md w-full"
            placeholder="Enter mentor's department"
            required
        />
    </fieldset>

    {/* Mentor Email ID */}
    <fieldset className="mt-4">
        <legend className="text-sm font-semibold text-gray-900">12. Mentor Mail ID</legend>
        <input
            type="email"
            name="email"
            value={mentor.email}
            onChange={handleMentorChange}
            className="mt-2 p-2 border-gray-300 rounded-md w-full"
            placeholder="Enter mentor's email ID"
            required
        />
    </fieldset>

    {/* Mentor Contact Number */}
    <fieldset className="mt-4">
        <legend className="text-sm font-semibold text-gray-900">13. Mentor Contact Number</legend>
        <input
            type="tel"
            name="contact"
            value={mentor.contact}
            onChange={handleMentorChange}
            className="mt-2 p-2 border-gray-300 rounded-md w-full"
            placeholder="Enter mentor's contact number"
            required
        />
    </fieldset>
</div>

<div className="mt-6">
    <h3 className="font-semibold text-lg text-gray-900">Project Lead Details</h3>

    {/* Project Lead Name */}
    <fieldset className="mt-4">
        <legend className="text-sm font-semibold text-gray-900">14. Name</legend>
        <input
            type="text"
            name="name"
            value={lead.name}
            onChange={handleProjectLeadChange}
            className="mt-2 p-2 border-gray-300 rounded-md w-full"
            placeholder="Enter project lead's name"
            required
        />
    </fieldset>

    {/* Roll No. */}
    <fieldset className="mt-4">
        <legend className="text-sm font-semibold text-gray-900">15. Roll No.</legend>
        <input
            type="text"
            name="rollNo"
            value={lead.rollNo}
            onChange={handleProjectLeadChange}
            className="mt-2 p-2 border-gray-300 rounded-md w-full"
            placeholder="Enter roll number"
            required
        />
    </fieldset>

    {/* Institution */}
    <fieldset className="mt-4">
        <legend className="text-sm font-semibold text-gray-900">16. Institution</legend>
        <select
            name="institution"
            value={lead.institution}
            onChange={handleProjectLeadChange}
            className="mt-2 p-2 border-gray-300 rounded-md w-full"
            required
        >
            <option value="">Select Institution</option>
            <option value="KCT">KCT</option>
            <option value="KCLAS">KCLAS</option>
            <option value="KCT BS">KCT BS</option>
            <option value="KIA">KIA</option>
        </select>
    </fieldset>

    {/* Department */}
    <fieldset className="mt-4">
        <legend className="text-sm font-semibold text-gray-900">17. Department</legend>
        <input
            type="text"
            name="department"
            value={lead.department}
            onChange={handleProjectLeadChange}
            className="mt-2 p-2 border-gray-300 rounded-md w-full"
            placeholder="Enter department"
            required
        />
    </fieldset>

    {/* Email ID */}
    <fieldset className="mt-4">
        <legend className="text-sm font-semibold text-gray-900">18. Email ID</legend>
        <input
            type="email"
            name="email"
            value={lead.email}
            onChange={handleProjectLeadChange}
            className="mt-2 p-2 border-gray-300 rounded-md w-full"
            placeholder="Enter email ID"
            required
        />
    </fieldset>

    {/* Contact Number */}
    <fieldset className="mt-4">
        <legend className="text-sm font-semibold text-gray-900">19. Contact Number</legend>
        <input
            type="tel"
            name="contact"
            value={lead.contact}
            onChange={handleProjectLeadChange}
            className="mt-2 p-2 border-gray-300 rounded-md w-full"
            placeholder="Enter contact number"
            required
        />
    </fieldset>

    {/* Do you have a team? */}
    <fieldset className="mt-4">
        <legend className="text-sm font-semibold text-gray-900">20. Do you have a team for this project?</legend>
        <div className="flex items-center gap-x-3">
            <input
                type="radio"
                id="yes-team"
                name="hasTeam"
                value="Yes"
                checked={hasTeam === "Yes"}
                onChange={handleHasTeamChange}
                className="p-2"
                required
            />
            <label htmlFor="yes-team" className="text-sm font-medium text-gray-900">Yes</label>
        </div>
        <div className="flex items-center gap-x-3">
            <input
                type="radio"
                id="no-team"
                name="hasTeam"
                value="No"
                checked={hasTeam === "No"}
                onChange={handleHasTeamChange}
                className="p-2"
                required
            />
            <label htmlFor="no-team" className="text-sm font-medium text-gray-900">No</label>
        </div>
    </fieldset>
</div>

                <div className="mt-6">
                    {/* Number of team members */}
                    <fieldset>
                        <legend className="text-sm font-semibold text-gray-900">21. Number of Team Members</legend>
                        <select
                        value={numMembers}
                        onChange={handleNumMembersChange}
                        className="mt-2 p-2 border-gray-300 rounded-md w-full"
                        required
                        >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        </select>
                    </fieldset>
                    

                    {Array.from({ length: numMembers }).map((_, index) => (
    <div key={index} className="mt-4">
        <fieldset>
            <legend className="text-sm font-semibold text-gray-900">{index + 1} Name of member #{index + 1}</legend>
            <input
                type="text"
                value={teamMembers[index]?.name || ""}
                onChange={(e) => handleTeamMemberChange(index, 'name', e.target.value)}
                className="mt-2 p-2 border-gray-300 rounded-md w-full"
                placeholder={`Enter name of member #${index + 1}`}
                required
            />
        </fieldset>

        <fieldset className="mt-4">
            <legend className="text-sm font-semibold text-gray-900">{index + 1}. Roll No. of member #{index + 1}</legend>
            <input
                type="text"
                value={teamMembers[index]?.rollNo || ""}
                onChange={(e) => handleTeamMemberChange(index, 'rollNo', e.target.value)}
                className="mt-2 p-2 border-gray-300 rounded-md w-full"
                placeholder={`Enter roll number of member #${index + 1}`}
                required
            />
        </fieldset>

        <fieldset className="mt-4">
            <legend className="text-sm font-semibold text-gray-900">{index + 1}. Email ID of member #{index + 1}</legend>
            <input
                type="email"
                value={teamMembers[index]?.email || ""}
                onChange={(e) => handleTeamMemberChange(index, 'email', e.target.value)}
                className="mt-2 p-2 border-gray-300 rounded-md w-full"
                placeholder={`Enter email ID of member #${index + 1}`}
                required
            />
        </fieldset>

        <fieldset className="mt-4">
            <legend className="text-sm font-semibold text-gray-900">{index + 1}. Contact No. of member #{index + 1}</legend>
            <input
                type="tel"
                value={teamMembers[index]?.contact || ""}
                onChange={(e) => handleTeamMemberChange(index, 'contact', e.target.value)}
                className="mt-2 p-2 border-gray-300 rounded-md w-full"
                placeholder={`Enter contact number of member #${index + 1}`}
                required
            />
        </fieldset>
    </div>
))}

                    </div>

                    <button
                    type="submit"
                    className="mt-6 w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 transition-all"
                    >
                    Submit
                    </button>

      </div>
      </div>
    </form>
    </>
  )
}


export default Apply;