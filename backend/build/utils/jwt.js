"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidToken = exports.signToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const signToken = (_id, email) => {
    if (!process.env.JWT_SECRET_SEED) {
        throw new Error('jwt secret key need');
    }
    return jsonwebtoken_1.default.sign({ _id, email }, process.env.JWT_SECRET_SEED, {
        expiresIn: '30d',
    });
};
exports.signToken = signToken;
const isValidToken = (token) => {
    if (!process.env.JWT_SECRET_SEED) {
        throw new Error('jwt secret key need');
    }
    return new Promise((resolve, reject) => {
        try {
            jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET_SEED || '', (err, payload) => {
                if (err)
                    return reject('JWT no válido');
                const { _id } = payload;
                resolve(_id);
            });
        }
        catch (error) {
            reject('JWT no válido');
        }
    });
};
exports.isValidToken = isValidToken;
