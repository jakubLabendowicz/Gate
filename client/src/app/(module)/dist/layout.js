"use strict";
exports.__esModule = true;
var module_1 = require("@/components/layouts/module");
var BasicModuleBar_1 = require("@/components/modules/BasicModuleBar");
function GateModuleLayout(_a) {
    var children = _a.children;
    return (React.createElement(module_1["default"], { bar: React.createElement(BasicModuleBar_1["default"], null) }, children));
}
exports["default"] = GateModuleLayout;
