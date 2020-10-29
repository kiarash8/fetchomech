import { readFile, readFileSync, writeFileSync, unlinkSync, existsSync } from 'fs';
import { request as request$1 } from 'http';
import { request } from 'https';
import { parse } from 'url';
import { tmpdir } from 'os';
import { sep } from 'path';
import { spawn } from 'child_process';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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

/**
 * @license xmlhttprequest-ts
 * MIT license
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * defines the node implementaton of the XMLHttpRequest object specs
 *
 * see: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
 */
var XMLHttpRequest = /** @class */ (function () {
    function XMLHttpRequest() {
        /**
         * constant representing the state an XMLHttpRequest is in after being constructed
         */
        this.UNSENT = XMLHttpRequest.UNSENT;
        /**
         * constant representing the state an XMLHttpRequest is in after 'open' was called
         */
        this.OPENED = XMLHttpRequest.OPENED;
        /**
         * constant representing the state an XMLHttpRequest is in when all response headers have been received
         */
        this.HEADERS_RECEIVED = XMLHttpRequest.HEADERS_RECEIVED;
        /**
         * constant representing the state an XMLHttpRequest is in when either the data transfer has been completed or something went wrong
         */
        this.LOADING = XMLHttpRequest.LOADING;
        /**
         * constant representing the state an XMLHttpRequest is in when the response entity body is being received
         */
        this.DONE = XMLHttpRequest.DONE;
        /**
         * option to disable the builtin header blacklist
         *
         * IMPORTANT: this is not part of the XHR specs
         */
        this.disableHeaderCheck = false;
        /**
         * stores the ready state of the request (see UNSENT, OPENED, HEADERS_RECEIVED, LOADING, DONE)
         */
        this.readyState = XMLHttpRequest.UNSENT;
        /**
         * the text received from a server following a request being sent
         */
        this.responseText = '';
        /**
         * usually contains a document instance of the parsed request result but since the dom isn't available in node, this is always null
         */
        this.responseXML = null;
        /**
         * the numerical status code of the response
         */
        this.status = 0;
        /**
         * the text received from a server following a request being sent
         */
        this.statusText = '';
        /**
         * timeout in milliseconds after a request should time out
         */
        this.timeout = 0;
        /**
         * indicates whether or not cross-site Access-Control requests should be made using credentials like authorization headers
         */
        this.withCredentials = false;
        /**
         * defines the default headers sent by our requests
         */
        this.defaultHeaders = {
            'User-Agent': 'ts-XMLHttpRequest',
            'Accept': '*/*'
        };
        /**
         * error flag, used when errors occur or abort is called
         */
        this.errorFlag = false;
        /**
         * list of headers that are not setable by the user according to the specs
         *
         * IMPORTNAT: this can optionally be disabled by setting disableHeaderCheck to true
         */
        this.forbiddenRequestHeaders = [
            'accept-charset',
            'accept-encoding',
            'access-control-request-headers',
            'access-control-request-method',
            'connection',
            'content-length',
            'content-transfer-encoding',
            'cookie',
            'cookie2',
            'date',
            'expect',
            'host',
            'keep-alive',
            'origin',
            'referer',
            'te',
            'trailer',
            'transfer-encoding',
            'upgrade',
            'via'
        ];
        /**
         * list of request methods that are not setable by the user according to the specs
         */
        this.forbiddenRequestMethods = [
            'TRACE',
            'TRACK',
            'CONNECT'
        ];
        /**
         * stores the headers that are used for this request
         */
        this.headers = {};
        /**
         * stores the headers that are used for this request with the name being lower-cased
         */
        this.headersLowerCase = {};
        /**
         * stores the event listeners that have been set via the addEventListener method
         */
        this.listeners = {};
        /**
         * flag indicating if a request was sent already
         */
        this.sendFlag = false;
    }
    /**
     * Open the connection. Currently supports local server requests.
     *
     * @param {?} method Connection method (eg GET, POST)
     * @param {?} url URL for the connection.
     * @param {?=} async Asynchronous connection (optional - default is true)
     * @param {?=} user Username for basic authentication (optional)
     * @param {?=} password Password for basic authentication (optional)
     * @return {?}
     */
    XMLHttpRequest.prototype.open = /**
     * Open the connection. Currently supports local server requests.
     *
     * @param {?} method Connection method (eg GET, POST)
     * @param {?} url URL for the connection.
     * @param {?=} async Asynchronous connection (optional - default is true)
     * @param {?=} user Username for basic authentication (optional)
     * @param {?=} password Password for basic authentication (optional)
     * @return {?}
     */
    function (method, url, async, user, password) {
        if (async === void 0) { async = true; }
        this.abort();
        this.errorFlag = false;
        // Check for valid request method
        if (!this.isAllowedHttpMethod(method)) {
            throw new Error('SecurityError: Request method not allowed');
        }
        this.settings = {
            'method': method,
            'url': url,
            'async': (typeof async !== 'boolean' ? true : async),
            'user': user,
            'password': password
        };
        this.setState(this.OPENED);
    };
    /**
     * disables or enables the check of allowed headers in the request
     *
     * IMPORTANT: this is not part of the W3C spec
     *
     * @param {?} state Enable or disable header checking.
     * @return {?}
     */
    XMLHttpRequest.prototype.setDisableHeaderCheck = /**
     * disables or enables the check of allowed headers in the request
     *
     * IMPORTANT: this is not part of the W3C spec
     *
     * @param {?} state Enable or disable header checking.
     * @return {?}
     */
    function (state) {
        this.disableHeaderCheck = state;
    };
    /**
     * sets a header for the request or appends the value if one is already set
     *
     * @param {?} header header name
     * @param {?} value header value
     * @return {?}
     */
    XMLHttpRequest.prototype.setRequestHeader = /**
     * sets a header for the request or appends the value if one is already set
     *
     * @param {?} header header name
     * @param {?} value header value
     * @return {?}
     */
    function (header, value) {
        if (this.readyState !== this.OPENED) {
            throw new Error('INVALID_STATE_ERR: setRequestHeader can only be called when state is OPEN');
        }
        if (!this.isAllowedHttpHeader(header)) {
            console.warn('Refused to set unsafe header \"' + header + '\"');
            return;
        }
        if (this.sendFlag) {
            throw new Error('INVALID_STATE_ERR: send flag is true');
        }
        header = this.headersLowerCase[header.toLowerCase()] || header;
        this.headersLowerCase[header.toLowerCase()] = header;
        this.headers[header] = this.headers[header] ? this.headers[header] + ', ' + value : value;
    };
    /**
     * returns all the response headers, separated by CRLF, as a string, or null if no response has been received
     *
     * @return {?} a string with all response headers separated by CR+LF, or null if no response has been received
     */
    XMLHttpRequest.prototype.getAllResponseHeaders = /**
     * returns all the response headers, separated by CRLF, as a string, or null if no response has been received
     *
     * @return {?} a string with all response headers separated by CR+LF, or null if no response has been received
     */
    function () {
        if (this.readyState < this.HEADERS_RECEIVED || this.errorFlag) {
            return null;
        }
        var /** @type {?} */ result = '';
        if (this.response) {
            for (var /** @type {?} */ i in this.response.headers) {
                // Cookie headers are excluded
                if (i !== 'set-cookie' && i !== 'set-cookie2') {
                    var /** @type {?} */ headerValue = this.response.headers[i];
                    if (typeof headerValue === 'string') {
                        result += i + ': ' + headerValue + '\r\n';
                    }
                    else if (Array.isArray(headerValue)) {
                        result += i + ': ' + headerValue.join(', ') + '\r\n';
                    }
                    else {
                        result += i + ':\r\n';
                    }
                }
            }
        }
        return result.substr(0, result.length - 2);
    };
    /**
     * gets a header from the server response.
     *
     * @param {?} header
     * @return {?} text of the header or null if it doesn't exist.
     */
    XMLHttpRequest.prototype.getResponseHeader = /**
     * gets a header from the server response.
     *
     * @param {?} header
     * @return {?} text of the header or null if it doesn't exist.
     */
    function (header) {
        if (typeof header === 'string' &&
            this.readyState > this.OPENED &&
            this.response &&
            this.response.headers &&
            this.response.headers[header.toLowerCase()] &&
            !this.errorFlag) {
            var /** @type {?} */ responseHeader = this.response.headers[header.toLowerCase()];
            if (typeof responseHeader === 'string') {
                return responseHeader;
            }
            if (Array.isArray(responseHeader)) {
                return responseHeader.join(', ');
            }
        }
        return null;
    };
    /**
     * gets a request header that was set in this instance
     *
     * IMPORTANT: this is not part of the W3C specs
     *
     * @param {?} name
     * @return {?} returns the request header or empty string if not set
     */
    XMLHttpRequest.prototype.getRequestHeader = /**
     * gets a request header that was set in this instance
     *
     * IMPORTANT: this is not part of the W3C specs
     *
     * @param {?} name
     * @return {?} returns the request header or empty string if not set
     */
    function (name) {
        if (typeof name === 'string' && this.headersLowerCase[name.toLowerCase()]) {
            return this.headers[this.headersLowerCase[name.toLowerCase()]];
        }
        return undefined;
    };
    /**
     * sends the request to the server.
     *
     * @param {?=} data
     * @return {?}
     */
    XMLHttpRequest.prototype.send = /**
     * sends the request to the server.
     *
     * @param {?=} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        var /** @type {?} */ self = this;
        if (this.settings === undefined) {
            throw new Error('INVALID_STATE_ERR: connection must be opened before send() is called');
        }
        if (this.readyState !== this.OPENED) {
            throw new Error('INVALID_STATE_ERR: connection must be opened before send() is called');
        }
        if (this.sendFlag) {
            throw new Error('INVALID_STATE_ERR: send has already been called');
        }
        var /** @type {?} */ ssl = false, /** @type {?} */ local = false;
        var /** @type {?} */ url = parse(this.settings.url);
        var /** @type {?} */ host;
        // Determine the server
        switch (url.protocol) {
            case 'https:':
                ssl = true;
            // SSL & non-SSL both need host, no break here.
            case 'http:':
                host = url.hostname;
                break;
            case 'file:':
                local = true;
                break;
            case undefined:
            case null:
            case '':
                host = 'localhost';
                break;
            default:
                throw new Error('Protocol not supported.');
        }
        // Load files off the local filesystem (file://)
        if (local) {
            if (this.settings.method !== 'GET') {
                throw new Error('XMLHttpRequest: Only GET method is supported');
            }
            if (this.settings.async) {
                readFile(unescape(url.pathname || '/'), 'utf8', function (error, fileData) {
                    if (error) {
                        self.handleError(error);
                    }
                    else {
                        self.status = 200;
                        self.responseText = fileData;
                        self.setState(self.DONE);
                    }
                });
            }
            else {
                try {
                    this.responseText = readFileSync(unescape(url.pathname || '/'), 'utf8');
                    this.status = 200;
                    this.setState(self.DONE);
                }
                catch (/** @type {?} */ e) {
                    this.handleError(e);
                }
            }
            return;
        }
        // Default to port 80. If accessing localhost on another port be sure
        // to use http://localhost:port/path
        var /** @type {?} */ port = url.port || (ssl ? 443 : 80);
        // Add query string if one is used
        var /** @type {?} */ uri = url.pathname + (url.search ? url.search : '');
        // Set the defaults if they haven't been set
        for (var /** @type {?} */ name_1 in this.defaultHeaders) {
            if (!this.headersLowerCase[name_1.toLowerCase()]) {
                this.headers[name_1] = this.defaultHeaders[name_1];
            }
        }
        if (host) {
            // Set the Host header or the server may reject the request
            this.headers["Host"] = host;
        }
        // IPv6 addresses must be escaped with brackets
        if (url.host && url.host[0] === '[') {
            this.headers["Host"] = '[' + this.headers["Host"] + ']';
        }
        if (!((ssl && port === 443) || port === 80)) {
            this.headers["Host"] += ':' + url.port;
        }
        // Set Basic Auth if necessary
        if (this.settings.user) {
            if (typeof this.settings.password === 'undefined') {
                this.settings.password = '';
            }
            var /** @type {?} */ authBuf = Buffer.from(this.settings.user + ':' + this.settings.password);
            this.headers["Authorization"] = 'Basic ' + authBuf.toString('base64');
        }
        // Set content length header
        if (this.settings.method === 'GET' || this.settings.method === 'HEAD') {
            data = null;
        }
        else if (data) {
            this.headers['Content-Length'] = '' + (Buffer.isBuffer(data) ? data.length : Buffer.byteLength(data));
            if (!this.getRequestHeader('Content-Type')) {
                this.headers['Content-Type'] = 'text/plain;charset=UTF-8';
            }
        }
        else if (this.settings.method === 'POST') {
            // For a post with no data set Content-Length: 0.
            // This is required by buggy servers that don't meet the specs.
            this.headers['Content-Length'] = '0';
        }
        var /** @type {?} */ options = {
            host: host,
            port: port,
            path: uri,
            method: this.settings.method,
            headers: this.headers,
            agent: false,
            withCredentials: this.withCredentials
        };
        // Reset error flag
        this.errorFlag = false;
        // Handle async requests
        if (this.settings.async) {
            // handle timeouts correctly
            if (this.timeout >= 1) {
                this.timeoutTimer = setTimeout(function () {
                    if (_this.readyState !== _this.DONE) {
                        self.handleTimeout(new Error('request timed out after ' + _this.timeout + 'ms'));
                    }
                }, this.timeout);
            }
            // Use the proper protocol
            var /** @type {?} */ doRequest_1 = ssl ? request : request$1;
            // Request is being sent, set send flag
            this.sendFlag = true;
            // As per spec, this is called here for historical reasons.
            self.dispatchEvent('readystatechange');
            // Error handler for the request
            var /** @type {?} */ errorHandler_1 = function (error) {
                self.handleError(error);
            };
            var /** @type {?} */ redirectCount_1 = 0;
            // Handler for the response
            var /** @type {?} */ responseHandler_1 = function (resp) {
                // Set response let to the response we got back
                // This is so it remains accessable outside this scope
                self.response = resp;
                if (self.settings === undefined) {
                    throw new Error('INVALID_STATE_ERR: connection must be opened before send() is called');
                }
                // Check for redirect
                if (self.response.headers.location && (self.response.statusCode === 301 ||
                    self.response.statusCode === 302 ||
                    self.response.statusCode === 303 ||
                    self.response.statusCode === 307)) {
                    // increase redirect count
                    // increase redirect count
                    redirectCount_1++;
                    // prevent looped redirects
                    if (redirectCount_1 >= 10) {
                        throw new Error('XMLHttpRequest: Request failed - too many redirects');
                    }
                    // Change URL to the redirect location
                    self.settings.url = self.response.headers.location;
                    var /** @type {?} */ parsedUrl = parse(self.settings.url);
                    // Set host let in case it's used later
                    host = parsedUrl.hostname;
                    // Set host parameter for header or redirect won't work
                    if (host) {
                        self.headers["Host"] = host;
                    }
                    // Options for the new request
                    var /** @type {?} */ newOptions = {
                        hostname: parsedUrl.hostname,
                        port: parsedUrl.port,
                        path: parsedUrl.path,
                        method: self.response.statusCode === 303 ? 'GET' : self.settings.method,
                        headers: self.headers,
                        withCredentials: self.withCredentials
                    };
                    // Update ssl and doRequest to be appropriate
                    // For (potentially) new protocol
                    ssl = (url.protocol === 'https:' ? true : false);
                    doRequest_1 = ssl ? request : request$1;
                    // Issue the new request
                    self.request = doRequest_1(newOptions, responseHandler_1).on('error', errorHandler_1);
                    self.request.end();
                    // @TODO Check if an XHR event needs to be fired here
                    return;
                }
                self.response.setEncoding('utf8');
                self.setState(self.HEADERS_RECEIVED);
                self.status = self.response.statusCode || 0;
                self.response.on('data', function (chunk) {
                    // Make sure there's some data
                    if (chunk) {
                        self.responseText += chunk;
                    }
                    // Don't emit state changes if the connection has been aborted.
                    if (self.sendFlag) {
                        self.setState(self.LOADING);
                    }
                });
                self.response.on('end', function () {
                    if (self.sendFlag) {
                        // Discard the end event if the connection has been aborted
                        self.setState(self.DONE);
                        self.sendFlag = false;
                    }
                });
                self.response.on('error', function (error) {
                    self.handleError(error);
                });
            };
            // Create the request
            self.request = doRequest_1(options, responseHandler_1).on('error', errorHandler_1);
            // Node 0.4 and later won't accept empty data. Make sure it's needed.
            if (data) {
                self.request.write(data);
            }
            self.request.end();
            self.dispatchEvent('loadstart');
        }
        else {
            // Synchronous
            var /** @type {?} */ startTime = new Date().getTime();
            // Create a temporary file for communication with the other Node process
            var /** @type {?} */ contentFile_1 = tmpdir() + sep + 'ts-xmlhttprequest-content-' + process.pid;
            var /** @type {?} */ syncFile_1 = tmpdir() + sep + 'ts-xmlhttprequest-sync-' + process.pid;
            writeFileSync(syncFile_1, '', 'utf8');
            // The async request the other Node process executes
            var /** @type {?} */ execString = 'let http = require(\'http\'), https = require(\'https\'), fs = require(\'fs\');'
                + 'let doRequest = http' + (ssl ? 's' : '') + '.request;'
                + 'let options = ' + JSON.stringify(options) + ';'
                + 'let responseText = \'\';'
                + 'let req = doRequest(options, function(response) {'
                + 'response.setEncoding(\'utf8\');'
                + 'response.on(\'data\', function(chunk) {'
                + '    responseText += chunk;'
                + '});'
                + 'response.on(\'end\', function() {'
                + 'fs.writeFileSync('
                + '    \'' + contentFile_1 + '\','
                + '    JSON.stringify({'
                + '        err: null,'
                + '        data: {statusCode: response.statusCode, headers: response.headers, text: responseText}'
                + '    }),'
                + '    \'utf8\''
                + ');'
                + 'fs.unlinkSync(\'' + syncFile_1 + '\');'
                + '});'
                + 'response.on(\'error\', function(error) {'
                + 'fs.writeFileSync(\'' + contentFile_1 + '\', JSON.stringify({err: error}), \'utf8\');'
                + 'fs.unlinkSync(\'' + syncFile_1 + '\');'
                + '});'
                + '}).on(\'error\', function(error) {'
                + 'fs.writeFileSync(\'' + contentFile_1 + '\', JSON.stringify({err: error}), \'utf8\');'
                + 'fs.unlinkSync(\'' + syncFile_1 + '\');'
                + '});'
                + (data ? 'req.write(\'' + JSON.stringify(data).slice(1, -1).replace(/'/g, '\\\'') + '\');' : '')
                + 'req.end();';
            self.dispatchEvent('loadstart');
            this.setState(self.LOADING);
            // Start the other Node Process, executing this string
            var /** @type {?} */ syncProc = spawn(process.argv[0], ['-e', execString]);
            // since this method will run syncronized - this callback always get's called after everything is done
            syncProc.on('exit', function (code, signal) {
                // clean up the temp files
                try {
                    unlinkSync(syncFile_1);
                }
                catch (/** @type {?} */ e) { }
                try {
                    unlinkSync(contentFile_1);
                }
                catch (/** @type {?} */ e) { }
            });
            while (existsSync(syncFile_1)) {
                if (this.timeout !== 0 && new Date().getTime() >= startTime + this.timeout) {
                    // kill the process when we face an error
                    syncProc.stdin.end();
                    syncProc.kill();
                    // handle the timeout error
                    return self.handleTimeout(new Error('request timed out after ' + this.timeout + 'ms'));
                }
            }
            // Kill the child process once the file has data
            syncProc.stdin.end();
            syncProc.kill();
            var /** @type {?} */ resp = JSON.parse(readFileSync(contentFile_1, 'utf8'));
            // Remove the temporary file
            unlinkSync(contentFile_1);
            if (resp.err) {
                self.handleError(resp.err);
            }
            else {
                self.response = resp.data;
                self.status = resp.data.statusCode;
                self.responseText = resp.data.text;
                self.setState(self.DONE);
            }
        }
    };
    /**
     * aborts a request
     * @return {?}
     */
    XMLHttpRequest.prototype.abort = /**
     * aborts a request
     * @return {?}
     */
    function () {
        if (this.request) {
            this.request.abort();
            this.request = undefined;
        }
        this.headers = {};
        this.status = 0;
        this.responseText = '';
        this.responseXML = null;
        this.errorFlag = true;
        if (this.readyState !== this.UNSENT &&
            (this.readyState !== this.OPENED || this.sendFlag) &&
            this.readyState !== this.DONE) {
            this.sendFlag = false;
            this.setState(this.DONE);
        }
        this.readyState = this.UNSENT;
        this.dispatchEvent('abort');
    };
    /**
     * adds an event listener to the XMLHttpRequest - this is the preferred method of binding to events
     * @param {?} event
     * @param {?} callback
     * @return {?}
     */
    XMLHttpRequest.prototype.addEventListener = /**
     * adds an event listener to the XMLHttpRequest - this is the preferred method of binding to events
     * @param {?} event
     * @param {?} callback
     * @return {?}
     */
    function (event, callback) {
        if (!(event in this.listeners)) {
            this.listeners[event] = [];
        }
        // Currently allows duplicate callbacks. Should it?
        this.listeners[event].push(callback);
    };
    /**
     * removes an event callback that has been added with the addEventListener method.
     * @param {?} event
     * @param {?} callback
     * @return {?}
     */
    XMLHttpRequest.prototype.removeEventListener = /**
     * removes an event callback that has been added with the addEventListener method.
     * @param {?} event
     * @param {?} callback
     * @return {?}
     */
    function (event, callback) {
        if (event in this.listeners) {
            // Filter will return a new array with the callback removed
            this.listeners[event] = this.listeners[event].filter(function (ev) {
                return ev !== callback;
            });
        }
    };
    /**
     * dispatches events, including the "on" methods and events attached using addEventListener
     * @param {?} event
     * @param {?=} parameter
     * @return {?}
     */
    XMLHttpRequest.prototype.dispatchEvent = /**
     * dispatches events, including the "on" methods and events attached using addEventListener
     * @param {?} event
     * @param {?=} parameter
     * @return {?}
     */
    function (event, parameter) {
        var /** @type {?} */ eventHandlerMethodName = 'on' + event;
        if (typeof (/** @type {?} */ (this))[eventHandlerMethodName] === 'function') {
            (/** @type {?} */ (this))[eventHandlerMethodName](parameter);
        }
        if (event in this.listeners) {
            for (var /** @type {?} */ i = 0, /** @type {?} */ len = this.listeners[event].length; i < len; i++) {
                this.listeners[event][i].call(this, parameter);
            }
        }
    };
    /**
     * changes readyState and calls onreadystatechange
     * @param {?} state
     * @return {?}
     */
    XMLHttpRequest.prototype.setState = /**
     * changes readyState and calls onreadystatechange
     * @param {?} state
     * @return {?}
     */
    function (state) {
        if (state === this.LOADING || this.readyState !== state) {
            this.readyState = state;
            if ((this.settings && this.settings.async) || this.readyState < this.OPENED || this.readyState === this.DONE) {
                this.dispatchEvent('readystatechange');
            }
            if (this.readyState === this.DONE) {
                if (this.timeoutTimer) {
                    clearTimeout(this.timeoutTimer);
                    this.timeoutTimer = undefined;
                }
                if (!this.errorFlag) {
                    this.dispatchEvent('load');
                }
                this.dispatchEvent('loadend');
            }
        }
    };
    /**
     * called when a timeout is encountered
     * @param {?} error
     * @return {?}
     */
    XMLHttpRequest.prototype.handleTimeout = /**
     * called when a timeout is encountered
     * @param {?} error
     * @return {?}
     */
    function (error) {
        if (this.request) {
            this.request.abort();
            this.request = undefined;
        }
        this.status = 0;
        this.statusText = error.toString();
        this.responseText = error.stack || '';
        this.errorFlag = true;
        this.dispatchEvent('timeout', error);
        this.setState(this.DONE);
    };
    /**
     * called when an error is encountered
     * @param {?} error
     * @return {?}
     */
    XMLHttpRequest.prototype.handleError = /**
     * called when an error is encountered
     * @param {?} error
     * @return {?}
     */
    function (error) {
        this.status = 0;
        this.statusText = error.toString();
        this.responseText = error.stack || '';
        this.errorFlag = true;
        this.dispatchEvent('error', error);
        this.setState(this.DONE);
    };
    /**
     * checks if the specified header is allowed
     * @param {?} header
     * @return {?}
     */
    XMLHttpRequest.prototype.isAllowedHttpHeader = /**
     * checks if the specified header is allowed
     * @param {?} header
     * @return {?}
     */
    function (header) {
        return (this.disableHeaderCheck || (header && this.forbiddenRequestHeaders.indexOf(header.toLowerCase()) === -1)) === true;
    };
    /**
     * checks if the specified request method is allowed
     * @param {?} method
     * @return {?}
     */
    XMLHttpRequest.prototype.isAllowedHttpMethod = /**
     * checks if the specified request method is allowed
     * @param {?} method
     * @return {?}
     */
    function (method) {
        return (method && this.forbiddenRequestMethods.indexOf(method) === -1) === true;
    };
    /**
     * constant representing the state an XMLHttpRequest is in after being constructed
     */
    XMLHttpRequest.UNSENT = 0;
    /**
     * constant representing the state an XMLHttpRequest is in after 'open' was called
     */
    XMLHttpRequest.OPENED = 1;
    /**
     * constant representing the state an XMLHttpRequest is in when all response headers have been received
     */
    XMLHttpRequest.HEADERS_RECEIVED = 2;
    /**
     * constant representing the state an XMLHttpRequest is in when either the data transfer has been completed or something went wrong
     */
    XMLHttpRequest.LOADING = 3;
    /**
     * constant representing the state an XMLHttpRequest is in when the response entity body is being received
     */
    XMLHttpRequest.DONE = 4;
    return XMLHttpRequest;
}());

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
headers, pathVariables, queryParams, body, timeout) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        // setting the path variables
        url = pathVariables ? SetPathVariables(url, pathVariables) : url;
        // setting the query params
        if (queryParams)
            url = url + "?" + SetQueryParams(queryParams);
        return [2 /*return*/, new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.open(method, url);
                //set request headers
                headers.forEach(function (header) {
                    var key = Object.keys(header)[0];
                    xhr.setRequestHeader(key, header[key]);
                });
                //set request timeout
                if (timeout != 0)
                    xhr.timeout = timeout;
                xhr.onload = function () {
                    var response = JSON.parse(this.responseText);
                    resolve({
                        status: true,
                        response: response
                    });
                };
                xhr.onerror = function () {
                    reject({
                        status: false,
                        statusCode: this.status
                    });
                };
                xhr.send(body);
            })];
    });
}); };
var Get = function (params) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, Request("GET" /* Get */, params.url, params.headers ? params.headers : [], params.pathVariables ? params.pathVariables : {}, params.queryParams ? params.queryParams : {}, params.body ? params.body : null, params.timeout ? params.timeout : 0)];
    });
}); };
var Post = function (params) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, Request("POST" /* Post */, params.url, params.headers ? params.headers : [], params.pathVariables ? params.pathVariables : {}, params.queryParams ? params.queryParams : {}, params.body ? params.body : null, params.timeout ? params.timeout : 0)];
    });
}); };
var Put = function (params) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, Request("PUT" /* Put */, params.url, params.headers ? params.headers : [], params.pathVariables ? params.pathVariables : {}, params.queryParams ? params.queryParams : {}, params.body ? params.body : null, params.timeout ? params.timeout : 0)];
    });
}); };
var Patch = function (params) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, Request("PATCH" /* Patch */, params.url, params.headers ? params.headers : [], params.pathVariables ? params.pathVariables : {}, params.queryParams ? params.queryParams : {}, params.body ? params.body : null, params.timeout ? params.timeout : 0)];
    });
}); };
var Delete = function (params) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, Request("DELETE" /* Delete */, params.url, params.headers ? params.headers : [], params.pathVariables ? params.pathVariables : {}, params.queryParams ? params.queryParams : {}, params.body ? params.body : null, params.timeout ? params.timeout : 0)];
    });
}); };

export { Delete, Get, Patch, Post, Put };
//# sourceMappingURL=index.es.js.map