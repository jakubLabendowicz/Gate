"use client";
"use strict";
exports.__esModule = true;
var page_module_scss_1 = require("../../styles/page.module.scss");
var react_1 = require("react");
var AppBarContext_1 = require("@/context/AppBarContext");
var AirContext_1 = require("@/context/AirContext");
var ModuleBarContext_1 = require("@/context/ModuleBarContext");
var PageBarContext_1 = require("@/context/PageBarContext");
function Page(_a) {
    var bar = _a.bar, children = _a.children;
    var appBarContext = react_1.useContext(AppBarContext_1["default"]);
    var airContext = react_1.useContext(AirContext_1["default"]);
    var moduleBarContext = react_1.useContext(ModuleBarContext_1["default"]);
    var pageBarContext = react_1.useContext(PageBarContext_1["default"]);
    var borderRadius = [0, 0, 0, 0];
    if (appBarContext.height && appBarContext.height > 0) {
        if (moduleBarContext.width && moduleBarContext.width > 0) {
            borderRadius[0] = 20;
        }
        if (airContext.open && airContext.width && airContext.width > 0) {
            borderRadius[1] = 20;
        }
    }
    return (React.createElement("div", { className: page_module_scss_1["default"].page, style: {
            minHeight: appBarContext.height && appBarContext.height > 0 ? "calc(100vh - " + appBarContext.height + "px)" : '100vh',
            borderRadius: borderRadius.map(function (value) { return value + "px"; }).join(' ')
        } },
        React.createElement("div", { className: page_module_scss_1["default"].page__inner },
            bar && pageBarContext.width && pageBarContext.width > 0 ?
                React.createElement("div", { className: page_module_scss_1["default"].page_bar__container, style: {
                        top: appBarContext.height && appBarContext.height > 0 ? appBarContext.height : 0,
                        right: airContext.open && airContext.width && airContext.width > 0 ? airContext.width : 0,
                        width: pageBarContext.width,
                        height: appBarContext.height && appBarContext.height > 0 ? "calc(100% - " + appBarContext.height + "px)" : '100%'
                    } }, bar)
                : null,
            children ?
                React.createElement("div", { className: page_module_scss_1["default"].content__container, style: {
                        minHeight: appBarContext.height && appBarContext.height > 0 ? "calc(100vh - " + appBarContext.height + "px)" : '100%',
                        width: pageBarContext.width && pageBarContext.width > 0 ? "calc(100% - " + pageBarContext.width + "px)" : '100%',
                        marginRight: pageBarContext.width && pageBarContext.width > 0 ? pageBarContext.width : 0
                    } }, children)
                : null)));
}
exports["default"] = Page;
