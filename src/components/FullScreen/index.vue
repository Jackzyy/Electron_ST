<template>
  <div id="full-screen" @click="handleFullScreen">
    <i class="el-icon-full-screen"></i>
  </div>
</template>

<script>
import screenfull from 'screenfull'

export default {
  setup() {
    const handleFullScreen = () => {
      if (screenfull.isEnabled) {
        screenfull.isFullscreen ? screenfull.exit() : screenfull.request()
      }
    }

    return {
      handleFullScreen
    }
  }
}
</script>

<style lang="scss" scoped>
#full-screen {
  cursor: pointer;
  i {
    font-size: 20px;
    margin: 0 12px;
  }
}
</style>
