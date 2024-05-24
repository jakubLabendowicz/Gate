'use client';
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var navigation_1 = require("next/navigation");
var module_bar_module_scss_1 = require("../../styles/module_bar.module.scss");
var react_1 = require("react");
var ModuleBarContext_1 = require("@/context/ModuleBarContext");
function ModuleBarButton(_a) {
    var label = _a.label, href = _a.href, _b = _a.hidden, hidden = _b === void 0 ? false : _b, _c = _a.hiddenFromSignedIn, hiddenFromSignedIn = _c === void 0 ? false : _c, _d = _a.hiddenAfterSignedIn, hiddenAfterSignedIn = _d === void 0 ? false : _d, children = _a.children;
    var moduleBarContext = react_1.useContext(ModuleBarContext_1["default"]);
    var pathname = navigation_1.usePathname();
    var here = pathname === href;
    var classNames = [module_bar_module_scss_1["default"].module_bar_button__icon];
    if (here)
        classNames.push(module_bar_module_scss_1["default"].module_bar_button__icon___active);
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
        if (hiddenFromSignedIn && !signedIn && here)
            window.location.href = '/signin';
    }, [pathname]);
    return (display ?
        React.createElement(link_1["default"], { className: module_bar_module_scss_1["default"].module_bar_button, href: href },
            React.createElement("div", { className: module_bar_module_scss_1["default"].module_bar_button__inner },
                React.createElement("div", { className: classNamesString }, children),
                label && moduleBarContext.width && moduleBarContext.width > 128 ?
                    React.createElement("div", { className: module_bar_module_scss_1["default"].module_bar_button__label }, label)
                    : null))
        : null);
}
exports["default"] = ModuleBarButton;
