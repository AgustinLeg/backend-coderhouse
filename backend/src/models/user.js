const {Schema, model} = require('mongoose')

const UserSchema = Schema({
  name: { type: String, required: true, max: 100 },
  lastName: { type: String, required: true, max: 100 },
  email: { type: String, required: true, max: 100, unique: true },
  password: { type: String, required: true, max: 100 },
},
{ timestamps: true })

UserSchema.methods.toJSON = function () {
  // eslint-disable-next-line no-unused-vars
  const { __v, _id, ...usuario } = this.toObject()
  usuario.uid = _id
  return usuario;
}

module.exports = model('Usuario', UserSchema)
