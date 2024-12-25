const authService = require('../services/authService');
const jwt = require('jsonwebtoken');

const authController = {
    register: async (req, res) => {
        try {
            const { name, email, password } = req.body;
            const user = await authService.register(name, email, password);
            res.status(201).json({ message: 'User registered successfully', user });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await authService.login(email, password);
            const accessToken = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '15m' });
            const refreshToken = jwt.sign({ id: user.id }, 'your_refresh_token_secret', { expiresIn: '7d' });
            res.json({ accessToken, refreshToken });
        } catch (error) {
            res.status(401).json({ message: error.message });
        }
    },

    refreshToken: (req, res) => {
        const { token } = req.body;
        if (!token) return res.sendStatus(401);

        jwt.verify(token, 'your_refresh_token_secret', (err, user) => {
            if (err) return res.sendStatus(403);
            const accessToken = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '15m' });
            res.json({ accessToken });
        });
    },
};

module.exports = authController;
