import { config } from 'dotenv'
config()

export const PORT = parseInt(process.argv[2]) || process.env.PORT || 3000

// database environment variables
export const MONGO_URI = process.env.MONGO_URI || 'localhost'
export const MONGO_USER = process.env.MONGO_USER || 'root'
export const MONGO_PASSWORD = process.env.MONGO_PASSWORD || 'password'
export const MONGO_DATABASE = process.env.MONGO_DATABASE || 'test'
export const MONGO_PORT = process.env.MONGO_PORT || 3306
export const MAIL_HOST = process.env.MAIL_HOST
export const MAIL_PORT = process.env.MAIL_PORT
export const MAIL_USER = process.env.MAIL_USER
export const MAIL_PASSWORD = process.env.MAIL_PASSWORD
export const MAIL_ADMIN = process.env.MAIL_ADMIN

export const whiteList = ['http://localhost:3000']
