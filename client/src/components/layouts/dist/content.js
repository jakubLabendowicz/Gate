"use strict";
exports.__esModule = true;
var content_module_scss_1 = require("../../styles/content.module.scss");
function Content(_a) {
    var header = _a.header, children = _a.children, footer = _a.footer;
    return (React.createElement("div", { className: content_module_scss_1["default"].content },
        React.createElement("div", { className: content_module_scss_1["default"].content__inner },
            React.createElement("div", { className: content_module_scss_1["default"].content__header }, header),
            React.createElement("div", { className: content_module_scss_1["default"].content__main }, children),
            React.createElement("div", { className: content_module_scss_1["default"].content__footer }, footer))));
}
exports["default"] = Content;
