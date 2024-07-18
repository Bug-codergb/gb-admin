<script setup name="App">
import { useTheme } from "@/hooks/useTheme";
const { initTheme } = useTheme();
initTheme();
</script>
<template>
  <el-config-provider>
    <router-view></router-view>
  </el-config-provider>
</template>

<style scoped></style>
