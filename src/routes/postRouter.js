

import koaRouter from '@koa/router'
import PostController from '../api/postController'
import LinksController from '../api/linksController'

const postRouter = new koaRouter()
postRouter.prefix('/api')

postRouter.get('/public/post_list', PostController.getList)
postRouter.get('/public/hot_list', PostController.getList)
postRouter.get('/public/links', LinksController.getList)

export default postRouter

