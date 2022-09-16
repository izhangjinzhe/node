import mongoose from '../utils/mongodb.js'
import dayjs from 'dayjs'

const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: { type: String, index: {unique: true}, sparse: true},
  name: { type: String, default: ''},
  password: { type: String},
  phone: { type: String, default: ''},
  gender: { type: Number, default: ''},
  email: { type: String, default: ''},
  level: { type: Number, default: 1 },
  created: { type: String},
  updated: { type: String},
  roles: {type: Array, default: ['user']},
  pic: { type: String, default: '/img/logo.jpeg'},
  status: { type: Number, default: 1},
  location: { type: String, default: ''},
  remark: { type: String, default: ''}
})

UserSchema.pre('save', function (next){
  this.created = dayjs().format('YYYY-MM-DD HH:mm:ss')
  next()
})

UserSchema.pre('update', function (next){
  this.updated = dayjs().format('YYYY-MM-DD HH:mm:ss')
  next()
})

UserSchema.post('save',function (error, doc, next){
  console.log(error)
  if(error.name === 'MongoError' && error.code === 11000){
    next(new Error('重复key'))
  }else{
    next(error)
  }
})

const UserModel = mongoose.model('user', UserSchema)

export default UserModel
