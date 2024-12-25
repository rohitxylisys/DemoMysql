const bcrypt = require('bcrypt');
const User = require('../models/User');

const authService = {
    register: async (name, email, password) => {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw new Error('User already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            name,
            email,
            password: hashedPassword,
        });

        await user.save();
        return user;
    },

    login: async (email, password) => {
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            throw new Error('Invalid credentials');
        }

        return user;
    },
};

module.exports = authService;
