import loginController from '../api/loginController.js'

import koaRouter from '@koa/router'

const router = new koaRouter()
router.prefix('/api')

router.get('/public/getCaptcha', loginController.getCaptcha)
router.get('/public/sendMail', loginController.sendMail)
router.post('/public/updatePwd', loginController.updatePwd)
router.post('/public/login', loginController.login)
router.post('/public/register', loginController.register)

export default router

