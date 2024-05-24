"use strict";
exports.__esModule = true;
var AppBar_1 = require("../layouts/AppBar");
var image_1 = require("next/image");
var react_1 = require("react");
var AppBarContext_1 = require("@/context/AppBarContext");
var AirContext_1 = require("@/context/AirContext");
var ModuleBarContext_1 = require("@/context/ModuleBarContext");
var PageBarContext_1 = require("@/context/PageBarContext");
var BasicAirBar_1 = require("./BasicAirBar");
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
    return (React.createElement(AppBar_1["default"], { left: React.createElement("div", { style: {
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
                } }, "Forest Gate")), right: React.createElement(BasicAirBar_1["default"], null) }));
}
exports["default"] = BasicAppBar;
