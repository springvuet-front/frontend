const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  //outputDir: "../", //springboot 프로젝트의 resource/stattic 으로 경로 설정

  devServer: {
    proxy: {
      '/': {
        target: "http://localhost:8000",
        changeOrigin: true,
      }
    }
  }
})
module.exports = {
  chainWebpack: config => {
      config.module.rules.delete('eslint');
  }
}