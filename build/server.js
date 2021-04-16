"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
exports.__esModule = true;
var app_1 = __importDefault(require("./app"));
var port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 5000;
app_1["default"].listen(port, function () {
    console.log("Server running on port " + port);
});
console.log('Hey!');
