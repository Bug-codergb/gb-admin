<template>
  <el-switch v-model="globalStore.isDark" inline-prompt :active-icon="Sunny" :inactive-icon="Moon" @change="switchDark" />
</template>

<script setup lang="js" name="SwitchDark">
import { useGlobalStore } from "@/stores/modules/global";
import { useTheme } from "@/hooks/useTheme";
import { Sunny, Moon } from "@element-plus/icons-vue";

const { switchDark } = useTheme();
const globalStore = useGlobalStore();
</script>
