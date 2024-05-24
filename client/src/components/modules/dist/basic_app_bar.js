"use strict";
exports.__esModule = true;
var app_bar_1 = require("../layouts/app_bar");
var image_1 = require("next/image");
var NotificationsOutlined_1 = require("@mui/icons-material/NotificationsOutlined");
var AppsOutlined_1 = require("@mui/icons-material/AppsOutlined");
var AccountCircleOutlined_1 = require("@mui/icons-material/AccountCircleOutlined");
var react_1 = require("react");
var AppBarContext_1 = require("@/context/AppBarContext");
var AirContext_1 = require("@/context/AirContext");
var ModuleBarContext_1 = require("@/context/ModuleBarContext");
var PageBarContext_1 = require("@/context/PageBarContext");
function BasicAppBar() {
    var appBarContext = react_1.useContext(AppBarContext_1["default"]);
    var airContext = react_1.useContext(AirContext_1["default"]);
    var moduleBarContext = react_1.useContext(ModuleBarContext_1["default"]);
    var pageBarContext = react_1.useContext(PageBarContext_1["default"]);
    // toast.success('🦄 Wow so easy!', {
    //     position: "top-center",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //     });
    return (React.createElement(app_bar_1["default"], { left: React.createElement("div", { style: {
                display: 'flex',
                alignItems: 'center',
                gap: 8
            } },
            React.createElement("div", { style: {
                    width: 48,
                    height: 48,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                } },
                React.createElement(image_1["default"], { src: "/logo.png", width: 24, height: 24, alt: "Logo" })),
            React.createElement("div", { style: {
                    fontSize: 16,
                    fontWeight: 600
                } }, "Forest Gate")), right: React.createElement("div", { style: {
                display: 'flex',
                alignItems: 'center',
                gap: 0
            } },
            React.createElement("div", null, airContext.code),
            React.createElement("div", { style: {
                    width: 48,
                    height: 48,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }, onClick: function () { airContext.toggleAir('notifications'); } },
                React.createElement(NotificationsOutlined_1["default"], null)),
            React.createElement("div", { style: {
                    width: 48,
                    height: 48,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }, onClick: function () { airContext.toggleAir('apps'); } },
                React.createElement(AppsOutlined_1["default"], null)),
            React.createElement("div", { style: {
                    height: 48,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }, onClick: function () { airContext.toggleAir('account'); } },
                React.createElement("div", { style: {
                        width: 48,
                        height: 48,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    } },
                    React.createElement(AccountCircleOutlined_1["default"], null)),
                React.createElement("div", { style: {
                        fontSize: 16,
                        fontWeight: 600
                    } }, "Jakub"))) }));
}
exports["default"] = BasicAppBar;
