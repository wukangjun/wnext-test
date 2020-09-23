<template>
  <view v-if="b">
    <header :a="c">{{count}}</header>
    <header>{{count > 0 ? double : hello}}</header>
    <view @click="handler">hello world</view>
  </view>
</template>

<script>
import { ref } from '@vue/reactivity'
import Shop from '../shop/index.vue'

export default {
  setup() {
    const count = ref(0)
    const handler = () => {
      count.value++
    }

    return {
      count,
      handler
    }
  }
}
</script>

