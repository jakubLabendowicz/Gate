"use client";
"use strict";
exports.__esModule = true;
var react_toastify_1 = require("react-toastify");
var Notification = /** @class */ (function () {
    function Notification(message, type) {
        this.message = message;
        this.type = type;
        this.options = {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            type: type
        };
    }
    Notification.prototype.send = function () {
        react_toastify_1.toast(this.message, this.options);
    };
    return Notification;
}());
exports["default"] = Notification;
