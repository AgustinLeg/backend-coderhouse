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
exports.removeProduct = exports.updateProduct = exports.newProduct = exports.getBySlug = exports.getAll = void 0;
const product_1 = __importDefault(require("../models/product"));
const getAll = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield product_1.default.find();
    res.json(products);
});
exports.getAll = getAll;
const getBySlug = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const slug = req.params.slug;
    const productDB = yield product_1.default.findOne({ slug });
    if (!productDB) {
        return res
            .status(404)
            .send({ error: 'Producto no encontrado', status: 404 });
    }
    return res.json(productDB);
});
exports.getBySlug = getBySlug;
const newProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, price, thumbnail, stock, slug, tags, description } = req.body;
    if (!price || !thumbnail || !stock || !slug || !tags || !title) {
        return res.status(406).send({ error: 'Faltan datos', status: 406 });
    }
    if (!Number(price) || !Number(stock)) {
        return res
            .status(400)
            .send({ error: 'El precio solo permite numeros', status: 400 });
    }
    const newProduct = new product_1.default({
        title,
        price,
        images: [thumbnail],
        inStock: stock,
        slug,
        tags,
        description,
    });
    yield newProduct.save();
    return res.json(newProduct);
});
exports.newProduct = newProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const productoDB = yield product_1.default.findByIdAndUpdate(id, Object.assign({}, req.body)).lean();
    if (!productoDB) {
        return res
            .status(404)
            .send({ error: 'Producto no encontrado', status: 404 });
    }
    return res.json(productoDB);
});
exports.updateProduct = updateProduct;
const removeProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const productoDB = yield product_1.default.findByIdAndDelete(id);
    if (!productoDB) {
        return res
            .status(404)
            .send({ error: 'Producto no encontrado', status: 404 });
    }
    return res.json({ message: 'Producto eliminado', producto: productoDB._id });
});
exports.removeProduct = removeProduct;
