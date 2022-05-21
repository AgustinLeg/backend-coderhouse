"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
exports.AuthRouter = (0, express_1.Router)();
exports.AuthRouter.post('/login', controllers_1.Auth.login);
exports.AuthRouter.post('/register', controllers_1.Auth.register);
// todo: renew token
// AuthRouter.post('/renew', Auth.renewToken)
