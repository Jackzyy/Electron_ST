<template>
  <div id="collapsed" @click="handleCollapsed">
    <i v-if="appState.collapsed" class="el-icon-s-unfold" />
    <i v-else class="el-icon-s-fold" />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const appState = computed(() => store.state.app).value

    const handleCollapsed = () => {
      store.commit('app/SET_COLLAPSED', !appState.collapsed)
    }

    return {
      appState,
      handleCollapsed
    }
  }
}
</script>

<style lang="scss" scoped>
#collapsed {
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  i {
    font-size: 20px;
    margin-right: 10px;
  }
}
</style>
