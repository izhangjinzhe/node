import Koa from 'koa'
import helmet from 'koa-helmet'
import path from 'path'
import statics from 'koa-static'
import compose from 'koa-compose'
import compress from 'koa-compress'
import JWT from 'koa-jwt'
import routes from './routes/routes'
import { JWT_SECRET } from './config'
import cors from '@koa/cors'
import koaBody from 'koa-body'

const app = new Koa()
const isDev = process.env.NODE_ENV === 'development'
const jwt = JWT({ secret: JWT_SECRET }).unless({ path: [/\/public/, /\/img/] })
const errorHandle = (ctx, next) => {
  return next().catch((err) => {
    if (401 === err.status) {
      ctx.status = 401
      ctx.body = {
        code: 401,
        data: null,
        msg: '无权限'
      }
    } else {
      ctx.status = err.status || 500
      ctx.body = {
        code: 500,
        data: null,
        msg: err.message
      }
    }
  })
}
// 整合中间件
const middleware = compose([
  koaBody(),
  cors(),
  helmet(),
  jwt,
  errorHandle,
  statics(path.join(__dirname, '../public')),
  routes()
])

// 判断生产环境
if (!isDev) {
  // 压缩中间件
  app.use(compress({
    threshold: 2048
  }))
}
app.use(middleware)

app.listen(17777,()=>{
  console.log('已启动服务 http://localhost:17777/')
})
