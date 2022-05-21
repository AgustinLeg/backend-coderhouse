"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resellerRole = exports.adminRole = void 0;
const adminRole = (req, res, next) => {
    const { role } = req.body;
    if (role !== 'ADMIN') {
        return res
            .status(401)
            .json({ message: 'No tienes permisos para hacer esto' });
    }
    return next();
};
exports.adminRole = adminRole;
const resellerRole = (req, res, next) => {
    const { role } = req.body;
    if (role !== 'RESELLER') {
        return res
            .status(401)
            .json({ message: 'No tienes permisos para hacer esto' });
    }
    return next();
};
exports.resellerRole = resellerRole;
