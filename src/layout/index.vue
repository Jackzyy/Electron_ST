<template>
  <div class="app-wrapper">
    <el-container>
      <el-aside width="200px">
        <SideBar />
      </el-aside>
      <el-container>
        <el-header>
          <Navbar />
        </el-header>
        <el-main>
          <AppMain />
        </el-main>
      </el-container>
    </el-container>
  </div>
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

<style lang="scss" scoped></style>
