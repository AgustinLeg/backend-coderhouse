"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadApiEndpoints = void 0;
const routes_1 = require("../routes");
const auth_1 = require("../routes/auth");
const child_process_1 = require("child_process");
const minimist_1 = __importDefault(require("minimist"));
let computo = (0, child_process_1.fork)(`./src/utils/calc.js`);
const loadApiEndpoints = (app) => {
    app.get('/', (_req, res) => {
        return res.send('/public/index.html');
    });
    app.get('/info', (_req, res) => {
        const arg = (0, minimist_1.default)(process.argv.slice(2));
        let html = `<h1>INFORMACIÓN DE SESIÓN</h1><ul>`;
        html += `<li>Argumentos de Entrada: ${JSON.stringify(arg)}</li>`;
        html += `<li>Path: ${process.cwd()}</li>`;
        html += `<li>Sistema Operativo: ${process.platform}</li>`;
        html += `<li>ID Proceso: ${process.pid}</li>`;
        html += `<li>Versión Node: ${process.version}</li>`;
        html += `<li>Carpeta Proyecto: ${process.execPath}</li>`;
        html += `<li>Memoria Total Reservada (RSS): ${process.memoryUsage().rss}</li>`;
        res.status(400).send(html);
    });
    app.get('/api/randoms', (req, res) => {
        const { cant = 100000000 } = req.query;
        computo.on('message', (rsdo) => {
            console.log(rsdo);
            res.status(200).send({ rsdo });
            computo.kill();
            computo = (0, child_process_1.fork)(`./src/utils/calculo.util.js`);
        });
        computo.send(cant);
    });
    app.use('/api/products', routes_1.ProductRouter);
    app.use('/api/auth', auth_1.AuthRouter);
};
exports.loadApiEndpoints = loadApiEndpoints;
