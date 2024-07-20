<template>
  <el-drawer v-model="drawerVisible" title="布局设置" size="290px"></el-drawer>
</template>
<script setup>
import { ref } from "vue";
import mittBus from "@/utils/mittBus";

const drawerVisible = ref(false);
mittBus.on("openThemeDrawer", () => ((drawerVisible.value = true), console.log(12)));
</script>
