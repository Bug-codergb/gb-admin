<template>
  <el-container class="layout">
    <el-header>
      <div class="header-lf">
        <div class="logo flx-center">
          <img class="logo-img" src="@/assets/logo.svg" />
          <span class="logo-text">{{ title }}</span>
        </div>
        <ToolBarLeft />
      </div>
      <div class="header-ri">
        <ToolBarRight />
      </div>
    </el-header>
    <el-container class="classic-content">
      <el-aside>
        <div class="aside-box" :style="{ width: isCollapse ? '65px' : '210px' }">
          <el-scrollbar>
            <el-menu :router="false" :default-active="activeMenu" :collapse="isCollapse" :collapse-transition="false">
              <SubMenu :menu-list="menuList" />
            </el-menu>
          </el-scrollbar>
        </div>
      </el-aside>
      <el-container class="classic-main">
        <Main />
      </el-container>
    </el-container>
  </el-container>
</template>
<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
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
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
