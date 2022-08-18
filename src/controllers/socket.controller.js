import { logger } from '../services/index.js'
import Message from '../services/DAO/messages.service.js'

const message = Message.initInstance()

export const SocketController = async (socket, io) => {
  logger.info('Usuario Conectado')
  socket.on('get-messages', () => {
    message.getAll((data) => {
      socket.emit('all-messages', data)
    })
  })

  socket.on('create-message', (payload) => {
    message.create(payload, (newMessage) => {
      io.emit('new-message', newMessage)
    })
  })

  socket.on('disconnect', () => {
    logger.info('Usuario Desconectado')
    socket.disconnect()
  })
}
