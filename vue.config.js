const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  //outputDir: "../", //springboot 프로젝트의 resource/stattic 으로 경로 설정

  devServer: {
    proxy: {
      '/': {
        target: "http://localhost:8080",
        changeOrigin: true,
        ws: false,
      },
      '^/api':{
        target: "http://localhost:8080",
        changeOrigin: true,
        ws: false,
      }
    }
  },
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  }
})