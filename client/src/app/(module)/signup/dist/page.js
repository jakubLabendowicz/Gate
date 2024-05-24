"use client";
"use strict";
exports.__esModule = true;
var page_1 = require("@/components/layouts/page");
var TextField_1 = require("@mui/material/TextField");
var Button_1 = require("@mui/material/Button");
var link_1 = require("next/link");
var PageFormContent_1 = require("@/components/layouts/PageFormContent");
var useUser_1 = require("@/hooks/useUser");
function Signup() {
    var userHook = useUser_1["default"]();
    return (React.createElement(page_1["default"], null,
        React.createElement(PageFormContent_1["default"], { header: 'Sign up' }, userHook.stage === 0 ?
            React.createElement(React.Fragment, null,
                React.createElement(TextField_1["default"], { id: "outlined-basic", label: "Nickname", variant: "outlined", defaultValue: userHook.nickname, onChange: function (event) { userHook.setNickname(event.target.value); }, style: {
                        width: '100%'
                    } }),
                React.createElement(TextField_1["default"], { id: "outlined-basic", label: "First name", variant: "outlined", defaultValue: userHook.firstName, onChange: function (event) { userHook.setFirstName(event.target.value); }, style: {
                        width: '100%'
                    } }),
                React.createElement(TextField_1["default"], { id: "outlined-basic", label: "Last name", variant: "outlined", defaultValue: userHook.lastName, onChange: function (event) { userHook.setLastName(event.target.value); }, style: {
                        width: '100%'
                    } }),
                React.createElement(TextField_1["default"], { id: "outlined-basic", label: "Gender", variant: "outlined", type: "phone", defaultValue: userHook.gender, onChange: function (event) { userHook.setGender(event.target.value); }, style: {
                        width: '100%'
                    } }),
                React.createElement(Button_1["default"], { variant: "contained", onClick: function () { userHook.setStage(1); }, style: {
                        width: '100%',
                        height: 48,
                        backgroundColor: '#2B318A',
                        borderRadius: 8,
                        color: '#ffffff'
                    } }, "Next"),
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
                        } }, "Already have an account?"),
                    React.createElement(link_1["default"], { href: '/signin' },
                        React.createElement("div", { style: {
                                fontSize: 12,
                                fontWeight: 600,
                                color: '#2B318A'
                            } }, "Sign in"))))
            : userHook.stage === 1 ?
                React.createElement(React.Fragment, null,
                    React.createElement(TextField_1["default"], { id: "outlined-basic", label: "Email", variant: "outlined", defaultValue: userHook.email, onChange: function (event) { userHook.setEmail(event.target.value); }, style: {
                            width: '100%'
                        } }),
                    React.createElement(TextField_1["default"], { id: "outlined-basic", label: "Phone", variant: "outlined", type: "phone", defaultValue: userHook.phone, onChange: function (event) { userHook.setPhone(event.target.value); }, style: {
                            width: '100%'
                        } }),
                    React.createElement("div", { style: {
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: 8
                        } },
                        React.createElement(Button_1["default"], { variant: "contained", onClick: function () { userHook.setStage(0); }, style: {
                                width: '100%',
                                height: 48,
                                backgroundColor: '#2B318A',
                                borderRadius: 8,
                                color: '#ffffff'
                            } }, "Back"),
                        React.createElement(Button_1["default"], { variant: "contained", onClick: function () { userHook.doCreateUser(); }, style: {
                                width: '100%',
                                height: 48,
                                backgroundColor: '#2B318A',
                                borderRadius: 8,
                                color: '#ffffff'
                            } }, "Sign up")),
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
                            } }, "Already have an account?"),
                        React.createElement(link_1["default"], { href: '/signin' },
                            React.createElement("div", { style: {
                                    fontSize: 12,
                                    fontWeight: 600,
                                    color: '#2B318A'
                                } }, "Sign in"))))
                : userHook.stage === 2 ?
                    React.createElement(React.Fragment, null,
                        React.createElement(TextField_1["default"], { id: "outlined-basic", label: "Code", variant: "outlined", defaultValue: userHook.passwordCode, onChange: function (event) { userHook.setPasswordCode(event.target.value); }, style: {
                                width: '100%'
                            } }),
                        React.createElement(TextField_1["default"], { id: "outlined-basic", label: "Password", variant: "outlined", defaultValue: userHook.password, onChange: function (event) { userHook.setPassword(event.target.value); }, style: {
                                width: '100%'
                            } }),
                        React.createElement(Button_1["default"], { variant: "contained", onClick: function () { userHook.doCreateUserPassword(); }, style: {
                                width: '100%',
                                height: 48,
                                backgroundColor: '#2B318A',
                                borderRadius: 8,
                                color: '#ffffff'
                            } }, "Sign up"))
                    : userHook.stage === 3 &&
                        React.createElement(React.Fragment, null,
                            React.createElement("div", { style: {
                                    fontSize: 12,
                                    fontWeight: 600
                                } }, "Congratulations! Your account has been created."),
                            React.createElement(link_1["default"], { href: '/signin', style: {
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 8
                                } },
                                React.createElement(Button_1["default"], { variant: "contained", style: {
                                        width: '100%',
                                        height: 48,
                                        backgroundColor: '#2B318A',
                                        borderRadius: 8,
                                        color: '#ffffff'
                                    } }, "Sign up"))))));
}
exports["default"] = Signup;
