'use client';
"use strict";
exports.__esModule = true;
var air_bar_module_scss_1 = require("../../styles/air_bar.module.scss");
var react_1 = require("react");
var AirContext_1 = require("@/context/AirContext");
function AirBarButton(_a) {
    var label = _a.label, code = _a.code, _b = _a.hidden, hidden = _b === void 0 ? false : _b, _c = _a.hiddenFromSignedIn, hiddenFromSignedIn = _c === void 0 ? false : _c, _d = _a.hiddenAfterSignedIn, hiddenAfterSignedIn = _d === void 0 ? false : _d, children = _a.children;
    var airContext = react_1.useContext(AirContext_1["default"]);
    var here = airContext.code === code;
    var classNames = [air_bar_module_scss_1["default"].air_bar_button];
    if (here)
        classNames.push(air_bar_module_scss_1["default"].air_bar_button___active);
    var classNamesString = classNames.join(' ');
    var _e = react_1.useState(false), display = _e[0], setDisplay = _e[1];
    react_1.useEffect(function () {
        var signedIn = localStorage.getItem('access_token') ? true : false;
        setDisplay(true);
        if (hidden && !here)
            setDisplay(false);
        if (hiddenFromSignedIn && !signedIn && !here)
            setDisplay(false);
        if (hiddenAfterSignedIn && signedIn && !here)
            setDisplay(false);
    }, [airContext.code]);
    return (display ?
        React.createElement("button", { className: classNamesString, onClick: function () { airContext.toggleAir(code); } },
            React.createElement("div", { className: air_bar_module_scss_1["default"].air_bar_button__inner },
                React.createElement("div", { className: air_bar_module_scss_1["default"].air_bar_button__icon }, children),
                label ?
                    React.createElement("div", { className: air_bar_module_scss_1["default"].air_bar_button__label }, label)
                    : null))
        : null);
}
exports["default"] = AirBarButton;
