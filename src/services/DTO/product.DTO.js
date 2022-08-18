/* eslint-disable camelcase */
const productosDTO = (product) => {
  const {
    title,
    description,
    images,
    price,
    inStock,
    slug,
    created_at,
    updated_at,
  } = product
  return {
    id: product.id || product._id,
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
