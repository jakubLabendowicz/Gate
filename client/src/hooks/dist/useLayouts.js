"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
function useLayouts() {
    var _a = react_1.useState(64), appBarHeight = _a[0], setAppBarHeight = _a[1];
    var _b = react_1.useState(300), airWidth = _b[0], setAirWidth = _b[1];
    var _c = react_1.useState(64), moduleBarWidth = _c[0], setModuleBarWidth = _c[1];
    var _d = react_1.useState(64), pageBarWidth = _d[0], setPageBarWidth = _d[1];
    return {
        appBarHeight: appBarHeight,
        setAppBarHeight: setAppBarHeight,
        airWidth: airWidth,
        setAirWidth: setAirWidth,
        moduleBarWidth: moduleBarWidth,
        setModuleBarWidth: setModuleBarWidth,
        pageBarWidth: pageBarWidth,
        setPageBarWidth: setPageBarWidth
    };
}
exports["default"] = useLayouts;
