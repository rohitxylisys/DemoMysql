const projectService = require('../services/projectService');

const projectController = {
    createProject: async (req, res) => {
        try {
            const { name, description } = req.body;
            const project = await projectService.createProject(name, description);
            res.status(201).json(project);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    getAllProjects: async (req, res) => {
        try {
            const projects = await projectService.getAllProjects();
            res.json(projects);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getProjectById: async (req, res) => {
        try {
            const project = await projectService.getProjectById(req.params.id);
            if (!project) return res.status(404).json({ message: 'Project not found' });
            res.json(project);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    updateProject: async (req, res) => {
        try {
            const project = await projectService.updateProject(req.params.id, req.body);
            if (!project) return res.status(404).json({ message: 'Project not found' });
            res.json(project);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    deleteProject: async (req, res) => {
        try {
            const project = await projectService.deleteProject(req.params.id);
            if (!project) return res.status(404).json({ message: 'Project not found' });
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
};

module.exports = projectController;
