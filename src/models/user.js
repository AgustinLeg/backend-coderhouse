const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    userName: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// UserSchema.methods.toJSON = function () {
//   // eslint-disable-next-line no-unused-vars
//   const { __v, password, _id, ...usuario } = this.toObject();
//   usuario.uid = _id;
//   return usuario;
// };

module.exports = model("User", UserSchema);
