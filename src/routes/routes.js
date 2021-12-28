import combine from 'koa-combine-routers'

import loginRouter from './loginRouter'
// 压缩路由
export default combine(loginRouter)
