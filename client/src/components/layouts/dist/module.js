"use client";
"use strict";
exports.__esModule = true;
var module_module_scss_1 = require("../../styles/module.module.scss");
var react_1 = require("react");
var AppBarContext_1 = require("../../context/AppBarContext");
var AirContext_1 = require("../../context/AirContext");
var ModuleBarContext_1 = require("@/context/ModuleBarContext");
function Module(_a) {
    var bar = _a.bar, children = _a.children;
    var appBarContext = react_1.useContext(AppBarContext_1["default"]);
    var airContext = react_1.useContext(AirContext_1["default"]);
    var moduleBarContext = react_1.useContext(ModuleBarContext_1["default"]);
    return (React.createElement("div", { className: module_module_scss_1["default"].module },
        React.createElement("div", { className: module_module_scss_1["default"].module__inner },
            bar && moduleBarContext.width && moduleBarContext.width > 0 ?
                React.createElement("div", { className: module_module_scss_1["default"].module_bar__container, style: {
                        width: moduleBarContext.width,
                        height: appBarContext.height && appBarContext.height > 0 ? "calc(100% - " + appBarContext.height + "px)" : '100%'
                    } }, bar)
                : null,
            children ?
                React.createElement("div", { className: module_module_scss_1["default"].page__container, style: {
                        minHeight: appBarContext.height && appBarContext.height > 0 ? "calc(100vh - " + appBarContext.height + "px)" : '100%',
                        width: moduleBarContext.width && moduleBarContext.width > 0 ? "calc(100% - " + moduleBarContext.width + "px)" : '100%',
                        marginLeft: moduleBarContext.width && moduleBarContext.width > 0 ? moduleBarContext.width : 0
                    } }, children)
                : null)));
}
exports["default"] = Module;
