/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config.ts":
/*!*******************!*\
  !*** ./config.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// we use this file to export any important data\n// that can be accessed from anywhere in the system\nvar uuidv1 = __webpack_require__(/*! uuid/v1 */ \"uuid/v1\");\nvar dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\ndotenv.config();\nvar sess = {\n    genid: function (req) {\n        return uuidv1();\n    },\n    secret: \"keyboard cat\",\n    resave: false,\n    saveUninitialized: true,\n    cookie: {}\n};\nmodule.exports = {\n    username: process.env.USERNAME,\n    password: process.env.PASSWORD,\n    rootDirectory: process.env.ROOT_FOLDER,\n    sessionConfig: sess\n};\n\n\n//# sourceURL=webpack:///./config.ts?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./src/controllers/files.ts":
/*!**********************************!*\
  !*** ./src/controllers/files.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\nexports.__esModule = true;\nvar path = __webpack_require__(/*! path */ \"path\");\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nvar rootDirectory = __webpack_require__(/*! ../../config */ \"./config.ts\").rootDirectory;\n// ======== multer configuration =========\nvar multer = __webpack_require__(/*! multer */ \"multer\");\nvar storage = multer.diskStorage({\n    destination: function (req, file, cb) {\n        var x = rootDirectory;\n        if (req.params.path !== undefined) {\n            x = rootDirectory + req.params.path;\n        }\n        cb(null, x);\n    },\n    filename: function (req, file, cb) {\n        // handle file name collusion\n        var currentDir = rootDirectory;\n        var query = req.query.path || \"\";\n        if (query)\n            currentDir = path.join(rootDirectory, query);\n        var files = fs.readdirSync(currentDir, \"utf8\");\n        var fileName = file.originalname;\n        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {\n            var x = files_1[_i];\n            if (x === fileName) {\n                var extension = path.extname(x);\n                fileName = fileName.split(extension)[0] + \"(\" + Date.now() + \")\" + extension;\n            }\n        }\n        cb(null, fileName);\n    }\n});\nexports.multerUploadInstance = multer({ storage: storage });\n// ======== END OF multer configuration ======\nfunction getFiles(req, res) {\n    var currentDir = rootDirectory;\n    var query = req.query.path || \"\";\n    if (query)\n        currentDir = path.join(rootDirectory, query);\n    var data = getFileInfoFromFolder(currentDir, query);\n    res.render(\"pages/myDrive.ejs\", { data: data });\n}\nexports.getFiles = getFiles;\nvar getFileInfoFromFolder = function (route, query) {\n    var files = fs.readdirSync(route, \"utf8\");\n    var response = [];\n    for (var _i = 0, files_2 = files; _i < files_2.length; _i++) {\n        var file = files_2[_i];\n        // const extension = path.extname(file);\n        var fileSize = formatFileSize(Number(fs.statSync(path.join(route, file)).size));\n        var fileType = fs.lstatSync(path.join(route, file)).isDirectory()\n            ? \"folder\"\n            : \"file\";\n        // console.log(fileType);\n        var fileLastModified = formatDate(fs.statSync(path.join(route, file)).mtime);\n        // we ignore the DS_Store file\n        if (file !== \".DS_Store\") {\n            response.push({\n                name: file,\n                fileSize: fileSize,\n                fileLastModified: fileLastModified,\n                type: fileType,\n                path: path.join(query, file)\n            });\n        }\n    }\n    // this sort will put all folders in the beginning of the array\n    response.sort(function (a, b) { return (a.type < b.type ? 1 : -1); });\n    return response;\n};\nvar formatFileSize = function (size) {\n    var i = size == 0 ? 0 : Math.floor(Math.log(size) / Math.log(1024));\n    var x = (size / Math.pow(1024, i)).toFixed(2);\n    return x * 1 + \" \" + [\"B\", \"kB\", \"MB\", \"GB\", \"TB\"][i];\n};\nvar formatDate = function (d) {\n    var months = [\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\",\n        \"Jul\", \"Aug\", \"Sep\", \"Oct\", \"Nov\", \"Dec\"];\n    var year = \"\" + d.getFullYear(), month = months[d.getMonth()], date = d.getDate() > 9 ? d.getDate() : \"0\" + d.getDate();\n    // hours = (d.getHours()),\n    // minutes = (d.getMinutes() > 9) ? d.getMinutes() : '0' + d.getMinutes();\n    return date + \" \" + month + \" \" + year;\n};\nexports.downloadFile = function (req, res) {\n    var path = req.params.path;\n    var file = __dirname + rootDirectory + \"/\" + path;\n    res.download(file); // Set disposition and send it.\n};\nexports.uploadFile = function (req, res, next) {\n    var file = req.file;\n    if (!file) {\n        var error = new Error(\"Please upload a file\");\n        return next(error);\n    }\n    // res.send(file);\n    res.redirect(\"back\"); // reloads the current url again to reflect the changes.\n};\nexports.deleteFile = function (req, res) {\n    var path = req.params.path;\n    var file = __dirname + rootDirectory + \"/\" + path;\n    console.log(path);\n    fs.unlink(file, function () {\n        console.log('file deleted');\n        res.redirect(\"back\"); // reloads the current url again to reflect the changes.\n    });\n};\n\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./src/controllers/files.ts?");

