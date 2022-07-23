import TestProductos from "./test/test.js";
import { strictEqual } from "assert";
import { productoNuevo, productoAModificar } from "./utils/producto.js";

describe("Test de CRUD de Productos", () => {
  it("Deberia Agregar un Nuevo Producto, y devolverlo", async () => {
    const prueba = new TestProductos();
    await prueba.addOne(productoNuevo);
    const producto = await prueba.getBySlug(productoNuevo.slug);
    strictEqual(productoNuevo.slug, producto.slug);
  });

  it("Deberia Modificar El Nombre del Producto, y devolverlo", async () => {
    const prueba = new TestProductos();
    await prueba.updateOne(productoAModificar.slug, productoAModificar);
    const producto = await prueba.getBySlug(productoAModificar.slug);
    strictEqual(productoAModificar.title, producto.title);
  });

  it("Deberia Eliminar el Producto", async () => {
    const slug = "nombre-producto5";
    const prueba = new TestProductos();
    await prueba.deleteOne(slug);
    const producto = prueba.productos.find((prod) => prod.slug === slug);
    strictEqual(producto, undefined);
  });

  it("Deberia Traer al Menos Un Producto.", async () => {
    const prueba = new TestProductos();
    await prueba.getAll();
    let rsdo = false;
    if (prueba.productos.length > 0) {
      rsdo = true;
    }
    strictEqual(rsdo, true);
  });
});
