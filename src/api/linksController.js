import linksModel from '../model/links'

class LinksController{
  constructor () {
  }
  async getList(ctx){
    const result = await linksModel.getList()
    ctx.body = {
      code: 200,
      data: result,
      msg: '成功'
    }
  }
}

export default new LinksController()
