'use strict'
import nodemailer from 'nodemailer'
import svgCaptcha from 'svg-captcha'
import {setValue} from './redisTest.js'

// async..await is not allowed in global scope, must use a wrapper
async function send (options) {
  // create reusable transporter object using the default SMTP transport

  // 发件服务器
  let transporter = nodemailer.createTransport({
    host: 'smtp.exmail.qq.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'zhangjinzhe@zhangjinzhe.cn', // generated ethereal user
      pass: 'FpFjLyXG8oZCeRuR' // generated ethereal password
    }
  })
  const captcha = svgCaptcha.create({
    size: 6
  })
  // 保存验证码对应关系并设置超时时间
  await setValue(options.path, captcha.text, 5 * 60)

  // 发送配置
  return await transporter.sendMail({
    from: '"社区邮件" <zhangjinzhe@zhangjinzhe.cn>', // sender address
    to: options.path, // list of receivers
    subject: `你好，${options.user}！`, // Subject line
    // text: `验证码：${captcha.text}`, // plain text body
    html: `验证码：${captcha.text}` // html body
  })
}

export default send
