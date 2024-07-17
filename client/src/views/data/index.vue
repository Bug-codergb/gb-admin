<template>
  <div class="table-box">
    <GbTable :columns="columns" :pagination="true" :data="tableData">
      <template #tableHeader>
        <el-form inline>
          <el-form-item label="用户名">
            <el-input placeholder="请输入用户名" />
          </el-form-item>
        </el-form>
      </template>
      <template #gender> 娜娜 </template>
      <template #employee>程序员</template>
    </GbTable>
  </div>
</template>
<script setup>
import GbTable from "@/components/GbTable/index.vue";
import { reactive } from "vue";
const columns = reactive([
  {
    label: "用户名",
    prop: "userName",
    isShow: true
  },
  {
    label: "地址",
    prop: "address",
    isShow: true
  },
  {
    label: "性别",
    prop: "gender",
    isShow: true
  },
  {
    label: "职业",
    prop: "employee",
    isShow: true
  }
]);
const tableData = [
  {
    userName: "张三",
    address: "北京朝阳",
    employee: "程序员"
  },
  {
    userName: "张三",
    address: "北京朝阳",
    employee: "程序员"
  }
];
</script>
