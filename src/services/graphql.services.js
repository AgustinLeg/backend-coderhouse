import productosDTO from './DTO/product.dto.js'
import logger from './logger.services.js'
import Productos from './DAO/product.service.js'
import Usuarios from './DAO/user.service.js'

const prod = Productos.initInstance()
const usuarios = Usuarios.initInstance()

export const productos = async () => {
  let data = []
  await prod.getAll((res) => {
    data = res
  })
  return data
}

export const producto = async ({ slug }) => {
  let data
  await prod.getBySlug(slug, (res) => {
    data = res
  })
  return data
}

export const usuarioGet = async ({ email }) => {
  let data
  await usuarios.getByMail(email, (res) => {
    data = res
  })
  return data
}

export const createProducto = async ({ producto }) => {
  const { description, title, image, price, inStock, slug } = producto
  const productoNuevo = {
    title,
    description,
    images: image,
    price,
    slug,
    inStock,
    tags: [''],
  }
  logger.info(`Post Productos/ Producto: ${JSON.stringify(productoNuevo)} `)
  let prod
  await prod.create(productoNuevo, (data) => {
    prod = data
  })
  return productosDTO(prod)
}

export const updateProducto = async ({ slug, producto }) => {
  const { description, title, image, price, inStock } = producto
  const productoNuevo = {
    title,
    description,
    images: image,
    price,
    slug,
    inStock,
    tags: '',
    id: slug,
  }
  logger.info(`Put Productos/ Producto: ${JSON.stringify(productoNuevo)}`)
  let prod
  await prod.update(productoNuevo, (data) => {
    prod = data
  })
  return productosDTO(prod)
}

export const deleteProducto = async ({ slug }) => {
  logger.info(`Delete Productos/ Producto: ${slug}`)
  let prod
  await prod.deleteById(slug, (data) => {
    prod = data
  })
  return prod
}
export const createUsuario = async ({ usuario }) => {
  const { name, lastName, email, password } = usuario
  const usuarioNuevo = { name, lastName, email, password, role: 'USER' }
  logger.info(`Post Usuarios/ Usuario: ${JSON.stringify(usuarioNuevo)} `)
  let usuarioCreado
  await usuarios.altaUsuario(usuarioNuevo, (data) => {
    usuarioCreado = data
  })
  return usuarioCreado
}
export const updateUsuario = async ({ email, usuario }) => {
  const { name, lastName, password } = usuario
  const usuarioNuevo = { name, lastName, password, email }
  logger.info(`Put Usuarios/ Usuario: ${JSON.stringify(usuarioNuevo)}`)
  let usuarioModi
  await usuarios.modiUsuario(usuarioNuevo, (data) => {
    usuarioModi = data
  })
  return usuarioModi
}

export const deleteUsuario = async ({ email }) => {
  logger.info(`Delete Usuarios/ Usuario: ${email}`)
  let usuario
  await usuarios.deleteById(email, (data) => {
    usuario = data
  })
  return usuario
}
