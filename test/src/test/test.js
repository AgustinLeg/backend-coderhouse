import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const server = process.env.REACT_APP_SERVER;

export default class TestProductos {
  constructor() {
    this.productos = [];
  }
  getBySlug = async (slug) => {
    try {
      const res = await axios.get(`${server}/api/products/${slug}`);

      this.productos.push(res.data);

      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  getAll = async () => {
    try {
      const res = await axios.get(`${server}/api/products`);
      res.data.map((prod) => {
        this.productos.push(prod);
      });
    } catch (err) {
      console.log(err);
    }
  };

  addOne = async (prod) => {
    try {
      const res = await axios.post(`${server}/api/products`, prod);
      this.productos.push(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  updateOne = async (id, prod) => {
    try {
      const res = await axios.put(`${server}/api/products/${id}`, prod);
      this.productos = this.productos.filter((p) => p.slug !== slug);
      this.productos.push(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  deleteOne = async (id) => {
    try {
      await axios.delete(`${server}/api/products/${id}`);
      this.productos = this.productos.filter((p) => p.slug != slug);
    } catch (err) {
      console.log(err);
    }
  };
}
