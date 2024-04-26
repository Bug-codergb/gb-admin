<template>
  <div class="table-box">
    <GbTable 
      :columns="columns" 
      :border="true" 
      :requestApi="getMenuListApi" 
      :pagination="false"
      :initParam="{}"
      ref="tableRef">
      <template #icon="scope">
        <el-icon>
          <component :is="scope.row.icon"/>
        </el-icon>
      </template>
    </GbTable>
  </div>
</template>
<script setup lang="jsx">
import { onMounted, ref,nextTick } from "vue";
import GbTable from "@/components/GbTable/index.vue"
import { getMenuListApi } from "@/api/modules/menu.js"
const tableRef = ref();
nextTick(() => {
  tableRef.value && tableRef.value.search();
})
const columns = ref([
  {
    label: "页面url",
    prop: "path",
    isShow:true
  },
  {
    label: "组件路径",
    prop: "component",
    isShow:true
  },
  {
    label: "路由名称",
    prop: "name",
    isShow:true
  },
  {
    label: "图标",
    prop: "icon",
    isShow: true,
  }
])
</script>