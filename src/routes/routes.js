import combine from 'koa-combine-routers'

import loginRouter from './loginRouter.js'
// 压缩路由
export default combine(loginRouter)
