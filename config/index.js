const dotenv = require('dotenv')
const path = require('path')

dotenv.config()

module.exports = {
    rootPath: path.resolve(__dirname, '..'),
    serviceName: process.env.SERVICE_NAME,
    jwtSecret: process.env.JWT_KEY,
    jwtExpired: process.env.JWT_EXPIRED
}
