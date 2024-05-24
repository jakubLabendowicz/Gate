'use client';
"use strict";
exports.__esModule = true;
var module_bar_module_scss_1 = require("../../styles/module_bar.module.scss");
var react_1 = require("react");
var ModuleBarContext_1 = require("@/context/ModuleBarContext");
function ModuleBar(_a) {
    var top = _a.top, center = _a.center, bottom = _a.bottom;
    var moduleBarContext = react_1.useContext(ModuleBarContext_1["default"]);
    return (React.createElement("div", { className: module_bar_module_scss_1["default"].module_bar },
        React.createElement("div", { className: module_bar_module_scss_1["default"].module_bar__inner, style: {
                minWidth: moduleBarContext.width && moduleBarContext.width > 128 ? moduleBarContext.width - 32 : moduleBarContext.width
            } },
            React.createElement("div", { className: module_bar_module_scss_1["default"].module_bar__top }, top),
            React.createElement("div", { className: module_bar_module_scss_1["default"].module_bar__center }, center),
            React.createElement("div", { className: module_bar_module_scss_1["default"].module_bar__bottom }, bottom))));
}
exports["default"] = ModuleBar;
