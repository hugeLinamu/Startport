<template>
  <div >
    <img v-if="flag" @click="flag = !flag" :style="theImageStyle"
      src="https://images.unsplash.com/photo-1638497424199-e455a6265fe9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      alt="">
    <img v-else @click="flag=!flag" :style="theImageStyle"
      src="https://images.unsplash.com/photo-1675320458457-fe4576cbd0f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
      alt="">
  </div>


</template>

<script setup lang="ts">
import { ref } from 'vue'

const flag = ref(true)
defineProps<{
  theImageStyle: {},
}>()

</script>
<style scoped>
img{
  transition: all 0.5s linear;
}
</style>
