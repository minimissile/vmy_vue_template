const path = require('path')
const defaultSetting = require('./src/setting.js')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  // 开发环境下保存代码执行eslint语法检测
  lintOnSave: true,
  devServer: {
    // 端口配置
    port: defaultSetting.port || '6666',
    // 启动时是否自动打开浏览器
    open: defaultSetting.openBrowser || true,
    // 跨域代理
    // proxy: '',
    // 开发环境下eslint检测打印配置
    overlay: {
      // 是否打印警告信息
      warnings: true,
      // 是否打印错误信息
      errors: true
    },
    // 接口模拟
    before: (app) => {
    }
  },
  // 打包时是否生成Map文件
  productionSourceMap: false,
  configureWebpack: {
    name: defaultSetting.title || 'vmay_vue_template',
    resolve: {
      // 配置目录别名
      alias: {
        '@': resolve('src'),
        '@views': resolve('src/views'),
        '@images': resolve('src/assets/images'),
        '@components': resolve('src/components'),
      }
    },
    // 第三方依赖别名配置
    externals: {},
  }
}
