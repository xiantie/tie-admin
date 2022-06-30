const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack(config) {
    config.module
      .rule('element-plus-2')
      .test(/\.mjs/)
      .type('javascript/auto')
      .include.add(/node_modules/)
      .end()
  }
})
