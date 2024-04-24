<template>
  <el-container class="layout">
    <el-aside>
      <div class="aside-box" :style="{ width: isCollapse ? '65px' : '210px' }">
        <el-scrollbar>
          <el-menu :router="false" :collapse="isCollapse">
             <SubMenu :menu-list="menuList"/> 
          </el-menu>
        </el-scrollbar>
      </div>
    </el-aside>
    <el-container>
      <el-header>header</el-header>
      <Main/>
    </el-container>
  </el-container>
  
</template>
<script setup name="LayoutVerical">
import { computed, ref } from "vue";
import SubMenu from "../components/Menu/SubMenu.vue";
import Main from "../components/Main/index.vue"
import useAuthStore from "@/stores/modules/auth.js";
const authStore = useAuthStore();
console.log(authStore) 
const isCollapse = ref(false);
const menuList = computed(() => authStore.authMenuListGet)
console.log(menuList);
</script>