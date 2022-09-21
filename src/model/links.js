import mongoose from '../utils/mongodb.js'

import dayjs from 'dayjs'

const Schema = mongoose.Schema

const LinksSchema = new Schema({
  title: String,
  created: String,
  id: Number,
  href: String
})

LinksSchema.pre('save', function(next) {
  this.created = dayjs().format('YYYY-MM-DD HH:mm:ss')
  next()
})

LinksSchema.statics = {
  getList: function() {
    return this.find({})
  }
}

const LinksModel = mongoose.model('links', LinksSchema)

export default LinksModel
