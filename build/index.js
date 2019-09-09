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

eval("// we use this file to export any important data\n// that can be accessed from anywhere in the system\nvar dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\ndotenv.config();\nmodule.exports = {\n    username: process.env.USERNAME,\n    password: process.env.PASSWORD // TODO: temporary for dev\n};\n\n\n//# sourceURL=webpack:///./config.ts?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./src/controllers/getFiles.ts":
/*!*************************************!*\
  !*** ./src/controllers/getFiles.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nfunction getFiles(req, res) {\n    res.send({\n        files: [\n            { id: 1, name: 'mercedes' },\n            { id: 2, name: 'BMW' }\n        ]\n    });\n}\nexports.getFiles = getFiles;\n\n\n//# sourceURL=webpack:///./src/controllers/getFiles.ts?");

/***/ }),

/***/ "./src/controllers/user.ts":
/*!*********************************!*\
  !*** ./src/controllers/user.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar validationResult = __webpack_require__(/*! express-validator */ \"express-validator\").validationResult;\nvar _a = __webpack_require__(/*! ../../config */ \"./config.ts\"), username = _a.username, password = _a.password;\nfunction authUser(req, res) {\n    var errors = validationResult(req);\n    if (!errors.isEmpty()) {\n        console.log('there is error');\n        res.render('pages/index.ejs', { Error: 'Please enter data.' });\n    }\n    else {\n        var name_1 = req.body.username;\n        var pass = req.body.password;\n        if (name_1 === username && pass === password) {\n            req.session.user = name_1;\n            req.session.admin = true;\n            res.redirect('/my-drive');\n        }\n        else {\n            res.render('pages/loginFailed.ejs', { data: 'Invalid credentials' });\n        }\n    }\n    res.end();\n}\nexports.authUser = authUser;\n\n\n//# sourceURL=webpack:///./src/controllers/user.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\nexports.__esModule = true;\nvar express = __webpack_require__(/*! express */ \"express\");\nvar session = __webpack_require__(/*! express-session */ \"express-session\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar favicon = __webpack_require__(/*! serve-favicon */ \"serve-favicon\");\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\nvar routes_1 = __webpack_require__(/*! ./routes/ */ \"./src/routes/index.ts\");\nvar routes_2 = __webpack_require__(/*! ./routes/ */ \"./src/routes/index.ts\");\n// Create a new Express application.\nvar app = express();\nvar _a = process.env.PORT, PORT = _a === void 0 ? 3000 : _a;\n// Configure view engine to render EJS templates.\napp.set(\"view engine\", \"ejs\");\napp.set(\"views\", \"src/views\");\n// public folder for assets i.e (.js / .css/ images) files\n// favicon\napp.use(express.static('src/public'));\napp.use(favicon(path.join('src', 'public', 'images', 'favicon.ico')));\n// Use application-level middleware for common functionality, including\n// logging, parsing, and session handling.\napp.use(bodyParser.urlencoded({ extended: true })); // handle post bodies\n// Define session\nvar uuidv1 = __webpack_require__(/*! uuid/v1 */ \"uuid/v1\");\nvar sess = {\n    genid: function (req) {\n        return uuidv1();\n    },\n    secret: 'keyboard cat',\n    resave: false,\n    saveUninitialized: true,\n    cookie: {}\n};\n// For using secure cookies in production, but allowing for testing in development,\n// the following is required.\nif (app.get('env') === 'production') {\n    app.set('trust proxy', 1); // trust first proxy\n    sess.cookie['secure'] = true; // serve secure cookies\n}\napp.use(session(sess));\n// Cache handle. In case user uses browser back button\n// if user is not authenticated we will redirect to unauthorised page\napp.use(function (req, res, next) {\n    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');\n    next();\n});\n// Authentication and Authorization Middleware\nvar auth = function (req, res, next) {\n    if (req.session && req.session.user === \"admin\" && req.session.admin) {\n        return next();\n    }\n    else {\n        // return res.sendStatus(401);\n        return res.render('pages/unauthorised.ejs');\n    }\n};\n// Define Route\napp.use('/myFiles', auth, routes_1.fileRouter);\napp.use('/login', routes_2.userRouter);\napp.get('/my-drive', auth, function (req, res) {\n    res.render('pages/myDrive.ejs');\n});\napp.get('/', function (req, res) {\n    res.render('pages/index.ejs');\n});\napp.get('/logout', function (req, res) {\n    req.session.destroy();\n    res.redirect('/');\n});\nif (__webpack_require__.c[__webpack_require__.s] === module) {\n    app.listen(PORT, function () {\n        console.log('server started at http://localhost:' + PORT);\n    });\n}\nexports[\"default\"] = app;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/routes/fileRouter.ts":
/*!**********************************!*\
  !*** ./src/routes/fileRouter.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar getFiles_1 = __webpack_require__(/*! ../controllers/getFiles */ \"./src/controllers/getFiles.ts\");\nexports.fileRouter = express_1.Router();\nexports.fileRouter.get('/', getFiles_1.getFiles);\n\n\n//# sourceURL=webpack:///./src/routes/fileRouter.ts?");

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