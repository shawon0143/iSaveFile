// we use this file to export any important data
// that can be accessed from anywhere in the system
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    username        : process.env.USERNAME, // TODO: temporary for dev
    password        : process.env.PASSWORD, // TODO: temporary for dev
    rootDirectory   : process.env.ROOT_FOLDER // TODO: temporary root folder for dev
};
