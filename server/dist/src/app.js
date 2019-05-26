"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var createError = require("http-errors");
var rateLimit = require("express-rate-limit");
var config_1 = require("../config");
var routes_1 = require("./routes");
var newURL_1 = require("./routes/newURL");
var shortenURL_1 = require("./services/shortenURL");
// Port on which incoming requests will arrive
var PORT = process.env.PORT || 5000;
// Create the application
var APP = express();
// Load the configs
var CONFIG = config_1.default['production'];
// Set sitename
APP.locals.title = CONFIG.sitename;
APP.use(logger('dev'));
// support json encoded bodies
APP.use(express.json());
// support urlencode
APP.use(express.urlencoded({ extended: false }));
APP.use(cookieParser());
var LIMITER = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 100 // limit each IP to 100 requests per windowMs
});
APP.use(LIMITER);
// Set the public static folder containing the front end template and logic
APP.use(express.static(path.join(__dirname, '../public')));
if (process.argv[2] !== 'inMemory') {
    shortenURL_1.default.InitializeDB();
}
// If dev env then set pretty to true
if (APP.get('env') === 'development') {
    APP.locals.pretty = true;
}
// Add the title to the response
APP.use(function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.locals.status = APP.locals.title;
        // Call the next function
        return [2 /*return*/, next()];
    });
}); });
APP.use('/', routes_1.default); // Connect the base route to the route handling function stored inside /routes/index
APP.use('/api/shortenurl', newURL_1.default); // Connect the /api/currencies route to the route handling function stored /routes/currencies
// Middleware for handleing error
APP.use(function (req, res, next) {
    return next(createError(404, 'File not found'));
});
// Middleware for handleing error
APP.use(function (err, req, res, next) {
    res.locals.message = err.message;
    var status = err.status || 500;
    res.locals.status = status;
    res.locals.error = req.APP.get('env') === 'development' ? err : {};
    res.status(status);
    // respond with html page
    if (req.accepts('html')) {
        // return res.status(404).redirect('back');
        return res.status(404);
    }
    // respond with json
    if (req.accepts('json')) {
        return res.send({ error: 'Not found' });
    }
    // default to plain-text. send()
    return res.type('txt').send('Not found');
});
// Run the web APP and store the returned variable for later export
var server = APP.listen(PORT, function () { return console.log("Listening on " + PORT); });
// Export the server for unit testing
exports.default = server;
//# sourceMappingURL=app.js.map