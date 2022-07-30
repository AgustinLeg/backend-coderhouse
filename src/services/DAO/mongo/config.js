import dotenv from 'dotenv'
import mongoose from 'mongoose'
import logger from '../../../services/logger.services.js'

dotenv.config()

mongoose.connect(process.env.MONGO_URI, (err) => {
  if (err) {
    logger.error('Error al Conectarse a MongoDB')
  } else {
    logger.info('Conectados a MongoDB')
  }
})

export default mongoose
