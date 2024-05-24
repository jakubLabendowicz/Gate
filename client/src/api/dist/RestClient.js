"use client";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
exports.__esModule = true;
var NotificationUtils_1 = require("@/utils/NotificationUtils");
var axios_1 = require("axios");
var RestClient = /** @class */ (function () {
    function RestClient(baseURL, headers) {
        this.client = axios_1["default"].create({
            baseURL: baseURL,
            headers: headers
        });
    }
    RestClient.prototype.get = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.client.get(url)
                            .then(function (response) {
                            resolve(response.data);
                        })["catch"](function (error) {
                            if (error.response.data.result) {
                                new NotificationUtils_1["default"](error.response.data.result.message, error.response.data.result.type).send();
                                reject(error.response.data.result);
                            }
                            else {
                                new NotificationUtils_1["default"](error.message, 'error').send();
                                reject(error);
                            }
                        });
                    })];
            });
        });
    };
    RestClient.prototype.post = function (url, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.client.post(url, { data: data })
                            .then(function (response) {
                            console.log(response);
                            new NotificationUtils_1["default"](response.data.result.message, response.data.result.type).send();
                            resolve(response.data);
                        })["catch"](function (error) {
                            console.log(error);
                            if (error.response.data.result) {
                                new NotificationUtils_1["default"](error.response.data.result.message, error.response.data.result.type).send();
                                reject(error.response.data.result);
                            }
                            else {
                                new NotificationUtils_1["default"](error.message, 'error').send();
                                reject(error);
                            }
                        });
                    })];
            });
        });
    };
    RestClient.prototype.put = function (url, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.client.put(url, data)
                            .then(function (response) {
                            new NotificationUtils_1["default"](response.data.result.message, response.data.result.type).send();
                            resolve(response.data);
                        })["catch"](function (error) {
                            if (error.response.data.result) {
                                new NotificationUtils_1["default"](error.response.data.result.message, error.response.data.result.type).send();
                                reject(error.response.data.result);
                            }
                            else {
                                new NotificationUtils_1["default"](error.message, 'error').send();
                                reject(error);
                            }
                        });
                    })];
            });
        });
    };
    RestClient.prototype["delete"] = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.client["delete"](url)
                            .then(function (response) {
                            resolve(response.data);
                        })["catch"](function (error) {
                            if (error.response.data.result) {
                                new NotificationUtils_1["default"](error.response.data.result.message, error.response.data.result.type).send();
                                reject(error.response.data.result);
                            }
                            else {
                                new NotificationUtils_1["default"](error.message, 'error').send();
                                reject(error);
                            }
                        });
                    })];
            });
        });
    };
    return RestClient;
}());
exports["default"] = RestClient;
