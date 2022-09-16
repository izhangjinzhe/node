import PostModel from '../model/post'

class PostController{
  constructor () {
  }
  async getList(ctx){
    const {query} = ctx.request
    const sort = query.sort || 'created'
    const page = parseInt(query.page)|| 0
    const limit = parseInt(query.limit) || 10
    const options = query.tag ? { tag: query.tag } : {}
    const result = await PostModel.getList(options, sort, page, limit)

    ctx.body = {
      code: 200,
      data: {
        list: result,
        page
      },
      msg: '成功'
    }
  }
}

export default new PostController()
