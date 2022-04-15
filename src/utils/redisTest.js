import client from './redisdb.js'
import redis from 'redis'

// const { promisify } = require("util");
// const getAsync = promisify(client.get).bind(client);
// const hgetallAsync = promisify(client.hgetall).bind(client)

// 增
export const setValue = async (key, value, time) => {
  if (typeof value === 'undefined' || value === null || value === '') {
    console.log(1)
  } else if (typeof value === 'object') {
    for (const item of Object.keys(value)) {
      await client.hset(key, item, value[item], redis.print)
    }
  } else if (typeof time === 'number') {
    await client.set(key, value, 'EX', time)
  } else {
    await client.set(key, value)
  }
}
// setValue('obj', {name: 'zhang',age: 30})
// setValue('asdadasda', '1111')

// 查
export const getValue = async (key) => {
  return await client.getAsync(key)
}
// getValue('user').then(res => {
//   console.log(res)
// })

// hash 查
// const getHValue = async (key) => {
//   return await client.hgetallAsync(key)
// }

// getHValue('obj').then(res => {
//   console.log(res)
// })

// 删
// const delValue = async (key) => {
//   return await client.del(key, (error, res) => {
//     console.log(res)
//   })
// }

// delValue('obj')
