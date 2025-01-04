<template>
  <div class="home">
    <ProTable :columns="columns" :requestApi="getUserListApi" :pagination="true" :requestAuto="true" :dataCallback="handleDataCallback">
      <template #tableHeader>
        <el-form inline>
          <el-form-item label="用户名">
            <el-input v-model="searchParams.name" placeholder="请输入用户名"/>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input-number v-model="searchParams.age"/>
          </el-form-item>
          <el-form-item label="部门">
            <el-select v-model="searchParams.dept" style="width:150px">
              <el-option label="研发" value="1"></el-option>
              <el-option label="测试" value="2"></el-option>
              <el-option label="产品" value="3"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="性别">
            <el-radio-group v-model="searchParams.gender">
              <el-radio :value="0">男</el-radio>
              <el-radio :value="1">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="地址">
            <el-input v-model="searchParams.address" placeholder="请输入地址"/>
          </el-form-item>
        </el-form>
      </template>
    <template #toolButton>
      <el-button type="primary">新增</el-button>
      <el-button type="danger">批量导入</el-button>
      <el-button type="success">模板下载</el-button>
    </template>
    </ProTable>
    <!-- <button @click="handleUser">用户详情</button> -->
  </div>
</template>
<script name="home" setup lang="jsx">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import ProTable from "@/components/ProTable/index.vue";
import { getUserListApi } from "@/api/modules/user.js";
const router = useRouter();
const handleUser = () => {
  router.push({
    path: "/user/index"
  });
};
const handleDataCallback=(val)=>{
 // console.log(val);
  // return {
  //   code:200,
  //   rows:[],
  //   total:0
  // }
  return val;
}
const searchParams=reactive({
  name:"",
  age:13,
  dept:[],
  gender:1,
  address:""
})
const columns = reactive([
  {
    label: "序号",
    type: "index"
  },
  {
    label: "用户名你",
    prop: "userName"
  },
  {
    label: "密码",
    prop: "password"
  },
  {
    label: "年龄",
    prop: "age"
  },
  {
    label: "部门",
    prop: "dept"
  },
  {
    label: "性别",
    prop: "gender",
    render: scope => {
      return scope.row.gender === 1 ? "女" : "男";
    }
  },
  {
    label: "地址",
    prop: "address"
  },
  {
    label: "操作",
    prop: "action",
    render:(scope)=>{
      return <el-space>
        <el-link type="primary">编辑</el-link>
        <el-link type="danger">删除</el-link>
      </el-space>
    }
  }
]);
</script>
<style scoped lang="scss">
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>
, useRoute
