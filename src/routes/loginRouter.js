import LoginController from '../api/loginController.js'

import koaRouter from '@koa/router'

const loginRouter = new koaRouter()
loginRouter.prefix('/api')

loginRouter.get('/public/get_captcha', LoginController.getCaptcha)
loginRouter.get('/public/send_mail', LoginController.sendMail)
loginRouter.post('/public/update_pwd', LoginController.updatePwd)
loginRouter.post('/public/login', LoginController.login)
loginRouter.post('/public/register', LoginController.register)

export default loginRouter

