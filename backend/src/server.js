import app from './app.js'
import { DB } from './database/index.js'
import { logger } from './utils/index.js'

/**
 * Start Express server.
 */
logger.info(process.argv)
const Server = app.listen(app.get('port'), async () => {
  // connect to database
  try {
    await DB.connect()
  } catch (error) {
    logger.error(`error ${error}`)
  }

  logger.info(
    '🚀 Server started on http://localhost:%d in %s mode',
    app.get('port'),
    app.get('env')
  )
  logger.info('  Press CTRL-C to stop\n')
})

export default Server
