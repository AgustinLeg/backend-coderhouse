import { config } from 'dotenv'
config()

export const PORT = process.env.PORT || parseInt(process.argv[2]) || 3001

// database environment variables
export const MONGO_URI = process.env.MONGO_URI || 'localhost'
export const MONGO_USER = process.env.MONGO_USER || 'root'
export const MONGO_PASSWORD = process.env.MONGO_PASSWORD || 'password'
export const MONGO_DATABASE = process.env.MONGO_DATABASE || 'test'
export const MONGO_PORT = process.env.MONGO_PORT || 3306

// mail enviroment variables
export const MAIL_HOST = process.env.MAIL_HOST
export const MAIL_PORT = process.env.MAIL_PORT
export const MAIL_USER = process.env.MAIL_USER
export const MAIL_PASSWORD = process.env.MAIL_PASSWORD
export const MAIL_ADMIN = process.env.MAIL_ADMIN

// twilio enviroment variables
export const TOKEN_TWILIO = process.env.TOKEN_TWILIO
export const SID_TWILIO = process.env.SID_TWILIO
export const SMS_ADMIN = process.env.SMS_ADMIN
export const WP_ADMIN = process.env.WP_ADMIN

export const whiteList = [
  'http://localhost:3000',
  'http://localhost:5173',
  'https://coderhouse-react-flamakeys.vercel.app',
]
