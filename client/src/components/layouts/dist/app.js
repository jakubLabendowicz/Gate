"use client";
"use strict";
exports.__esModule = true;
var app_module_scss_1 = require("../../styles/app.module.scss");
var react_1 = require("react");
var AppBarContext_1 = require("../../context/AppBarContext");
var AirContext_1 = require("../../context/AirContext");
var ModuleBarContext_1 = require("@/context/ModuleBarContext");
function App(_a) {
    var bar = _a.bar, air = _a.air, children = _a.children;
    var appBarContext = react_1.useContext(AppBarContext_1["default"]);
    var airContext = react_1.useContext(AirContext_1["default"]);
    var moduleBarContext = react_1.useContext(ModuleBarContext_1["default"]);
    return (React.createElement("div", { className: app_module_scss_1["default"].app },
        React.createElement("div", { className: app_module_scss_1["default"].app__inner },
            bar && appBarContext.height && appBarContext.height > 0 ?
                React.createElement("div", { className: app_module_scss_1["default"].app_bar__container, style: {
                        height: appBarContext.height
                    } }, bar)
                : null,
            air && airContext.open && airContext.width && airContext.width > 0 ?
                React.createElement("div", { className: app_module_scss_1["default"].air__container, style: {
                        width: airContext.width,
                        height: appBarContext.height && appBarContext.height > 0 ? "calc(100% - " + appBarContext.height + "px)" : '100%'
                    } }, air)
                : null,
            children ?
                React.createElement("div", { className: app_module_scss_1["default"].module__container, style: {
                        marginTop: appBarContext.height && appBarContext.height > 0 ? appBarContext.height : 0,
                        minHeight: appBarContext.height && appBarContext.height > 0 ? "calc(100% - " + appBarContext.height + "px)" : '100%',
                        width: airContext.open && airContext.width && airContext.width > 0 ? "calc(100% - " + airContext.width + "px)" : '100%',
                        marginRight: airContext.open && airContext.width && airContext.width > 0 ? airContext.width : 0
                    } }, children)
                : null)));
}
exports["default"] = App;
