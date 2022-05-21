"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calCant = exports.getRandomInt = void 0;
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
};
exports.getRandomInt = getRandomInt;
const calCant = (cant) => {
    const numbers = [];
    const values = {};
    for (let i = 0; i < cant; i++) {
        numbers.push((0, exports.getRandomInt)(1, 1000));
    }
    numbers.map((val) => {
        values[val] = numbers.filter((v) => v == val).length;
    });
    return values;
};
exports.calCant = calCant;
process.on('message', (cant) => {
    const resultado = (0, exports.calCant)(cant);
    process.send(resultado);
});