/***/ }),

/***/ "./src/controllers/user.ts":
/*!*********************************!*\
  !*** ./src/controllers/user.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar validationResult = __webpack_require__(/*! express-validator */ \"express-validator\").validationResult;\nvar _a = __webpack_require__(/*! ../../config */ \"./config.ts\"), username = _a.username, password = _a.password;\nfunction authUser(req, res) {\n    var errors = validationResult(req);\n    if (!errors.isEmpty()) {\n        console.log('there is error');\n        res.render('pages/index.ejs', { Error: 'Please enter data.' });\n    }\n    else {\n        var name_1 = req.body.username;\n        var pass = req.body.password;\n        if (name_1 === username && pass === password) {\n            req.session.user = name_1;\n            req.session.admin = true;\n            res.redirect('/my-drive');\n        }\n        else {\n            res.render('pages/loginFailed.ejs', { data: 'Invalid credentials' });\n        }\n    }\n    res.end();\n}\nexports.authUser = authUser;\n// Authentication and Authorization Middleware\nfunction authCheck(req, res, next) {\n    if (req.session && req.session.user === \"admin\" && req.session.admin) {\n        return next();\n    }\n    else {\n        // return res.sendStatus(401);\n        return res.render(\"pages/unauthorised.ejs\");\n    }\n}\nexports.authCheck = authCheck;\n;\n\n\n//# sourceURL=webpack:///./src/controllers/user.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\nexports.__esModule = true;\nvar express = __webpack_require__(/*! express */ \"express\");\nvar session = __webpack_require__(/*! express-session */ \"express-session\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar favicon = __webpack_require__(/*! serve-favicon */ \"serve-favicon\");\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\nvar routes_1 = __webpack_require__(/*! ./routes/ */ \"./src/routes/index.ts\");\nvar routes_2 = __webpack_require__(/*! ./routes/ */ \"./src/routes/index.ts\");\nvar user_1 = __webpack_require__(/*! ./controllers/user */ \"./src/controllers/user.ts\");\nvar sessionConfig = __webpack_require__(/*! ../config */ \"./config.ts\").sessionConfig;\n// Create a new Express application.\nvar app = express();\nvar _a = process.env.PORT, PORT = _a === void 0 ? 3000 : _a;\n// Configure view engine to render EJS templates.\napp.set(\"view engine\", \"ejs\");\napp.set(\"views\", \"src/views\");\n// public folder for assets i.e (.js / .css/ images) files\napp.use(express.static(\"src/public\"));\napp.use(favicon(path.join(\"src\", \"public\", \"images\", \"favicon.ico\"))); // favicon\n// Application-level middleware for common functionality( logging, parsing, and session handling).\napp.use(bodyParser.urlencoded({ extended: true }));\n// Define session\n// For using secure cookies in production, but allowing for testing in development,\n// the following is required.\nif (app.get(\"env\") === \"production\") {\n    app.set(\"trust proxy\", 1); // trust first proxy\n    sessionConfig.cookie[\"secure\"] = true; // serve secure cookies\n}\napp.use(session(sessionConfig));\n// Cache handle. In case user uses browser back button\n// if user is not authenticated we will redirect to unauthorised page\napp.use(function (req, res, next) {\n    res.header(\"Cache-Control\", \"no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0\");\n    next();\n});\n// Define Route\napp.use(\"/my-drive\", user_1.authCheck, routes_1.fileRouter);\napp.use(\"/login\", routes_2.userRouter);\napp.use(\"/files\", user_1.authCheck, routes_1.fileRouter);\napp.get(\"/\", function (req, res) {\n    res.render(\"pages/index.ejs\");\n});\napp.get(\"/logout\", function (req, res) {\n    req.session.destroy();\n    res.redirect(\"/\");\n});\nif (__webpack_require__.c[__webpack_require__.s] === module) {\n    app.listen(PORT, function () {\n        console.log(\"server started at http://localhost:\" + PORT);\n    });\n}\nexports[\"default\"] = app;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/routes/fileRouter.ts":
