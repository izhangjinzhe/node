/* eslint-disable */

import UserModel from '../model/users.js'

// 增

const zhang = {
  name: 'wang'
}

export const run1 = async () => {
  const data = new UserModel(zhang)
  const result = await data.save()
  console.log(result)
}

// 删
const run2 = async () => {
  const result = await UserModel.deleteOne({ name: 'hahahah' })
  console.log(result)
}
// run2()

// 改
const run3 = async () => {
  const result = await UserModel.updateOne({ name: 'wang' }, {
    name: 'hahahah'
  })
  console.log(result)
}
// run3()

// 查
const run4 = async () => {
  const result = await UserModel.find()
  console.log(result)
}
// run4()
