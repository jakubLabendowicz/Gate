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
var ClientAuthorizationApi_1 = require("@/api/gate/ClientAuthorizationApi");
var UserApi_1 = require("@/api/gate/UserApi");
var UserPasswordApi_1 = require("@/api/gate/UserPasswordApi");
var UserPasswordCodeApi_1 = require("@/api/gate/UserPasswordCodeApi");
var react_1 = require("react");
function useUser() {
    var _this = this;
    var _a = react_1.useState(''), nickname = _a[0], setNickname = _a[1];
    var _b = react_1.useState(''), firstName = _b[0], setFirstName = _b[1];
    var _c = react_1.useState(''), lastName = _c[0], setLastName = _c[1];
    var _d = react_1.useState(''), email = _d[0], setEmail = _d[1];
    var _e = react_1.useState(''), phone = _e[0], setPhone = _e[1];
    var _f = react_1.useState(''), gender = _f[0], setGender = _f[1];
    var _g = react_1.useState(''), birthdate = _g[0], setBirthdate = _g[1];
    var _h = react_1.useState(''), zoneInfo = _h[0], setZoneInfo = _h[1];
    var _j = react_1.useState(''), locale = _j[0], setLocale = _j[1];
    var _k = react_1.useState('F-'), passwordCode = _k[0], setPasswordCode = _k[1];
    var _l = react_1.useState(''), password = _l[0], setPassword = _l[1];
    var _m = react_1.useState(0), stage = _m[0], setStage = _m[1];
    var doCreateUser = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            UserApi_1.createUser({
                nickname: nickname,
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                gender: gender
            })
                .then(function (res) {
                setStage(stage + 1);
                return res;
            })["catch"](function (err) {
                return err;
            });
            return [2 /*return*/];
        });
    }); };
    var doCreateUserPasswordCode = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            UserPasswordCodeApi_1.createUserPasswordCode({
                email: email
            })
                .then(function (res) {
                setStage(stage + 1);
                return res;
            })["catch"](function (err) {
                return err;
            });
            return [2 /*return*/];
        });
    }); };
    var doCreateUserPassword = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            UserPasswordApi_1.createUserPassword({
                code: passwordCode,
                password: password
            })
                .then(function (res) {
                setStage(stage + 1);
                return res;
            })["catch"](function (err) {
                return err;
            });
            return [2 /*return*/];
        });
    }); };
    var doAuthorize = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            ClientAuthorizationApi_1.authorize({
                grantType: 'password',
                responseType: 'token',
                scopes: [
                    "FULL_ACCESS"
                ],
                clientId: 'cll6z5cqk0000vy5gay0owbgo',
                clientSecret: 'rgohp22r9sebplofdy19ea',
                email: email,
                password: password
            })
                .then(function (res) {
                setStage(stage + 1);
                console.log(res);
                localStorage.setItem('access_token', res.data.clientAccessToken.token);
                localStorage.setItem('refresh_token', res.data.clientRefreshToken.token);
                window.location.href = '/';
                return res;
            })["catch"](function (err) {
                return err;
            });
            return [2 /*return*/];
        });
    }); };
    var doRefreshToken = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            ClientAuthorizationApi_1.refreshToken()
                .then(function (res) {
                return res;
            })["catch"](function (err) {
                return err;
            });
            return [2 /*return*/];
        });
    }); };
    var doRevokeToken = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            ClientAuthorizationApi_1.revokeToken({
                accesstoken: localStorage.getItem('access_token'),
                refreshtoken: localStorage.getItem('refresh_token')
            })
                .then(function (res) {
                setStage(stage + 1);
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
                window.location.href = '/signin';
                return res;
            })["catch"](function (err) {
                return err;
            });
            return [2 /*return*/];
        });
    }); };
    var doGetUser = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            UserApi_1.getUser('me')
                .then(function (res) {
                return res;
            })["catch"](function (err) {
                return err;
            });
            return [2 /*return*/];
        });
    }); };
    return {
        nickname: nickname,
        setNickname: setNickname,
        firstName: firstName,
        setFirstName: setFirstName,
        lastName: lastName,
        setLastName: setLastName,
        email: email,
        setEmail: setEmail,
        phone: phone,
        setPhone: setPhone,
        gender: gender,
        setGender: setGender,
        birthdate: birthdate,
        setBirthdate: setBirthdate,
        zoneInfo: zoneInfo,
        setZoneInfo: setZoneInfo,
        locale: locale,
        setLocale: setLocale,
        passwordCode: passwordCode,
        setPasswordCode: setPasswordCode,
        password: password,
        setPassword: setPassword,
        stage: stage,
        setStage: setStage,
        doCreateUser: doCreateUser,
        doCreateUserPasswordCode: doCreateUserPasswordCode,
        doCreateUserPassword: doCreateUserPassword,
        doAuthorize: doAuthorize,
        doRefreshToken: doRefreshToken,
        doRevokeToken: doRevokeToken,
        doGetUser: doGetUser
    };
}
exports["default"] = useUser;
