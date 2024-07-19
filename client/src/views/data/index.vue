<template>
  <div class="table-box">
    <GbTable :columns="columns" :pagination="true" :request-api="getMenuListApi" :requestAuto="true">
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
import { getMenuListApi } from "@/api/modules/menu.js";
import { reactive } from "vue";
const columns = reactive([
  {
    label: "ID",
    prop: "id",
    isShow: true
  },
  {
    label: "用户名",
    prop: "name",
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
    label: "学校",
    prop: "school",
    isShow: true
  },
  {
    label: "年龄",
    prop: "age",
    isShow: true
  }
]);
</script>
