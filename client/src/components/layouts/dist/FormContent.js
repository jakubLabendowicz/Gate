"use strict";
exports.__esModule = true;
var form_content_module_scss_1 = require("../../styles/form_content.module.scss");
function FormContent(_a) {
    var header = _a.header, children = _a.children, footer = _a.footer;
    return (React.createElement("div", { className: form_content_module_scss_1["default"].form_content },
        React.createElement("div", { className: form_content_module_scss_1["default"].form_content__inner },
            React.createElement("div", { className: form_content_module_scss_1["default"].form },
                React.createElement("div", { className: form_content_module_scss_1["default"].form__inner },
                    React.createElement("div", { className: form_content_module_scss_1["default"].form__header }, header),
                    React.createElement("div", { className: form_content_module_scss_1["default"].form__main }, children),
                    React.createElement("div", { className: form_content_module_scss_1["default"].form__footer }, footer))))));
}
exports["default"] = FormContent;
