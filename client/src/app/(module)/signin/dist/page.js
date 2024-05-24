"use client";
"use strict";
exports.__esModule = true;
var page_1 = require("@/components/layouts/page");
var TextField_1 = require("@mui/material/TextField");
var Button_1 = require("@mui/material/Button");
var link_1 = require("next/link");
var PageFormContent_1 = require("@/components/layouts/PageFormContent");
var useUser_1 = require("@/hooks/useUser");
function Signin() {
    var userHook = useUser_1["default"]();
    return (React.createElement(page_1["default"], null,
        React.createElement(PageFormContent_1["default"], { header: 'Sign in' },
            React.createElement(TextField_1["default"], { id: "outlined-basic", label: "Email", variant: "outlined", defaultValue: userHook.email, onChange: function (event) { userHook.setEmail(event.target.value); }, style: {
                    width: '100%'
                } }),
            React.createElement(TextField_1["default"], { id: "outlined-basic", label: "Password", variant: "outlined", type: "password", defaultValue: userHook.password, onChange: function (event) { userHook.setPassword(event.target.value); }, style: {
                    width: '100%'
                } }),
            React.createElement("div", { style: {
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8
                } },
                React.createElement(link_1["default"], { href: '/reset' },
                    React.createElement("div", { style: {
                            fontSize: 12,
                            fontWeight: 600,
                            color: '#2B318A'
                        } }, "Forgot password?"))),
            React.createElement(Button_1["default"], { variant: "contained", onClick: function () { userHook.doAuthorize(); }, style: {
                    width: '100%',
                    height: 48,
                    backgroundColor: '#2B318A',
                    borderRadius: 8,
                    color: '#ffffff'
                } }, "Sign in"),
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
                    } }, "Do not have an account?"),
                React.createElement(link_1["default"], { href: '/signup' },
                    React.createElement("div", { style: {
                            fontSize: 12,
                            fontWeight: 600,
                            color: '#2B318A'
                        } }, "Sign up"))))));
}
exports["default"] = Signin;
