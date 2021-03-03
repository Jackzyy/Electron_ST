<template>
  <div class="nav-bar">头部</div>
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
.nav-bar {
  background-color: rgb(124, 104, 104);
}
</style>
