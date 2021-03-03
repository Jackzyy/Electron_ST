import { createStore } from 'vuex'
import getters from './getters'

// 动态导入
const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  modules[moduleName]['namespaced'] = true // 命名空间
  return modules
}, {})

export default createStore({
  modules,
  getters
})
