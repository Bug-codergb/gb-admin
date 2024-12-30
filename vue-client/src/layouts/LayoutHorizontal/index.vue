<template>
  <el-container class="layout">
    <el-header>
      <div class="logo flx-center">
        <img class="logo-img" src="@/assets/logo.svg" alt="logo" />
        <span class="logo-text">{{ title }}</span>
      </div>
      <el-menu mode="horizontal" :router="false" :default-active="activeMenu">
        <!-- 不能直接使用 SubMenu 组件，无法触发 el-menu 隐藏省略功能 -->
        <template v-for="subItem in menuList" :key="subItem.path">
          <el-sub-menu v-if="subItem.children?.length" :key="subItem.path" :index="subItem.path + 'el-sub-menu'">
            <template #title>
              <el-icon>
                <component :is="subItem.meta.icon"></component>
              </el-icon>
              <span>{{ subItem.meta.title }}</span>
            </template>
            <SubMenu :menu-list="subItem.children" />
          </el-sub-menu>
          <el-menu-item v-else :key="subItem.path + 'el-menu-item'" :index="subItem.path" @click="handleClickMenu(subItem)">
            <el-icon>
              <component :is="subItem.meta.icon"></component>
            </el-icon>
            <template #title>
              <span>{{ subItem.meta.title }}</span>
            </template>
          </el-menu-item>
        </template>
      </el-menu>
      <ToolBarRight />
    </el-header>
    <Main />
  </el-container>
</template>
<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import SubMenu from "../components/Menu/SubMenu.vue";
import Main from "../components/Main/index.vue";
import ToolBarLeft from "@/layouts/components/Header/ToolBarLeft.vue";
import ToolBarRight from "@/layouts/components/Header/ToolBarRight.vue";
import useAuthStore from "@/stores/modules/auth.js";

import { useGlobalStore } from "@/stores/modules/global";

const title = import.meta.env.VITE_APP_NAME;

const authStore = useAuthStore();
const menuList = computed(() => authStore.showMenuListGet);

const globalStore = useGlobalStore();
const isCollapse = computed(() => globalStore.isCollapse);

const route = useRoute();
const activeMenu = computed(() => (route.meta.activeMenu ? route.meta.activeMenu : route.path));

const router = useRouter();
const handleClickMenu = subItem => {
  if (subItem.meta.isLink) return window.open(subItem.meta.isLink, "_blank");
  router.push(subItem.path);
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
