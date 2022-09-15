import PostModel from '../model/post'

class PostController{
  constructor () {
  }
  async getList(ctx){
    const {query} = ctx.request
    // const post = new PostModel({
    //   title:'我是标题4',
    //   created: '',
    //   id:40313,
    //   content:'我是内容',
    //   tag: 'share',
    //   reads:1,
    //   uid: 1234356,
    //   answer:1
    // })
    // const result  = await post.save()
    // console.log(result)
    console.log(query)
    const sort = query.sort || 'created'
    const page = parseInt(query.page)|| 0
    const limit = parseInt(query.limit) || 10
    const options = query.tag ? { tag: query.tag } : {}
    const result = await PostModel.getList(options, sort, page, limit)
    ctx.body = {
      code: 200,
      data: {
        list: result
      },
      msg: '成功'
    }
  }
}

export default new PostController()
