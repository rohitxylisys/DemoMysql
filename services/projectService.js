const Project = require('../models/Project'); // Assuming a Project model is created

const projectService = {
    createProject: async (name, description) => {
        const newProject = new Project({ name, description });
        await newProject.save();
        return newProject;
    },

    getAllProjects: async () => {
        return await Project.find();
    },

    getProjectById: async (id) => {
        return await Project.findById(id);
    },

    updateProject: async (id, data) => {
        return await Project.findByIdAndUpdate(id, data, { new: true });
    },

    deleteProject: async (id) => {
        return await Project.findByIdAndDelete(id);
    },
};

module.exports = projectService;
