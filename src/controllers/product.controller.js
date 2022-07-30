import Products from '../services/DAO/product.services.js'

const prod = Products.initInstance()

export const getAll = async (_req, res) => {
  prod.getAll((data) => {
    res.status(200).json(data)
  })
}

export const getBySlug = async (req, res) => {
  const slug = req.params.slug
  prod.getBySlug(slug, (p) => {
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
    images: thumbnail,
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
  console.log(id)

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
