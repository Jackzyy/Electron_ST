<template>
  <el-container class="app-wrapper">
    <el-aside>
      <SideBar />
    </el-aside>
    <el-container>
      <el-header>
        <Navbar />
      </el-header>
      <el-main>
        <el-scrollbar>
          <AppMain />
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { Navbar, SideBar, AppMain } from './components'
export default {
  components: {
    Navbar,
    SideBar,
    AppMain
  },
  setup() {
    const state = reactive({})

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-aside {
  width: auto !important;
  height: calc(100vh - 10px);
  border-radius: 6px;
  margin: 5px 0 5px 5px;
  background: #545c64;
}
.el-header {
  border-radius: 6px;
  margin: 5px 10px 0;
  background-color: #fff;
}
.el-main {
  height: calc(100vh - 85px);
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
}
</style>
