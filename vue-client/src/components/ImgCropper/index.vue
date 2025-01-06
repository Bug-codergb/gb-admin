<template>
  <div class="img-cropper">
    <el-dialog v-model="isShow" :title="title" :close-on-click-modal="false" :close-on-press-escape="false">
      <template #header>
        <slot name="header"></slot>
      </template>
      <div class="img-cropper-inner">
        <div class="lf">
          <img ref="imgContainerRef" class="cropper-img" :src="imgURL" />
        </div>
        <div class="rt">
          <div class="small" :style="{ aspectRatio: aspectRatio }"></div>
        </div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleCancel">取消</el-button>
          <el-button type="primary" @click="handleConfirm"> 确认 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script setup>
import { ref, reactive, nextTick } from "vue";
import Cropper from "cropperjs";

const props = defineProps({
  aspectRatio: {
    type: Number,
    default: 16 / 9
  },
  realWidth: {
    type: Number,
    default: 300
  },
  title: {
    type: String,
    default: "图片裁剪"
  }
});
const emit = defineEmits(["onFinish"]);

const isShow = ref(false);

const imgURL = ref("");
let rawFile = null;
const showDialog = file => {
  if (file && file instanceof File && file.type.includes("image")) {
    isShow.value = true;
    rawFile = new File([file], file.name, {
      type: file.type,
      lastModified: file.lastModified
    });
    imgURL.value = URL.createObjectURL(rawFile);
    nextTick(() => {
      initCropper();
    });
  } else {
    isShow.value = false;
    throw new Error("图片文件不能为空");
  }
};
const cropper = ref(null);
const imgContainerRef = ref();
function initCropper() {
  if (imgContainerRef.value) {
    cropper.value && cropper.value.destroy();
    let cropperContainer = new Cropper(imgContainerRef.value, {
      dragMode: "move",
      aspectRatio: props.aspectRatio || 16 / 9,
      viewMode: 1,
      background: false,
      zoomable: false,
      preview: ".small"
    });
    cropper.value = cropperContainer;
    cropperContainer.replace(imgURL.value);
  }
}
const getCropperFile = async () => {
  return new Promise((resolve, reject) => {
    if (cropper.value) {
      let canvasFile = cropper.value.getCroppedCanvas({
        imageSmoothingQuality: "high",
        width: props.realWidth || 300,
        imageSmoothingEnabled: false,
        fillColor: "#fff"
      });
      canvasFile.toBlob(blob => {
        if (blob && rawFile) {
          const cropperFile = new File([blob], rawFile.name, {
            type: rawFile.type
          });
          resolve(cropperFile);
        } else {
          resolve(null);
        }
      });
    } else {
      reject(new Error("cropper 不存在"));
    }
  });
};

const handleCancel = () => {
  isShow.value = false;
};
const handleConfirm = async () => {
  isShow.value = false;
  const ret = await getCropperFile();
  emit("onFinish", ret);
};
defineExpose({
  showDialog
});
</script>
<style lang="css">
@import "./style.css";
</style>
<style lang="scss" scoped>
.img-cropper-inner {
  height: 300px;
  display: flex;
  .lf {
    flex: 1;
    width: 50%;
    img {
      width: 100%;
    }
  }
  .rt {
    flex: 1;
    width: 50%;
    background-color: #f5f7fa;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0 20px;
    .small {
      overflow: hidden;
      width: calc(100% - 40px);
      img {
        width: 100% !important;
      }
    }
  }
}
</style>
