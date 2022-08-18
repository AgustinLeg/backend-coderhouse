import pkg from 'mongoose'
const { Schema, model } = pkg

const ProductSchema = Schema(
  {
    description: { type: String, default: '' },
    image: { type: String },
    inStock: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    slug: { type: String, required: true, unique: true },
    tags: [{ type: String }],
    title: { type: String, required: true, default: '' },
  },
  {
    timestamps: true,
  }
)

ProductSchema.index({ title: 'text', tags: 'text' })

ProductSchema.methods.toJSON = function () {
  // eslint-disable-next-line no-unused-vars
  const { __v, _id, ...product } = this.toObject()
  product.id = _id
  return product
}

export default model('Product', ProductSchema)
