"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var AirContext = react_1.createContext({
    defaultOpen: true,
    setDefaultOpen: function (open) { },
    defaultCode: 'apps',
    setDefaultCode: function (code) { },
    defaultWidth: 64,
    setDefaultWidth: function (width) { },
    open: true,
    setOpen: function (open) { },
    code: 'apps',
    setCode: function (code) { },
    width: 300,
    setWidth: function (width) { },
    toggleAir: function (code) { }
});
exports["default"] = AirContext;
