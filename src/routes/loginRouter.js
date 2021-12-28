import loginController from '../api/loginController'

import koaRouter from '@koa/router'

const router = new koaRouter()
router.get('/getCaptcha', loginController.getCaptcha)
router.post('/forget', loginController.sendMail)
router.post('/login', loginController.login)
router.post('/register', loginController.register)

export default router

