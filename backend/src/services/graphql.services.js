import ProductosDTO from './DTO/product.DTO.js'
import logger from './logger.services.js'
import Productos from './DAO/product.services.js'
import Usuarios from './DAO/user.services.js'

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
  const { description, title, images, price, stock, slug } = producto
  const productoNuevo = {
    title,
    description,
    images,
    price,
    slug,
    inStock: stock,
  }
  logger.info(`Post Productos/ Producto: ${JSON.stringify(productoNuevo)} `)
  const produc = await prod.save(productoNuevo)
  return ProductosDTO(produc)
}

export const updateProducto = async ({ sku, producto }) => {
  const { description, title, images, price, stock, slug } = producto
  const productoNuevo = {
    title,
    description,
    images,
    price,
    slug,
    inStock: stock,
  }
  logger.info(`Put Productos/ Producto: ${JSON.stringify(productoNuevo)}`)
  const produc = await prod.update(sku, productoNuevo)
  return ProductosDTO(produc)
}

export const deleteProducto = async ({ sku }) => {
  logger.info(`Delete Productos/ Producto: ${sku}`)
  const produc = await prod.deleteById(sku)
  return produc
}
export const createUsuario = async ({ usuario }) => {
  const { name, lastName, email, password } = usuario
  const usuarioNuevo = { name, lastName, email, password, role: 'USER' }
  logger.info(`Post Usuarios/ Usuario: ${JSON.stringify(usuarioNuevo)} `)
  const usuarioCreado = await usuarios.altaUsuario(usuarioNuevo)
  return usuarioCreado
}
export const updateUsuario = async ({ email, usuario }) => {
  const { name, lastName, password } = usuario
  const usuarioNuevo = { name, lastName, password, email }
  logger.info(`Put Usuarios/ Usuario: ${JSON.stringify(usuarioNuevo)}`)
  const usuarioModi = await usuarios.modiUsuario(usuarioNuevo)
  return usuarioModi
}

export const deleteUsuario = async ({ email }) => {
  logger.info(`Delete Usuarios/ Usuario: ${email}`)
  const usuario = await usuarios.deleteById(email)
  return usuario
}
