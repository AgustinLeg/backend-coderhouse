import { httpServer, app } from './app.js'
import { DB } from './database/index.js'
import { logger } from './services/index.js'

/**
 * Start Express server.
 */
logger.info(process.argv)
const Server = httpServer.listen(app.get('port'), async () => {
  // connect to database
  try {
    await DB.connect()
  } catch (error) {
    logger.error(`error ${error}`)
  }

  logger.info(
    `🚀 Server started on http://localhost:${app.get('port')} in ${app.get(
      'env'
    )}mode`
  )
  logger.info('  Press CTRL-C to stop\n')
})

export default Server
