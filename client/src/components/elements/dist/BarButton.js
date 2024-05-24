"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
function BarButton(_a) {
    var href = _a.href, children = _a.children;
    var style = {
        width: 48,
        height: 48,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };
    return (React.createElement(link_1["default"], { href: href },
        React.createElement("div", { style: style }, children)));
}
exports["default"] = BarButton;
