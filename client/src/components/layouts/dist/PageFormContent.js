"use strict";
exports.__esModule = true;
var page_form_content_module_scss_1 = require("../../styles/page_form_content.module.scss");
function FormContent(_a) {
    var header = _a.header, children = _a.children, footer = _a.footer;
    return (React.createElement("div", { className: page_form_content_module_scss_1["default"].page_form_content },
        React.createElement("div", { className: page_form_content_module_scss_1["default"].page_form_content__inner },
            React.createElement("div", { className: page_form_content_module_scss_1["default"].page_form },
                React.createElement("div", { className: page_form_content_module_scss_1["default"].page_form__inner },
                    React.createElement("div", { className: page_form_content_module_scss_1["default"].page_form__header }, header),
                    React.createElement("div", { className: page_form_content_module_scss_1["default"].page_form__main }, children),
                    React.createElement("div", { className: page_form_content_module_scss_1["default"].page_form__footer }, footer))))));
}
exports["default"] = FormContent;
