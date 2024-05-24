"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
function useApp() {
    var _a = react_1.useState(64), appBarHeight = _a[0], setAppBarHeight = _a[1];
    var _b = react_1.useState(300), airWidth = _b[0], setAirWidth = _b[1];
    return {
        appBarHeight: appBarHeight,
        setAppBarHeight: setAppBarHeight,
        airWidth: airWidth,
        setAirWidth: setAirWidth
    };
}
exports["default"] = useApp;
