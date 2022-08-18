import pkg from 'mongoose'
const { Schema, model } = pkg

const MessageSchema = Schema(
  {
    author: {
      _id: { type: Schema.Types.ObjectId, ref: 'User', default: null },
      email: { type: String, required: true },
    },
    message: { type: String, default: '' },
  },
  {
    timestamps: true,
  }
)

MessageSchema.index({ title: 'text', tags: 'text' })

MessageSchema.methods.toJSON = function () {
  // eslint-disable-next-line no-unused-vars
  const { __v, _id, ...message } = this.toObject()
  message.id = _id
  return message
}

export default model('Message', MessageSchema)
