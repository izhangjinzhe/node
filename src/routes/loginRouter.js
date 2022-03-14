import loginController from '../api/loginController'

import koaRouter from '@koa/router'

const router = new koaRouter()
router.prefix('/api')

router.get('/getCaptcha', loginController.getCaptcha)
router.get('/sendMail', loginController.sendMail)
router.post('/updatePwd', loginController.updatePwd)
router.post('/login', loginController.login)
router.post('/register', loginController.register)

export default router

