const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: process.env.NODE_ENV === 'development', // 开发环境开启代码检查
  productionSourceMap: false, // 打包禁止生成 .map 文件，加快打包速度
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        '@a': resolve('src/assets'),
        '@c': resolve('src/components'),
        '@v': resolve('src/views'),
        '@u': resolve('src/utils'),
        '@i': resolve('src/api')
      }
    }
  },
  chainWebpack(config) {
    // 提前预加载提高切换路由的体验
    config.plugin('preload').tap(() => [
      {
        rel: 'preload',
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: 'initial'
      }
    ])
  },

  // Electron 打包配置
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        appId: 'com.zyy.app',
        productName: 'Zyy', //项目名，也是生成的安装文件名，即aDemo.exe
        copyright: `Copyright © ${new Date().getFullYear()}` //版权信息
        //win相关配置
        // win: {
        //   icon: './src/assets/logo.png' //图标，当前图标在根目录下，注意这里有两个坑
        // },
        // nsis: {
        //   oneClick: false, // 是否一键安装
        //   allowToChangeInstallationDirectory: true // 允许修改安装目录
        // }
        // 复制文件到指定目录
        // extraResources: [
        //   {
        //     from: '',
        //     to: ''
        //   }
        // ]
      }
    }
  }
}
