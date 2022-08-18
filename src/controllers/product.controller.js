import Products from '../services/DAO/product.service.js'

const prod = Products.initInstance()

export const getAll = async (_req, res) => {
  prod.getAll((data) => {
    res.status(200).json(data)
  })
}

export const getById = async (req, res) => {
  const id = req.params.id
  prod.getById(id, (p) => {
    res.status(200).json(p)
  })
}

export const newProduct = async (req, res) => {
  const { title, price, thumbnail, stock, slug, tags, description } = req.body
  if (!price || !thumbnail || !stock || !slug || !tags || !title) {
    return res.status(406).send({ error: 'Faltan datos', status: 406 })
  }

  if (!Number(price) || !Number(stock)) {
    return res
      .status(400)
      .send({ error: 'El precio solo permite numeros', status: 400 })
  }

  const newProduct = {
    title,
    price,
    image: thumbnail,
    inStock: stock,
    slug,
    tags,
    description,
  }

  prod.create(newProduct, (product) => {
    res.status(200).json(product)
  })
}

export const updateProduct = async (req, res) => {
  const id = req.params.id
  prod.update({ id, ...req.body }, (product) => {
    res.status(200).json(product)
  })
}

export const removeProduct = async (req, res) => {
  const id = req.params.id
  prod.deleteById(id, (p) => {
    res.status(200).json(p)
  })
}
