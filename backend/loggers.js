const log4js = require('log4js')

log4js.configure({
  appenders: {
    console: {
      type: 'console',
    },
    fileDebug: {
      type: 'file',
      filename: 'logs/debug.log',
    },
    fileError: {
      type: 'file',
      filename: 'logs/error.log',
    },
    loggerInfo: {
      type: 'logLevelFilter',
      appender: 'console',
      level: 'info',
    },
    loggerDebug: {
      type: 'logLevelFilter',
      appender: 'fileDebug',
      level: 'debug',
    },
    loggerError: {
      type: 'logLevelFilter',
      appender: 'fileError',
      level: 'error',
    },
  },
  categories: {
    default: {
      appenders: ['loggerInfo'],
      level: 'all',
    },
    prod: {
      appenders: ['loggerDebug', 'loggerError'],
      level: 'all',
    },
  },
})

let logger
if (process.env.NODE_ENV === 'production') {
  logger = log4js.getLogger('prod')
} else {
  logger = log4js.getLogger()
}

module.exports = logger
