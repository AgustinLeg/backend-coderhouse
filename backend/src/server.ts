import 'dotenv/config'
import app from './app'
import { DB } from './database'

/**
 * Start Express server.
 */
const server = app.listen(app.get('port'), async () => {
  // connect to database
  await DB.connect()
  
  console.log(
    '🚀 Server started on http://localhost:%d in %s mode',
    app.get('port'),
    app.get('env')
  )
  console.log('  Press CTRL-C to stop\n')
})

export default server
