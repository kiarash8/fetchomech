/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

var SetPathVariables = function (url, variables) {
    Object.keys(variables).forEach(function (key) {
        url = url.replace(new RegExp(":" + key + "(/|$)", 'g'), variables[key].toString().trim() + "$1");
    });
    return url;
};
var SetQueryParams = function (prams) {
    return Object.keys(prams)
        .map(function (key) { return key + "=" + prams[key].toString().trim(); })
        .join('&');
};

var Request = function (method, url, // "/route/:pathId/../:pathId"
headers, pathVariables, queryParams, body) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        // setting the path variables
        if (pathVariables)
            url = SetPathVariables(url, pathVariables);
        // setting the query params
        if (Object.keys(queryParams).length > 0)
            url = url + "?" + SetQueryParams(queryParams);
        return [2 /*return*/, new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.withCredentials = true;
                xhr.open(method, url, true);
                //set request headers
                Object.keys(headers).forEach(function (key) {
                    xhr.setRequestHeader(key, headers[key]);
                });
                xhr.onload = function () {
                    var response = JSON.parse(this.responseText);
                    resolve({
                        status: true,
                        code: this.status,
                        response: response
                    });
                };
                xhr.onerror = function () {
                    reject({
                        status: false,
                        code: this.status
                    });
                };
                xhr.send(body);
            })];
    });
}); };
var Get = function (params) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, Request("GET" /* Get */, params.url, params.headers ? params.headers : {}, params.pathVariables ? params.pathVariables : {}, params.queryParams ? params.queryParams : {}, params.body ? params.body : null)];
    });
}); };
var Post = function (params) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, Request("POST" /* Post */, params.url, params.headers ? params.headers : {}, params.pathVariables ? params.pathVariables : {}, params.queryParams ? params.queryParams : {}, params.body ? params.body : null)];
    });
}); };
var Put = function (params) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, Request("PUT" /* Put */, params.url, params.headers ? params.headers : {}, params.pathVariables ? params.pathVariables : {}, params.queryParams ? params.queryParams : {}, params.body ? params.body : null)];
    });
}); };
var Patch = function (params) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, Request("PATCH" /* Patch */, params.url, params.headers ? params.headers : {}, params.pathVariables ? params.pathVariables : {}, params.queryParams ? params.queryParams : {}, params.body ? params.body : null)];
    });
}); };
var Delete = function (params) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, Request("DELETE" /* Delete */, params.url, params.headers ? params.headers : {}, params.pathVariables ? params.pathVariables : {}, params.queryParams ? params.queryParams : {}, params.body ? params.body : null)];
    });
}); };
var Fetchomech = {
    Get: Get,
    Post: Post,
    Put: Put,
    Patch: Patch,
    Delete: Delete
};

export default Fetchomech;
//# sourceMappingURL=index.es.js.map
