const { defineConfig } = require('@vue/cli-service')

let proxyObj = {}
proxyObj['/']={
  // websocket
  ws:false,
  // 目标地址
  target:'http://localhost:8081',
  // 发送请求头host会被设置成target--deyi--suyao
  changeOrigin:true,
  // 不重写请求地址
  pathRewrite:{
    '^/':'/'
  }
}
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    host:'localhost',
    port:8080,
    proxy:proxyObj
  }
})
