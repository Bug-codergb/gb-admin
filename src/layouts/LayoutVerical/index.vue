<template>
  1
  <router-view v-slot="{ Component, route }">
    <component :is="Component"/>
  </router-view>
</template>
<script setup name="LayoutVerical"></script>