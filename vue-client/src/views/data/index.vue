<template>
  <div class="table-box">
    <ProTable :columns="columns" :pagination="true" :request-api="getMenuListApi" :requestAuto="true">
      <template #tableHeader>
        <el-form inline>
          <el-form-item label="用户名">
            <el-input placeholder="请输入用户名" />
          </el-form-item>
        </el-form>
      </template>
      <template #gender> 娜娜 </template>
      <template #employee>程序员</template>
    </ProTable>
  </div>
</template>
<script setup>
import ProTable from "@/components/ProTable/index.vue";
import { getMenuListApi } from "@/api/modules/menu.js";
import { reactive } from "vue";
const columns = reactive([
  {
    label: "ID",
    prop: "id"
  },
  {
    label: "用户名",
    prop: "name"
  },
  {
    label: "地址",
    prop: "address"
  },
  {
    label: "性别",
    prop: "gender"
  },
  {
    label: "学校",
    prop: "school"
  },
  {
    label: "年龄",
    prop: "age",
    isShow: true
  }
]);
</script>
