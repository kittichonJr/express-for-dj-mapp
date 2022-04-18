require('dotenv').config();

module.exports = {
    isVercel: process.env.IS_VERCEL || false,
    port: process.env.PORT || 3001,
    mongoUri: process.env.MONGO_URI,
    mongoOptions: {
        user: process.env.MONGO_USER,
        pass: process.env.MONGO_PASSWORD,
        dbName: process.env.MONGO_DATABASE,
        retryWrites: true,
        w:'majority',
    }
}
