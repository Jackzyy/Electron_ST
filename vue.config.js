module.exports = {
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
