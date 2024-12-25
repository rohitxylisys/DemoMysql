require('dotenv').config();

const envConfig = {
    DATABASE_URL: process.env.DATABASE_URL,
    MONGODB_URI: process.env.MONGODB_URI,
};

module.exports = envConfig;
