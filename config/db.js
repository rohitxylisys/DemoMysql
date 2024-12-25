const mongoose = require('mongoose');
const envConfig = require('./envConfig');

const connectDB = async () => {
    try {
        await mongoose.connect(envConfig.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully.');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
