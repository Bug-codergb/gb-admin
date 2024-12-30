<template>
  <component :is="LayoutComponents[layout]" />
  <ThemeDrawer />
</template>
<script setup>
import { computed } from "vue";
import LayoutVertical from "./LayoutVertical/index.vue";
import LayoutClassic from "./LayoutClassic/index.vue";
import LayoutHorizontal from "./LayoutHorizontal/index.vue";
import ThemeDrawer from "./components/ThemeDrawer/index.vue";

import { useGlobalStore } from "@/stores/modules/global.js";

const globalStore = useGlobalStore();
const layout = computed(() => globalStore.layout);
const LayoutComponents = {
  vertical: LayoutVertical,
  classic: LayoutClassic,
  transverse: LayoutHorizontal
};
</script>
