"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var app = express_1["default"]();
app.use(express_1["default"].static('public'));
app.get('/', function (req, res) {
    res.send('Server running :)');
});
exports["default"] = app;
