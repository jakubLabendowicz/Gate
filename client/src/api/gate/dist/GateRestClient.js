"use client";
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var RestClient_1 = require("../RestClient");
var GateRestClient = /** @class */ (function (_super) {
    __extends(GateRestClient, _super);
    function GateRestClient(headers) {
        var _this = this;
        var BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api/v1';
        var token = null;
        try {
            token = localStorage.getItem('access_token');
        }
        catch (e) {
            console.log(e);
        }
        var HEADERS = __assign({ 'Content-Type': 'application/json', 
            // 'User-Agent': window.navigator.userAgent
            'Authorization': 'Bearer' + ' ' + token }, headers);
        _this = _super.call(this, BASE_URL, HEADERS) || this;
        return _this;
    }
    return GateRestClient;
}(RestClient_1["default"]));
exports["default"] = GateRestClient;
