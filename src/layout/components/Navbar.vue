<template>
  <div class="nav-bar">
    <Collapsed />
    <FullScreen />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import Collapsed from '@/components/Collapsed'
import FullScreen from '@/components/FullScreen'
export default {
  components: {
    Collapsed,
    FullScreen
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
.nav-bar {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
