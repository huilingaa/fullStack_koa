module.exports = {
  // 自动打包
  // static中可以打开
  outputDir: __dirname + '/../server/admin',   // 输出文件目录
  publicPath: process.env.NODE_ENV === 'production'  //基本路径
    ? '/admin/'
    : '/'
}