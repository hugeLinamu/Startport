<template>
  <router-view></router-view>
  <!-- 作用域插槽, 需要先 v-slot收到FloatContainer传递过来的数据, 再把数据传递给 TheImage -->
  <!-- <FloatContainer v-slot="receiveTheImageStyle">
    传递样式给 TheImage
    传递了FloatContainer传递过来的数据 theImageStyle
    <TheImage v-bind="receiveTheImageStyle"/>
  </FloatContainer> -->
  
  <theImageContainer/>
 
</template>

<script setup lang="ts">
import TheImage from './components/TheImage.vue';
import FloatContainer from './components/FloatContainer.vue';

import {theImageContainer } from  './composables/images'


</script>

<style scoped>

</style>
