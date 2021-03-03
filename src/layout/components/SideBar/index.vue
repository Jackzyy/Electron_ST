<template>
  <div class="side-bar">侧边栏</div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  setup() {
    const state = reactive({})

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
.side-bar {
  height: 100vh;
  background-color: rgb(129, 90, 90);
}
</style>
