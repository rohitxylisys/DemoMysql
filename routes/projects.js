const express = require('express');
const router = express.Router();

let projects = [];

router.post('/', (req, res) => {
    const { name, description } = req.body;
    const newProject = { id: projects.length + 1, name, description };
    projects.push(newProject);
    res.status(201).json(newProject);
});

// Read all projects
router.get('/', (req, res) => {
    res.json(projects);
});

// Read a single project by ID
router.get('/:id', (req, res) => {
    const project = projects.find(p => p.id === parseInt(req.params.id));
    if (!project) return res.status(404).send('Project not found');
    res.json(project);
});

// Update a project by ID
router.put('/:id', (req, res) => {
    const project = projects.find(p => p.id === parseInt(req.params.id));
    if (!project) return res.status(404).send('Project not found');

    const { name, description } = req.body;
    project.name = name;
    project.description = description;
    res.json(project);
});

// Delete a project by ID
router.delete('/:id', (req, res) => {
    const projectIndex = projects.findIndex(p => p.id === parseInt(req.params.id));
    if (projectIndex === -1) return res.status(404).send('Project not found');

    projects.splice(projectIndex, 1);
    res.status(204).send();
});

module.exports = router;
