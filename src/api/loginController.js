import svgCaptcha from 'svg-captcha'
import send from '../utils/sendMail.js'
import {getValue, setValue} from '../utils/redisTest.js'
import jsonwebtoken from 'jsonwebtoken'
import { JWT_SECRET } from '../config/index.js'
import { checkCode } from '../utils/utils.js'
import UserModel from '../model/users.js'
import bcrypt from 'bcrypt'

class loginController {
  constructor () {
  }

  async getCaptcha (ctx) {
    const { query } = ctx.request
    // https://github.com/produck/svg-captcha/blob/HEAD/README_CN.md
    const captcha = svgCaptcha.create({
      size: 6, //验证码长度
      ignoreChars: '0o1iq9', // 排除
      noise: Math.floor(Math.random() * 3), // 干扰线条数
      color: true // 文字颜色
    })
    // 保存验证码对应关系并设置超时时间
    setValue(query.uuid, captcha.text, 5 * 60)
    ctx.body = {
      code: 200,
      data: captcha.data
    }
  }
  async updatePwd(ctx){
    const { body } = ctx.request
    const code = await getValue(body.email)
    if(code === body.code){
      console.log(1)
      const pwd = await bcrypt.hash(body.password, 10)
      await UserModel.updateOne({email: body.email},{$set:{password: pwd}})
      ctx.body = {
        code: 200,
        data: null,
        msg: '修改成功'
      }
    }else{
      ctx.body = {
        code: 401,
        data: null,
        msg: '邮箱验证码错误或已过期'
      }
    }

  }

  async sendMail (ctx) {
    const { query } = ctx.request
    const user = await UserModel.findOne({ email: query.email })
    if(user){
      // const captcha = svgCaptcha.create({
      //   size: 6, //验证码长度
      //   ignoreChars: '0o1iq9', // 排除
      //   noise: Math.floor(Math.random() * 3), // 干扰线条数
      //   color: true // 文字颜色
      // })
      // await setValue(query.email, captcha.text, 5 * 60)
       await send({
        path: query.email,
        user: user.username
      })
      ctx.body = {
        code: 200,
        data: null,
        msg: '发送成功'
      }
    }else {
      ctx.body = {
        code: 401,
        data: null,
        msg: '邮箱未找到，请确认是否填写正确'
      }
    }
  }

  async login (ctx) {
    const { body } = ctx.request
    // 判断验证码
    if (await checkCode(body.uuid, body.code)) {
      // 判断用户名密码
      const user = await UserModel.findOne({ username: body.username })
      const flag = await bcrypt.compare(body.password, user ? user.password : '')
      if (user && flag) {
        const token = jsonwebtoken.sign({ id: 'zhang' }, JWT_SECRET, {
          expiresIn: '1d'
        })
        ctx.body = {
          code: 200,
          data: token,
          msg: '登录成功'
        }
      } else {
        ctx.body = {
          code: 401,
          data: null,
          msg: '用户名或密码错误'
        }
      }

    } else {
      ctx.body = {
        code: 401,
        data: null,
        msg: '图片验证码不正确'
      }
    }
  }

  async register (ctx) {
    const { body } = ctx.request
    // 判断验证码
    if (await checkCode(body.uuid, body.code)) {
      const username = await UserModel.findOne({ username: body.username })
      // 判断邮箱是否可用
      if (!username) {
        const email = await UserModel.findOne({ email: body.email })
        if (!email) {
          const pwd = await bcrypt.hash(body.password, 10)
          const user = new UserModel({
            username: body.username,
            name: body.name,
            email: body.email,
            password: pwd
          })
          const result = await user.save()
          ctx.body = {
            code: 200,
            data: result,
            msg: '注册成功'
          }
        } else {
          ctx.body = {
            code: 401,
            data: null,
            msg: '该邮箱已被注册,请重新填写!'
          }
        }
      } else {
        ctx.body = {
          code: 401,
          data: null,
          msg: '该用户名已被注册,请重新填写!'
        }
      }

    } else {
      ctx.body = {
        code: 401,
        data: null,
        msg: '图片验证码不正确或已过期,请重新输入!'
      }
    }
  }

}

export default new loginController()
