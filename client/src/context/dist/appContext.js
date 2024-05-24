"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var AppContext = react_1.createContext({
    appBarHeight: 64,
    setAppBarHeight: function (height) { },
    airWidth: 300,
    setAirWidth: function (width) { }
});
exports["default"] = AppContext;
