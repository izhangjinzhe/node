import mongoose from '../utils/mongodb.js'

import dayjs from 'dayjs'

const Schema = mongoose.Schema

const PostSchema = new Schema({
  title: String,
  created: String,
  id: Number,
  content: String,
  tag: String,
  reads: Number,
  answer: Number,
  userInfo: {type: String, ref: 'users'}
})

PostSchema.pre('save', function(next) {
  this.created = dayjs().format('YYYY-MM-DD HH:mm:ss')
  next()
})

PostSchema.statics = {
  getList: function(options, sort, page, limit) {
    return this.find(options).sort({[sort]: -1}).skip(page * limit).limit(limit).populate({
      path: 'userInfo',
      select: 'username'
    })
  }
}

const PostModel = mongoose.model('post', PostSchema)

export default PostModel
