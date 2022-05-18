import loginController from '../api/loginController.js'

import koaRouter from '@koa/router'

const router = new koaRouter()
router.prefix('/api')

router.get('/public/get_captcha', loginController.getCaptcha)
router.get('/public/send_mail', loginController.sendMail)
router.post('/public/update_pwd', loginController.updatePwd)
router.post('/public/login', loginController.login)
router.post('/public/register', loginController.register)

export default router

