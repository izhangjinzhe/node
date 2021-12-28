import redis from 'redis'
import pkg from 'bluebird'

const { promisifyAll } = pkg

const option = {
  host: '124.70.164.207',
  port: 15000,
  password: '556987',
  detect_buffers: true,
  retry_strategy: function (options) {
    if (options.error && options.error.code === 'ECONNREFUSED') {
      // End reconnecting on a specific error and flush all commands with
      // a individual error
      return new Error('The server refused the connection')
    }
    if (options.total_retry_time > 1000 * 60 * 60) {
      // End reconnecting after a specific timeout and flush all commands
      // with a individual error
      return new Error('Retry time exhausted')
    }
    if (options.attempt > 10) {
      // End reconnecting with built in error
      return undefined
    }
    // reconnect after
    return Math.min(options.attempt * 100, 3000)
  }
}

const client = promisifyAll(redis.createClient(option))

client.on('error', (err) => {
  console.log('mongodb' + err)
})

client.on('ready', () => {
  console.log('redis连接成功')
})

export default client