/*!**********************************!*\
  !*** ./src/routes/fileRouter.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar files_1 = __webpack_require__(/*! ../controllers/files */ \"./src/controllers/files.ts\");\nexports.fileRouter = express_1.Router();\nexports.fileRouter.get('/', files_1.getFiles);\nexports.fileRouter.get(\"/download/:path(*)\", files_1.downloadFile);\nexports.fileRouter.post(\"/uploadFile/:path(*)\", files_1.multerUploadInstance.single(\"myFile\"), files_1.uploadFile);\nexports.fileRouter.get(\"/delete/:path(*)\", files_1.deleteFile);\n\n\n//# sourceURL=webpack:///./src/routes/fileRouter.ts?");

/***/ }),

/***/ "./src/routes/index.ts":
/*!*****************************!*\
  !*** ./src/routes/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nexports.__esModule = true;\n__export(__webpack_require__(/*! ./fileRouter */ \"./src/routes/fileRouter.ts\"));\n__export(__webpack_require__(/*! ./userRouter */ \"./src/routes/userRouter.ts\"));\n\n\n//# sourceURL=webpack:///./src/routes/index.ts?");

/***/ }),

/***/ "./src/routes/userRouter.ts":
/*!**********************************!*\
  !*** ./src/routes/userRouter.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar user_1 = __webpack_require__(/*! ../controllers/user */ \"./src/controllers/user.ts\");\nvar check = __webpack_require__(/*! express-validator */ \"express-validator\").check;\nexports.userRouter = express_1.Router();\nexports.userRouter.post('/', [\n    check('username').trim().escape().isLength({ min: 1 }),\n    check('password').trim().escape().isLength({ min: 1 })\n], user_1.authUser);\n\n\n//# sourceURL=webpack:///./src/routes/userRouter.ts?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-session\");\n\n//# sourceURL=webpack:///external_%22express-session%22?");

/***/ }),

/***/ "express-validator":
/*!************************************!*\
  !*** external "express-validator" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-validator\");\n\n//# sourceURL=webpack:///external_%22express-validator%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"multer\");\n\n//# sourceURL=webpack:///external_%22multer%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "serve-favicon":
/*!********************************!*\
  !*** external "serve-favicon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serve-favicon\");\n\n//# sourceURL=webpack:///external_%22serve-favicon%22?");

/***/ }),

/***/ "uuid/v1":
/*!**************************!*\
  !*** external "uuid/v1" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid/v1\");\n\n//# sourceURL=webpack:///external_%22uuid/v1%22?");

/***/ })

/******/ });