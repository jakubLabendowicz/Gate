"use strict";
exports.__esModule = true;
var NotificationsOutlined_1 = require("@mui/icons-material/NotificationsOutlined");
var AppsOutlined_1 = require("@mui/icons-material/AppsOutlined");
var AccountCircleOutlined_1 = require("@mui/icons-material/AccountCircleOutlined");
var react_1 = require("react");
var AppBarContext_1 = require("@/context/AppBarContext");
var AirContext_1 = require("@/context/AirContext");
var ModuleBarContext_1 = require("@/context/ModuleBarContext");
var PageBarContext_1 = require("@/context/PageBarContext");
var AirBar_1 = require("../layouts/AirBar");
var AirBarButton_1 = require("../elements/AirBarButton");
function BasicAirBar() {
    var appBarContext = react_1.useContext(AppBarContext_1["default"]);
    var airContext = react_1.useContext(AirContext_1["default"]);
    var moduleBarContext = react_1.useContext(ModuleBarContext_1["default"]);
    var pageBarContext = react_1.useContext(PageBarContext_1["default"]);
    return (React.createElement(AirBar_1["default"], null,
        React.createElement(AirBarButton_1["default"], { code: "notifications", hiddenFromSignedIn: true },
            React.createElement(NotificationsOutlined_1["default"], null)),
        React.createElement(AirBarButton_1["default"], { code: "apps" },
            React.createElement(AppsOutlined_1["default"], null)),
        React.createElement(AirBarButton_1["default"], { code: "account", label: 'Jakub' },
            React.createElement(AccountCircleOutlined_1["default"], null))));
}
exports["default"] = BasicAirBar;
