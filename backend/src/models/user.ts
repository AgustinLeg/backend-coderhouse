import { Schema, model } from 'mongoose'

import { IUser } from '../interfaces'

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, max: 100 },
    lastName: { type: String, required: true, max: 100 },
    email: { type: String, required: true, max: 100, unique: true },
    password: { type: String, required: true, max: 100 },
    role: {
      type: String,
      enum: ['USER', 'ADMIN', 'RESELLER'],
      default: 'USER',
    },
  },
  { timestamps: true }
)

UserSchema.methods.toJSON = function () {
  // eslint-disable-next-line no-unused-vars
  const { __v, password, ...user } = this.toObject()
  return user
}

const User = model<IUser>('User', UserSchema)

export default User
