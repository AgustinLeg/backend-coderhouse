import mongoose from 'mongoose'

const MONGO_URI = process.env.MONGO_URI || ''

export const connect = async () => {
  try {
    await mongoose.connect(MONGO_URI)
    console.log('MongoDB connected 💾')
  } catch (error) {
    console.error(error)
    throw new Error('MongoDB connection error 🚨')
  }
}
