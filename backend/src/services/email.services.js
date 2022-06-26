import { createTransport } from 'nodemailer'
import {
  MAIL_HOST,
  MAIL_PASSWORD,
  MAIL_PORT,
  MAIL_USER,
} from '../config/index.js'
import logger from './logger.services.js'

const transporter = createTransport({
  host: MAIL_HOST,
  port: Number(MAIL_PORT),
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASSWORD,
  },
})

transporter.verify((err, _success) => {
  if (err) return logger.error(`❌ Verify : ${err}`)
  logger.info('Your config is correct ✅')
})

const sendGmail = async (to, subject, text, att, nombre, html) => {
  const mail = {
    from: `info@andreaskeller.name`,
    to,
    subject,
  }
  if (text !== '') {
    mail.text = text
  } else {
    mail.html = html
  }
  if (att !== '') {
    const adj = { path: att }
    mail.attachments = [adj]
  }
  try {
    await transporter.sendMail(mail)
    logger.info(`MAIL ENVIADO A: ${to} CON: ${att}`)
  } catch (error) {
    logger.error(`ERROR AL ENVIAR CORREO A: ${to} - ERROR: ${error}`)
  }
}

export { sendGmail }
