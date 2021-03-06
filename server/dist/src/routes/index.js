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
// File containing the root route
var express = require("express");
var path = require("path");
var shortenURL_1 = require("../services/shortenURL");
// Use the express router function to create a new route
var ROUTER = express.Router();
/*
  GET route for fetching the index.html home page
  This route does not take any arguments
  It returns the index.html page
*/
ROUTER.get('/', function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            res.status(200).sendFile(path.join(__dirname, '../../client/build'));
        }
        catch (err) {
            // If there is an error then pass the error to the next function
            return [2 /*return*/, next(err)];
        }
        return [2 /*return*/];
    });
}); });
/*
  GET route for fetching the original URL
  This route takes the urlKey as a parameter
  It redirect the requester to the original URL and no URL found then it sends a 404
*/
ROUTER.get('/:url', function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
    var result, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                result = void 0;
                if (!(process.argv[2] === 'inMemory')) return [3 /*break*/, 1];
                result = shortenURL_1.default.LoadURLFromMemory(req.params.url);
                return [3 /*break*/, 3];
            case 1: return [4 /*yield*/, shortenURL_1.default.LoadURLFromDB(req.params.url)];
            case 2:
                result = _a.sent();
                _a.label = 3;
            case 3:
                if (result.status === 0) {
                    res.status(404).send(result.message);
                }
                else {
                    res.status(302).redirect(result.url);
                }
                return [3 /*break*/, 5];
            case 4:
                err_1 = _a.sent();
                // If there is an error then pass the error to the next function
                return [2 /*return*/, next(err_1)];
            case 5: return [2 /*return*/];
        }
    });
}); });
// Export router as the default object
exports.default = ROUTER;
//# sourceMappingURL=index.js.map