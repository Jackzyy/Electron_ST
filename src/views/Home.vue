<template>
  <div>COUNT:{{ number }}</div>
  <div>{{ computedNum }}</div>
  <el-button @click="add">增加</el-button>
  <el-button @click="reset">重置</el-button>
</template>

<script>
import { reactive, toRefs, watch, computed, onMounted } from 'vue'
export default {
  setup() {
    let obj = reactive({ number: 0 })
    function add() {
      obj.number++
    }
    function reset() {
      obj.number = 0
    }

    const computedNum = computed(() => {
      return obj.number + 1000
    })

    watch(
      () => obj.number,
      (newValue, oldValue) => {
        console.log(newValue, oldValue)
      }
    )

    onMounted(() => {
      console.log(222)
    })

    return {
      ...toRefs(obj),
      computedNum,
      add,
      reset
    }
  }
}
</script>

<style lang="scss" scoped></style>
