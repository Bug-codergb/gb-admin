<template>
  <el-main>
    <router-view v-slot="{ Component, route }">
      <component :is="Component" />
    </router-view>
  </el-main>
</template>
<script setup name="Main"></script>
<style scoped>
.el-main {
  box-sizing: border-box;
  padding: 10px 12px;
  overflow-x: hidden;
  background-color: var(--el-bg-color-page);
}
</style>
