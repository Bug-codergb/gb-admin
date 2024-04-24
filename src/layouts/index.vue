<template>
  <div>
    layouts
    <component :is="LayoutVerical"/> 
  </div>
</template>
<script setup>
import LayoutVerical from "./LayoutVerical/index.vue";
console.log(123)
</script>