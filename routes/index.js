const express = require('express');
const authRoutes = require('./auth');
const projectRoutes = require('./projects');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/projects', projectRoutes);

module.exports = router;
