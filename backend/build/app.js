"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const controllers_1 = require("./controllers");
// Create Express server
const app = (0, express_1.default)();
// Express configuration
app.set('port', process.env.PORT || 3000);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use(express_1.default.static(path_1.default.join(__dirname, '../public'), { maxAge: 31557600000 }));
app.on('error', (err) => console.log(err));
// API endpoints
(0, controllers_1.loadApiEndpoints)(app);
exports.default = app;
