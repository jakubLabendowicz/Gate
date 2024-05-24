"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
function useAir() {
    var _a = react_1.useState(true), defaultOpen = _a[0], setDefaultOpen = _a[1];
    var _b = react_1.useState('apps'), defaultCode = _b[0], setDefaultCode = _b[1];
    var _c = react_1.useState(64), defaultWidth = _c[0], setDefaultWidth = _c[1];
    var _d = react_1.useState(defaultOpen), open = _d[0], setOpen = _d[1];
    var _e = react_1.useState(defaultCode), code = _e[0], setCode = _e[1];
    var _f = react_1.useState(defaultWidth), width = _f[0], setWidth = _f[1];
    var toggleAir = function (newCode) {
        if (newCode !== code || (newCode === defaultCode && width === defaultWidth)) {
            setOpen(true);
            setCode(newCode);
            setWidth(400);
        }
        else {
            setOpen(defaultOpen);
            setCode(defaultCode);
            setWidth(defaultWidth);
        }
    };
    return {
        defaultOpen: defaultOpen,
        setDefaultOpen: setDefaultOpen,
        defaultCode: defaultCode,
        setDefaultCode: setDefaultCode,
        defaultWidth: defaultWidth,
        setDefaultWidth: setDefaultWidth,
        open: open,
        setOpen: setOpen,
        code: code,
        setCode: setCode,
        width: width,
        setWidth: setWidth,
        toggleAir: toggleAir
    };
}
exports["default"] = useAir;
