"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.login = void 0;
const user_1 = __importDefault(require("../models/user"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const utils_1 = require("../utils");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).send({ error: 'Faltan datos', status: 400 });
    }
    if (!(0, utils_1.isValidEmail)(email)) {
        return res.status(400).send({ error: 'Email invalido', status: 400 });
    }
    const userDB = yield user_1.default.findOne({ email });
    if (!userDB) {
        return res.status(400).send({ error: 'Usuario no encontrado', status: 400 });
    }
    if (!bcrypt_1.default.compareSync(password, userDB.password)) {
        return res.status(400).send({ error: 'Contraseña incorrecta', status: 400 });
    }
    const token = utils_1.jwt.signToken(userDB._id, userDB.email);
    return res.json({ token, user: userDB });
});
exports.login = login;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, lastName, email, password } = req.body;
    if (!name ||
        name.length < 2 ||
        !lastName ||
        lastName.length < 3 ||
        !email ||
        !password) {
        return res.status(400).send({ error: 'Faltan datos', status: 400 });
    }
    if (!(0, utils_1.isValidEmail)(email)) {
        return res.status(400).send({ error: 'Email invalido', status: 400 });
    }
    if (password.length < 6) {
        return res.status(400).send({ error: 'Password invalido', status: 400 });
    }
    const user = yield user_1.default.findOne({ email });
    if (user) {
        return res.status(400).send({ error: 'Email ya existe', status: 400 });
    }
    const newUser = new user_1.default({
        name,
        lastName,
        email,
        password: bcrypt_1.default.hashSync(password, 10),
        role: 'USER',
    });
    try {
        yield newUser.save();
        const { _id, email } = newUser;
        const token = yield utils_1.jwt.signToken(_id, email);
        return res.json({
            token,
            user: newUser,
        });
    }
    catch (error) {
        return res
            .status(500)
            .send({ error: 'Error al crear usuario', status: 500 });
    }
});
exports.register = register;
