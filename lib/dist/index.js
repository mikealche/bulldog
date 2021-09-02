#!/usr/bin/env ts-node-script
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipe = exports.Yup = void 0;
var express_1 = __importDefault(require("express"));
var Yup = __importStar(require("yup"));
exports.Yup = Yup;
var fileSystemRouting_1 = __importDefault(require("./fileSystemRouting"));
var pipe_1 = require("./pipe");
Object.defineProperty(exports, "pipe", { enumerable: true, get: function () { return __importDefault(pipe_1).default; } });
var app = (0, express_1.default)();
app.use(express_1.default.json());
(0, fileSystemRouting_1.default)(app);
var port = 3000;
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
