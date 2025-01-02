<template>
  <el-watermark id="watermark" :font="font" :content="watermark ? ['guobin'] : ''">
    <component :is="LayoutComponents[layout]" />
    <ThemeDrawer />
  </el-watermark>
</template>
<script setup>
import { computed, reactive, ref, watch } from "vue";
import LayoutVertical from "./LayoutVertical/index.vue";
import LayoutClassic from "./LayoutClassic/index.vue";
import LayoutHorizontal from "./LayoutHorizontal/index.vue";
import LayoutColumns from "./LayoutColumns/index.vue";
import ThemeDrawer from "./components/ThemeDrawer/index.vue";

import { useGlobalStore } from "@/stores/modules/global.js";

const globalStore = useGlobalStore();
const layout = computed(() => globalStore.layout);
const LayoutComponents = {
  vertical: LayoutVertical,
  classic: LayoutClassic,
  transverse: LayoutHorizontal,
  columns: LayoutColumns
};
const isDark = computed(() => globalStore.isDark);
const watermark = computed(() => globalStore.watermark);
const font = reactive({ color: "rgba(0, 0, 0, .15)" });
watch(isDark, () => (font.color = isDark.value ? "rgba(255, 255, 255, .15)" : "rgba(0, 0, 0, .15)"), {
  immediate: true
});
</script>
