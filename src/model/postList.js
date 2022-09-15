import mongoose from '../utils/mongodb.js'

const Schema = mongoose.Schema

const PostlistSchema = new Schema({
  username: String,
  name: String,
  password: String,
  phone: String,
  email: String
})

const PostlistModel = mongoose.model('post', PostlistSchema)

export default PostlistModel
