"use client";
"use strict";
exports.__esModule = true;
var page_1 = require("@/components/layouts/page");
var Button_1 = require("@mui/material/Button");
var PageFormContent_1 = require("@/components/layouts/PageFormContent");
var useUser_1 = require("@/hooks/useUser");
function Signin() {
    var userHook = useUser_1["default"]();
    return (React.createElement(page_1["default"], null,
        React.createElement(PageFormContent_1["default"], { header: 'Sign out' },
            React.createElement("div", { style: {
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8
                } },
                React.createElement("div", { style: {
                        fontSize: 12,
                        fontWeight: 600
                    } }, "Do you want to log out?")),
            React.createElement(Button_1["default"], { variant: "contained", onClick: function () { userHook.doRevokeToken(); }, style: {
                    width: '100%',
                    height: 48,
                    backgroundColor: '#2B318A',
                    borderRadius: 8,
                    color: '#ffffff'
                } }, "Sign out"))));
}
exports["default"] = Signin;
