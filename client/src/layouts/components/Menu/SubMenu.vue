<template>
  <template v-for="subItem in menuList" :key="subItem.path">
    <el-sub-menu v-if="subItem.children?.length" :index="subItem.path">
      <template #title>
        <el-icon>
          <component :is="subItem.icon"/>
        </el-icon>
        <span>{{ subItem.meta.title }}</span>
      </template>
      <SubMenu :menu-list="subItem.children"/>
    </el-sub-menu>
    <el-menu-item v-else :index="subItem.path" @click="handleClickMenu(subItem)">
      <el-icon>
        <component :is="subItem.icon"/>
      </el-icon>  
      <template #title>
        <span>{{ subItem.meta.title }}</span>
      </template>
    </el-menu-item>
  </template>
</template>
<script setup name="SubMenu">
import { defineProps } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps({
  menuList: {
    type: Array,
    default() {
      return []
    }
  }
})
const handleClickMenu = (item) => {
  router.push(item.path);
}
</script>