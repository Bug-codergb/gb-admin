<template>
  <el-container class="layout">
    <div class="aside-split">
      <div class="logo flx-center">
        <img class="logo-img" src="@/assets/logo.svg" alt="logo" />
      </div>
      <el-scrollbar>
        <div class="split-list">
          <div
            v-for="item in menuList"
            :key="item.path"
            class="split-item"
            :class="{ 'split-active': splitActive === item.path || `/${splitActive.split('/')[1]}` === item.path }"
            @click="changeSubMenu(item)"
          >
            <el-icon>
              <component :is="item.meta.icon"></component>
            </el-icon>
            <span class="title">{{ item.meta.title }}</span>
          </div>
        </div>
      </el-scrollbar>
    </div>
    <el-aside :class="{ 'not-aside': !subMenuList.length }" :style="{ width: isCollapse ? '65px' : '210px' }">
      <div class="logo flx-center">
        <span v-show="subMenuList.length" class="logo-text">{{ isCollapse ? "G" : title }}</span>
      </div>
      <el-scrollbar>
        <el-menu :router="false" :default-active="activeMenu" :collapse="isCollapse" :collapse-transition="false">
          <SubMenu :menu-list="subMenuList" />
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <el-container>
      <el-header>
        <ToolBarLeft />
        <ToolBarRight />
      </el-header>
      <Main />
    </el-container>
  </el-container>
</template>
<script setup>
import { computed, watch, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import SubMenu from "../components/Menu/SubMenu.vue";
import Main from "../components/Main/index.vue";
import ToolBarLeft from "@/layouts/components/Header/ToolBarLeft.vue";
import ToolBarRight from "@/layouts/components/Header/ToolBarRight.vue";
import useAuthStore from "@/stores/modules/auth.js";

import { useGlobalStore } from "@/stores/modules/global";

const title = import.meta.env.VITE_APP_NAME;

const router = useRouter();

const authStore = useAuthStore();
const menuList = computed(() => authStore.showMenuListGet);

const globalStore = useGlobalStore();
const isCollapse = computed(() => globalStore.isCollapse);

const route = useRoute();
const activeMenu = computed(() => (route.meta.activeMenu ? route.meta.activeMenu : route.path));

const subMenuList = ref([]);
const splitActive = ref("");
watch(
  () => [menuList, route],
  () => {
    // 当前菜单没有数据直接 return
    if (!menuList.value.length) return;
    console.log(route.path);
    splitActive.value = route.path;
    const menuItem = menuList.value.filter(item => {
      return route.path === item.path || `/${route.path.split("/")[1]}` === item.path;
    });
    if (menuItem[0]?.children?.length) return (subMenuList.value = menuItem[0].children);
    subMenuList.value = [];
  },
  {
    deep: true,
    immediate: true
  }
);

const changeSubMenu = item => {
  splitActive.value = item.path;
  if (item.children?.length) return (subMenuList.value = item.children);
  subMenuList.value = [];
  router.push(item.path);
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
