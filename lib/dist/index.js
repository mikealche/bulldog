#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var express = require("express");
var app = express();
var port = 3000;
app.get("/", function (req, res) {
    res.send("Hello Worsld!");
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
var routesPath = (0, path_1.join)(process.cwd(), "routes");
var files = (0, fs_1.readdirSync)(routesPath);
console.log({ routesPath: routesPath, files: files });
for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
    var file = files_1[_i];
    var filePath = (0, path_1.join)(process.cwd(), "routes", file);
    console.log("receiving", "/" + file, require(filePath));
    app.get("/" + file, require(filePath));
}
