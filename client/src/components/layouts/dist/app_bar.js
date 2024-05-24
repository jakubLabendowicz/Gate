"use strict";
exports.__esModule = true;
var app_bar_module_scss_1 = require("../../styles/app_bar.module.scss");
function AppBar(_a) {
    var left = _a.left, center = _a.center, right = _a.right;
    return (React.createElement("div", { className: app_bar_module_scss_1["default"].app_bar },
        React.createElement("div", { className: app_bar_module_scss_1["default"].app_bar__inner },
            React.createElement("div", { className: app_bar_module_scss_1["default"].app_bar__left }, left),
            React.createElement("div", { className: app_bar_module_scss_1["default"].app_bar__center }, center),
            React.createElement("div", { className: app_bar_module_scss_1["default"].app_bar__right }, right))));
}
exports["default"] = AppBar;
