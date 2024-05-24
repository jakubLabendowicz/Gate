"use strict";
exports.__esModule = true;
var module_bar_1 = require("../layouts/module_bar");
var HomeOutlined_1 = require("@mui/icons-material/HomeOutlined");
var LoginOutlined_1 = require("@mui/icons-material/LoginOutlined");
var PersonAddOutlined_1 = require("@mui/icons-material/PersonAddOutlined");
var KeyOutlined_1 = require("@mui/icons-material/KeyOutlined");
var ModuleBarButton_1 = require("../elements/ModuleBarButton");
function GateModuleBar() {
    return (React.createElement(module_bar_1["default"], { top: React.createElement("div", { style: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: 8
            } },
            React.createElement(ModuleBarButton_1["default"], { href: "/" },
                React.createElement(HomeOutlined_1["default"], null))), bottom: React.createElement("div", { style: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: 8
            } },
            React.createElement(ModuleBarButton_1["default"], { href: "/signin" },
                React.createElement(LoginOutlined_1["default"], null)),
            React.createElement(ModuleBarButton_1["default"], { href: "/signup" },
                React.createElement(PersonAddOutlined_1["default"], null)),
            React.createElement(ModuleBarButton_1["default"], { href: "/auth" },
                React.createElement(KeyOutlined_1["default"], null))) }));
}
exports["default"] = GateModuleBar;
