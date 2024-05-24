"use strict";
exports.__esModule = true;
var page_1 = require("@/components/layouts/page");
var Button_1 = require("@mui/material/Button");
var PageFormContent_1 = require("@/components/layouts/PageFormContent");
function Signin() {
    return (React.createElement(page_1["default"], null,
        React.createElement(PageFormContent_1["default"], { header: 'Grant Access' },
            React.createElement("div", { style: {
                    fontSize: "1rem",
                    fontWeight: "bold"
                } }, "Forest Health wants to access your account."),
            React.createElement("div", { style: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: 8
                } },
                React.createElement("div", { style: {
                        fontSize: 12,
                        fontWeight: 600
                    } }, "This application will be able to:"),
                React.createElement("div", { style: {
                        fontSize: 12,
                        fontWeight: 600
                    } }, "- View your email address"),
                React.createElement("div", { style: {
                        fontSize: 12,
                        fontWeight: 600
                    } }, "- View your phone number"),
                React.createElement("div", { style: {
                        fontSize: 12,
                        fontWeight: 600
                    } }, "- View your profile picture")),
            React.createElement(Button_1["default"], { variant: "contained", style: {
                    width: '100%',
                    height: 48,
                    backgroundColor: '#2B318A',
                    borderRadius: 8,
                    color: '#ffffff'
                } }, "Allow"))));
}
exports["default"] = Signin;
