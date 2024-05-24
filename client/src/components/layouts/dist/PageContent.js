"use strict";
exports.__esModule = true;
var page_content_module_scss_1 = require("../../styles/page_content.module.scss");
function PageContent(_a) {
    var header = _a.header, children = _a.children, footer = _a.footer;
    return (React.createElement("div", { className: page_content_module_scss_1["default"].page_content },
        React.createElement("div", { className: page_content_module_scss_1["default"].page_content__inner },
            React.createElement("div", { className: page_content_module_scss_1["default"].content__header }, header),
            React.createElement("div", { className: page_content_module_scss_1["default"].page_content__main }, children),
            React.createElement("div", { className: page_content_module_scss_1["default"].page_content__footer }, footer))));
}
exports["default"] = PageContent;
