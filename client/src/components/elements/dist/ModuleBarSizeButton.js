'use client';
"use strict";
exports.__esModule = true;
var module_bar_module_scss_1 = require("../../styles/module_bar.module.scss");
var react_1 = require("react");
var ModuleBarContext_1 = require("@/context/ModuleBarContext");
var KeyboardArrowRightOutlined_1 = require("@mui/icons-material/KeyboardArrowRightOutlined");
var KeyboardArrowLeftOutlined_1 = require("@mui/icons-material/KeyboardArrowLeftOutlined");
function ModuleBarSizeButton() {
    var moduleBarContext = react_1.useContext(ModuleBarContext_1["default"]);
    var changeWidth = function () {
        if (moduleBarContext.width && moduleBarContext.width > 128) {
            moduleBarContext.setWidth(64);
        }
        else {
            moduleBarContext.setWidth(200);
        }
    };
    return (React.createElement("button", { className: module_bar_module_scss_1["default"].module_bar_button, onClick: changeWidth },
        React.createElement("div", { className: module_bar_module_scss_1["default"].module_bar_button__inner },
            React.createElement("div", { className: module_bar_module_scss_1["default"].module_bar_button__icon }, moduleBarContext.width && moduleBarContext.width > 128 ?
                React.createElement(KeyboardArrowLeftOutlined_1["default"], null)
                :
                    React.createElement(KeyboardArrowRightOutlined_1["default"], null)),
            moduleBarContext.width && moduleBarContext.width > 128 ?
                React.createElement("div", { className: module_bar_module_scss_1["default"].module_bar_button__label }, "Minimize")
                : null)));
}
exports["default"] = ModuleBarSizeButton;
