const pino = require('pino')
const config = require('../config')

// const dest = pino.destination('requests.log')
const pinoElastic = require('pino-elasticsearch')

const dest = pinoElastic({
  index: 'p3_data_api_requests',
  consistency: 'one',
  node: 'http://localhost:9200',
  'es-version': 7,
  'flush-bytes': 1000
})

const logger = pino({
  timestamp: pino.stdTimeFunctions.isoTime
}, dest)

module.exports = (router) => {
  return (req, res, next) => {
    if (config.get('recordRequests', false)) {
      logger.info({
        headers: req['headers'],
        method: req['method'],
        url: req['url'],
        query: req['query'],
        params: req['params'],
        body: req['body'],
        router: router,
      })
    }
    next()
  }
}