"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
function useAppBar() {
    var _a = react_1.useState(64), height = _a[0], setheight = _a[1];
    return {
        height: height,
        setheight: setheight
    };
}
exports["default"] = useAppBar;
