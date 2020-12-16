const mongoose = require('mongoose')

module.exports = () => {
  const DB_URL = `mongodb://127.0.0.1:27017/employment`
  const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
  global.ObjectId = mongoose.Types.ObjectId

  mongoose.connect(DB_URL, config, (err) => {
    if (err) {
      console.log('连接失败', err)
    } else {
      console.log('Mongdb连接成功')
    }
  })
}
