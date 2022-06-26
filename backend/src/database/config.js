import mongoose from 'mongoose'
import { MONGO_URI } from '../config/index.js'
import { logger } from '../services/index.js'

export const connect = async () => {
  try {
    await mongoose.connect(MONGO_URI)
    logger.info('MongoDB connected 💾')
  } catch (error) {
    logger.error(error)
    throw new Error('MongoDB connection error 🚨')
  }
}
