"use strict";
exports.__esModule = true;
var module_bar_1 = require("../layouts/module_bar");
var HomeOutlined_1 = require("@mui/icons-material/HomeOutlined");
var LogoutOutlined_1 = require("@mui/icons-material/LogoutOutlined");
var LoginOutlined_1 = require("@mui/icons-material/LoginOutlined");
var PersonAddOutlined_1 = require("@mui/icons-material/PersonAddOutlined");
var KeyOutlined_1 = require("@mui/icons-material/KeyOutlined");
var ModuleBarButton_1 = require("../elements/ModuleBarButton");
var LockResetOutlined_1 = require("@mui/icons-material/LockResetOutlined");
var ModuleBarSizeButton_1 = require("../elements/ModuleBarSizeButton");
function GateModuleBar() {
    return (React.createElement(module_bar_1["default"], { top: React.createElement("div", { style: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                gap: 8
            } },
            React.createElement(ModuleBarButton_1["default"], { href: "/", hiddenFromSignedIn: true, label: "Home" },
                React.createElement(HomeOutlined_1["default"], null)),
            React.createElement(ModuleBarButton_1["default"], { href: "/signup", hiddenAfterSignedIn: true, label: "Sign up" },
                React.createElement(PersonAddOutlined_1["default"], null)),
            React.createElement(ModuleBarButton_1["default"], { href: "/signin", hiddenAfterSignedIn: true, label: "Sign in" },
                React.createElement(LoginOutlined_1["default"], null)),
            React.createElement(ModuleBarButton_1["default"], { href: "/reset", hiddenAfterSignedIn: true, label: "Reset password" },
                React.createElement(LockResetOutlined_1["default"], null)),
            React.createElement(ModuleBarButton_1["default"], { href: "/oauth", hidden: true, label: "Grant access" },
                React.createElement(KeyOutlined_1["default"], null))), bottom: React.createElement("div", { style: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                gap: 8
            } },
            React.createElement(ModuleBarButton_1["default"], { href: "/signout", hiddenFromSignedIn: true, label: "Sign out" },
                React.createElement(LogoutOutlined_1["default"], null)),
            React.createElement(ModuleBarSizeButton_1["default"], null)) }));
}
exports["default"] = GateModuleBar;
