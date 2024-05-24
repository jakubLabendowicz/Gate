"use strict";
exports.__esModule = true;
var air_bar_module_scss_1 = require("../../styles/air_bar.module.scss");
function AirBar(_a) {
    var children = _a.children;
    return (React.createElement("div", { className: air_bar_module_scss_1["default"].air_bar },
        React.createElement("div", { className: air_bar_module_scss_1["default"].air_bar__inner }, children)));
}
exports["default"] = AirBar;
