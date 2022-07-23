/* eslint-disable camelcase */
const productosDTO = (producto) => {
  const {
    title,
    description,
    images,
    price,
    inStock,
    slug,
    created_at,
    updated_at,
  } = producto
  return {
    id: producto.id || producto._id,
    title: title || '',
    description: description || '',
    images: images || '',
    price: price || 0,
    inStock: inStock || 0,
    slug: slug || '',
    created_at: created_at || '',
    updated_at: updated_at || '',
  }
}

export default productosDTO
