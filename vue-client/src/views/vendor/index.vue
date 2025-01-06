<template>
  <div class="card table-box">
    <el-button type="warning" @click="handleFileUpload">文件上传</el-button>
    <input type="file" @change="handleFileChange" />
    <ImgCropper ref="imgCropperRef" @onFinish="handleFinish" :aspectRatio="16 / 9"> </ImgCropper>
    <img v-if="imgURL" :src="imgURL" width="200" />
    <ProDrawer v-model="isShowDrawer" width="35%" title="哈哈哈"> 2221111 </ProDrawer>
  </div>
</template>
<script setup>
import { ref } from "vue";
import ImgCropper from "@/components/ImgCropper/index";
import ProDrawer from "@/components/ProDrawer/index";
const isShowDrawer = ref(false);
const handleFileUpload = () => {
  isShowDrawer.value = true;
};

const imgCropperRef = ref(null);

const handleFileChange = e => {
  let file = e.currentTarget.files[0];
  console.log(file);
  imgCropperRef.value && imgCropperRef.value.showDialog(file);
  file = null;
};

const imgURL = ref("");
const handleFinish = file => {
  imgURL.value = URL.createObjectURL(file);
};
</script>
