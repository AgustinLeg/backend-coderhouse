import pkg from 'mongoose'
const { Schema, model } = pkg

const orderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    orderItems: [
      {
        id: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
        title: { type: String, required: true },
        quantity: { type: Number, required: true },
        slug: { type: String, required: true },
        images: [{ type: String, required: true }],
        price: { type: Number, required: true },
      },
    ],
    shippingAddress: {
      name: { type: String },
      lastName: { type: String },
      address: { type: String, required: true },
      address2: { type: String },
      zip: { type: String },
      city: { type: String },
      country: { type: String },
      phone: { type: String },
    },

    numberOfItems: { type: Number, required: true },
    total: { type: Number, required: true },

    isPaid: { type: Boolean, required: true, default: false },
    paidAt: { type: String },

    transactionId: { type: String },
  },
  {
    timestamps: true,
  }
)

const Order = model('Order', orderSchema)

export default Order
