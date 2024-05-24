"use strict";
exports.__esModule = true;
var express_1 = require("express");
var _a = require("../middlewares/CheckMiddleware"), checkAuthorization = _a.checkAuthorization, checkPermissions = _a.checkPermissions, checkUserId = _a.checkUserId, checkBodyData = _a.checkBodyData, showMiddlewareData = _a.showMiddlewareData;
var UserRoleService_1 = require("../services/UserRoleService");
var UserRoleValidator_1 = require("../validators/UserRoleValidator");
var router = express_1["default"].Router();
router.post("/", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), checkPermissions(["CREATE_ANY_USER_ROLE", "CREATE_OWN_USER_ROLE"]), checkBodyData(UserRoleValidator_1.createUserRoleSchema), UserRoleService_1.createUserRole);
router.get("/", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), checkPermissions(["FIND_ANY_USER_ROLE", "FIND_OWN_USER_ROLE"]), checkBodyData(UserRoleValidator_1.findUserRolesSchema), UserRoleService_1.findUserRoles);
router.get("/:id", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), checkPermissions(["FIND_ANY_USER_ROLE", "FIND_OWN_USER_ROLE"]), checkBodyData(UserRoleValidator_1.findUserRoleSchema), UserRoleService_1.findUserRole);
router.patch("/:id", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), checkPermissions(["UPDATE_ANY_USER_ROLE", "UPDATE_OWN_USER_ROLE"]), checkBodyData(UserRoleValidator_1.updateUserRoleSchema), UserRoleService_1.updateUserRole);
router["delete"]("/:id", checkAuthorization(["CLIENT_ACCESS_TOKEN"]), checkPermissions(["DELETE_ANY_USER_ROLE", "DELETE_OWN_USER_ROLE"]), checkBodyData(UserRoleValidator_1.deleteUserRoleSchema), UserRoleService_1.deleteUserRole);
module.exports = router;
