import { Request, Response } from 'express'
import Product from '../models/product'

export const getAll = async (_req: Request, res: Response) => {
  const products = await Product.find()
  res.json(products)
}

export const getBySlug = async (req: Request, res: Response) => {
  const slug = req.params.slug
  const productDB = await Product.findOne({ slug })

  if (!productDB) {
    return res
      .status(404)
      .send({ error: 'Producto no encontrado', status: 404 })
  }

  return res.json(productDB)
}

export const newProduct = async (req: Request, res: Response) => {
  const { title, price, thumbnail, stock, slug, tags, description } = req.body
  if (!price || !thumbnail || !stock || !slug || !tags || !title) {
    return res.status(406).send({ error: 'Faltan datos', status: 406 })
  }

  if (!Number(price) || !Number(stock)) {
    return res
      .status(400)
      .send({ error: 'El precio solo permite numeros', status: 400 })
  }

  const newProduct = new Product({
    title,
    price,
    images: [thumbnail],
    inStock: stock,
    slug,
    tags,
    description,
  })

  await newProduct.save()
  return res.json(newProduct)
}

export const updateProduct = async (req: Request, res: Response) => {
  const id = req.params.id

  const productoDB = await Product.findByIdAndUpdate(id, { ...req.body }).lean()

  if (!productoDB) {
    return res
      .status(404)
      .send({ error: 'Producto no encontrado', status: 404 })
  }

  return res.json(productoDB)
}

export const removeProduct = async (req: Request, res: Response) => {
  const id = req.params.id
  const productoDB = await Product.findByIdAndDelete(id)
  if (!productoDB) {
    return res
      .status(404)
      .send({ error: 'Producto no encontrado', status: 404 })
  }
  return res.json({ message: 'Producto eliminado', producto: productoDB._id })
}
