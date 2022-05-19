import mongoose from '../utils/mongodb.js'

const Schema = mongoose.Schema

const PostSchema = new Schema({
  username: String,
  name: String,
  password: String,
  phone: String,
  email: String
})

const PostModel = mongoose.model('users', PostSchema)

export default PostModel
