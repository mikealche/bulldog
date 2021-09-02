"use strict";
// Taken from: https://github.com/kogosoftwarellc/open-api/blob/master/packages/fs-routes/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
var glob = require("glob");
var path = require("path");
var memo = {};
function compare(a, b) {
    var result;
    var ar;
    var br;
    ar = {
        dirname: path.dirname(a).replace(/^\./g, ""),
        basename: path.basename(a).replace(/\:/g, "~"),
    };
    br = {
        dirname: path.dirname(b).replace(/^\./g, ""),
        basename: path.basename(b).replace(/\:/g, "~"),
    };
    if (ar.dirname === br.dirname) {
        result = -1;
        if (ar.basename > br.basename) {
            result = 1;
        }
    }
    else {
        result = 1;
        if (ar.dirname < br.dirname) {
            result = -1;
        }
    }
    return result;
}
function fsRoutes(dir, options) {
    if (options === void 0) { options = {}; }
    dir = path.resolve(process.cwd(), dir);
    options.glob = options.glob || "**/*.ts";
    options.indexFileRegExp = options.indexFileRegExp || /(?:index)?\.ts$/;
    var cacheKey = dir + options.glob;
    //@ts-ignore
    if (!memo[cacheKey]) {
        //@ts-ignore
        memo[cacheKey] = glob
            .sync(options.glob, { cwd: dir })
            .sort(compare)
            //@ts-ignore
            .map(function (file) { return ({
            path: path.resolve(dir, file),
            route: "/" + file.replace(options.indexFileRegExp, ""),
        }); });
    }
    //@ts-ignore
    return memo[cacheKey];
}
exports.default = fsRoutes;
