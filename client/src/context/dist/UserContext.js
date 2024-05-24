"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var UserContext = react_1.createContext({
    nickname: '',
    setNickname: function (nickname) { },
    firstName: '',
    setFirstName: function (firstName) { },
    lastName: '',
    setLastName: function (lastName) { },
    email: '',
    setEmail: function (email) { },
    phone: '',
    setPhone: function (phone) { },
    gender: '',
    setGender: function (gender) { },
    birthdate: '',
    setBirthdate: function (birthdate) { },
    zoneInfo: '',
    setZoneInfo: function (zoneInfo) { },
    locale: '',
    setLocale: function (locale) { },
    passwordCode: '',
    setPasswordCode: function (passwordCode) { },
    password: '',
    setPassword: function (password) { },
    stage: 0,
    setStage: function (signUpStage) { },
    doCreateUser: function () { },
    doCreateUserPasswordCode: function () { },
    doCreateUserPassword: function () { },
    doAuthorize: function () { },
    doRefreshToken: function () { },
    doRevokeToken: function () { },
    doGetUser: function () { }
});
exports["default"] = UserContext;
