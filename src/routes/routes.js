import combine from 'koa-combine-routers'

import loginRouter from './loginRouter'
import postRouter from './postRouter'
// 压缩路由
export default combine(loginRouter,postRouter)
