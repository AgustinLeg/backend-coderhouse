import twilio from 'twilio'
import logger from './logger.services.js'
import {
  SID_TWILIO,
  TOKEN_TWILIO,
  SMS_ADMIN,
  WP_ADMIN,
} from '../config/index.js'

const client = twilio(SID_TWILIO, TOKEN_TWILIO)

export const sms = async (body, to) => {
  try {
    const message = {
      body,
      from: `+${SMS_ADMIN}`,
      to: `+${to}`,
    }
    const response = await client.messages.create(message)
    logger.info(response)
  } catch (error) {
    logger.error(error)
  }
}

export const wp = async (body, to, att) => {
  try {
    const message = {
      body,
      from: `whatsapp:+${WP_ADMIN}`,
      to: `whatsapp:+${to}`,
    }
    if (att !== '') {
      message.mediaUrl = [att]
    }
    const response = await client.messages.create(message)
    logger.info(response)
  } catch (error) {
    logger.error(error)
  }
}
