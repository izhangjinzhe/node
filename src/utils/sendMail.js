'use strict'
import nodemailer from 'nodemailer'

// async..await is not allowed in global scope, must use a wrapper
async function send (options) {
  // create reusable transporter object using the default SMTP transport

  // 发件服务器
  let transporter = nodemailer.createTransport({
    host: 'smtp.88.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'zhangjinzhe@88.com', // generated ethereal user
      pass: 'bDnuZJcirfCFJgsY' // generated ethereal password
    }
  })

  // 发送配置
  return await transporter.sendMail({
    from: '"社区邮件" <zhangjinzhe@88.com>', // sender address
    to: options.path, // list of receivers
    subject: `你好，${options.user}！`, // Subject line
    text: '文本', // plain text body
    html: '内容' // html body
  })
}

export default send
