

import koaRouter from '@koa/router'
import PostController from '../api/postController'

const postRouter = new koaRouter()
postRouter.prefix('/api')

postRouter.get('/public/post_list', PostController.getList)

export default postRouter

