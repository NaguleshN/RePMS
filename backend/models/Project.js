import mongoose from 'mongoose';

const TeamMemberSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rollNo: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: String, required: true }
});

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    projectTheme: { type: String, required: true },
    problemStatement: { type: String, required: true },
    abstract: { type: String, required: true },
    isInterDepartmental: { type: Boolean, required: true },
    domains: [{ type: String }], // Array of strings
    teamSize: { type: Number, required: true },
    hasTeam: { type: Boolean, required: true },
    numMembers: { type: Number, required: true },
    teamMembers: [TeamMemberSchema], // Array of team members
    mentor: {
        name: { type: String, required: true },
        designation: { type: String, required: true },
        department: { type: String, required: true },
        email: { type: String, required: true },
        contact: { type: String, required: true }
    },
    lead: {
        name: { type: String, required: true },
        rollNo: { type: String, required: true },
        institution: { type: String, required: true },
        department: { type: String, required: true },
        email: { type: String, required: true },
        contact: { type: String, required: true }
    }
});

const Project = mongoose.model('Project', ProjectSchema);
export default Project;
