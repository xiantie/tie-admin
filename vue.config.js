const { defineConfig } = require('@vue/cli-service')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = defineConfig({
  devServer: {
    port: 7777,
    host: 'localhost',
    //配置方向代理
    proxy: {
      //当地址中有/api的时候会触发代理机制
      '/api': {
        //要代理的服务器地址 哲理不用写api
        target: 'https://api.imooc-admin.lgdsunday.club/',
        changeOrigin: true //是否跨域
      }
    }
  },
  transpileDependencies: true,
  chainWebpack(config) {
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
    config.module
      .rule('element-plus-2')
      .test(/\.mjs/)
      .type('javascript/auto')
      .include.add(/node_modules/)
      .end()

    config.resolve.alias.set('path', require.resolve('path-browserify'))
  }
})
