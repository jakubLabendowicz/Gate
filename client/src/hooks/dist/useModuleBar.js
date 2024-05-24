"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
function useModuleBar() {
    var _a = react_1.useState(64), width = _a[0], setWidth = _a[1];
    return {
        width: width,
        setWidth: setWidth
    };
}
exports["default"] = useModuleBar;
