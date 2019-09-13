// we use this file to export any important data
// that can be accessed from anywhere in the system
const uuidv1 = require("uuid/v1");
const dotenv = require('dotenv');
dotenv.config();
let sess = {
    genid: function(req) {
        return uuidv1();
    },
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: {}
};
module.exports = {
    username        : process.env.USERNAME, // TODO: temporary for dev
    password        : process.env.PASSWORD, // TODO: temporary for dev
    rootDirectory   : process.env.ROOT_FOLDER, // TODO: temporary root folder for dev
    sessionConfig   : sess
};
