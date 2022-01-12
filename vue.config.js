// 这个文件是 vue-cli 创建出来的项目配置文件
// 在 vue.config.js 这个配置文件种，可以对整个项目的打包、构建进行全局性的配置

// webpack 在进行打包的时候，底层用到了 node.js
// 因此在 vue.config.js 配置文件种，可以导入使用 node.js 中的核心模块

const path = require('path')
const themePath = path.join(__dirname, './theme.less')

// vue.config.js
module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        modifyVars: {
          // 直接覆盖变量
          // 'nav-bar-background-color': '#007bff'
          // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
          hack: `true; @import "${themePath}";`
        }
      }
    }
  }
}
