import cluster from 'cluster'
import { cpus } from 'os'
import app from './src/app.js'
import { DB } from './src/database/index.js'
import logger from './src/utils/logger.js'

const numCPUs = cpus().length

if (cluster.isMaster) {
  logger.info(`Master ${process.pid} is running`)
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork()
  }
  cluster.on('exit', (worker, _code, _signal) => {
    logger.info(`Worker ${worker.process.pid} died`)
    cluster.fork()
  })
} else {
  try {
    app.listen(app.get('port'), async () => {
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
  } catch (error) {
    logger.error(`error ${error}`)
  }
}
