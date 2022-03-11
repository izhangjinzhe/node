import mongoose from '../utils/mongodb'

const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: String,
  name: String,
  password: String,
  phone: String,
  email: String
})

const UserModel = mongoose.model('users', UserSchema)

export default UserModel
