import mongoose from 'mongoose'
import {DB_URL} from '../config/index.js'


// 创建连接
mongoose.connect(DB_URL, {
  useNewUrlParser: true
})

mongoose.connection.on('connected', () => {
  console.log('mongodb连接成功')
})

mongoose.connection.on('error', (err) => {
  console.log('mongodb连接失败', err)
})

mongoose.connection.on('disconnected', () => {
  console.log('mongodb断开连接')
})

export default mongoose
