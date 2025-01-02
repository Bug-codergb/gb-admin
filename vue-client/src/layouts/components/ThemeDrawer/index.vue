<template>
  <el-drawer v-model="drawerVisible" title="布局设置" size="290px">
    <el-divider class="divider" content-position="center">
      <el-icon><Notification /></el-icon>
      布局样式
    </el-divider>
    <div class="layout-box">
      <el-tooltip effect="dark" content="纵向" placement="top" :show-after="200">
        <div :class="['layout-item layout-vertical', { 'is-active': layout == 'vertical' }]" @click="setLayout('vertical')">
          <div class="layout-dark"></div>
          <div class="layout-container">
            <div class="layout-light"></div>
            <div class="layout-content"></div>
          </div>
          <el-icon v-if="layout == 'vertical'">
            <CircleCheckFilled />
          </el-icon>
        </div>
      </el-tooltip>
      <el-tooltip effect="dark" content="经典" placement="top" :show-after="200">
        <div :class="['layout-item layout-classic', { 'is-active': layout == 'classic' }]" @click="setLayout('classic')">
          <div class="layout-dark"></div>
          <div class="layout-container">
            <div class="layout-light"></div>
            <div class="layout-content"></div>
          </div>
          <el-icon v-if="layout == 'classic'">
            <CircleCheckFilled />
          </el-icon>
        </div>
      </el-tooltip>
      <el-tooltip effect="dark" content="横向" placement="top" :show-after="200">
        <div :class="['layout-item layout-transverse', { 'is-active': layout == 'transverse' }]" @click="setLayout('transverse')">
          <div class="layout-dark"></div>
          <div class="layout-content"></div>
          <el-icon v-if="layout == 'transverse'">
            <CircleCheckFilled />
          </el-icon>
        </div>
      </el-tooltip>
      <el-tooltip effect="dark" content="分栏" placement="top" :show-after="200">
        <div :class="['layout-item layout-columns', { 'is-active': layout == 'columns' }]" @click="setLayout('columns')">
          <div class="layout-dark"></div>
          <div class="layout-light"></div>
          <div class="layout-content"></div>
          <el-icon v-if="layout == 'columns'">
            <CircleCheckFilled />
          </el-icon>
        </div>
      </el-tooltip>
    </div>
    <div class="theme-item">
      <span>
        侧边栏反转色
        <el-tooltip effect="dark" content="侧边栏颜色变为深色模式" placement="top">
          <el-icon><QuestionFilled /></el-icon>
        </el-tooltip>
      </span>
      <el-switch v-model="asideInverted" @change="setAsideTheme" />
    </div>
    <div class="theme-item mb50">
      <span>
        头部反转色
        <el-tooltip effect="dark" content="头部颜色变为深色模式" placement="top">
          <el-icon><QuestionFilled /></el-icon>
        </el-tooltip>
      </span>
      <el-switch v-model="headerInverted" @change="setHeaderTheme" />
    </div>
    <el-divider class="divider" content-position="center">
      <el-icon><ColdDrink /></el-icon>
      全局主题
    </el-divider>
    <div class="theme-item">
      <span>主题颜色</span>
      <el-color-picker v-model="primary" :predefine="colorList" @change="changePrimary" />
    </div>
    <div class="theme-item">
      <span>暗黑模式</span>
      <SwitchDark />
    </div>
    <div class="theme-item">
      <span>灰色模式</span>
      <el-switch v-model="isGrey" @change="e => changeGreyOrWeak('grey', !!e)" />
    </div>
    <div class="theme-item mb40">
      <span>色弱模式</span>
      <el-switch v-model="isWeak" @change="e => changeGreyOrWeak('weak', !!e)" />
    </div>
    <!-- 界面设置 -->
    <el-divider class="divider" content-position="center">
      <el-icon><Setting /></el-icon>
      界面设置
    </el-divider>
    <div class="theme-item">
      <span>水印</span>
      <el-switch v-model="watermark" />
    </div>
  </el-drawer>
</template>
<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import mittBus from "@/utils/mittBus";
import { DEFAULT_PRIMARY } from "@/config";
import { useGlobalStore } from "@/stores/modules/global";
import { useTheme } from "@/hooks/useTheme";
import SwitchDark from "@/components/SwitchDark/index.vue";

const drawerVisible = ref(false);
mittBus.on("openThemeDrawer", () => ((drawerVisible.value = true), console.log(12)));

const globalStore = useGlobalStore();
const { primary, isGrey, isWeak, layout, asideInverted, headerInverted, watermark } = storeToRefs(globalStore);
const colorList = [
  DEFAULT_PRIMARY,
  "#daa96e",
  "#0c819f",
  "#409eff",
  "#27ae60",
  "#ff5c93",
  "#e74c3c",
  "#fd726d",
  "#f39c12",
  "#9b59b6"
];
const { changePrimary, changeGreyOrWeak, setAsideTheme, setHeaderTheme } = useTheme();

const setLayout = key => {
  console.log(key);
  globalStore.setGlobalState("layout", key);
};
</script>
<style lang="scss" scoped>
@import "./index";
</style>
