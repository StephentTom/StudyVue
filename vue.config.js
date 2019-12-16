module.exports = {
  devServer: {
    host: "localhost",
    port: 8080,
    // 设置开发接口代理
    proxy: {
      "/api": {
        target: "http://www.liulongbin.top:3005",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
}