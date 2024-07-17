import { createApp } from "vue";
import ElementPlus from "element-plus";
import "./styles/element.scss";
import "./styles/common.scss";
import "@/styles/reset.scss";
// element css
import "element-plus/dist/index.css";
// element dark css
import "element-plus/theme-chalk/dark/css-vars.css";
// element icons
import * as Icons from "@element-plus/icons-vue";

import router from "@/router/index.js";

import App from "./App.vue";
const app = createApp(App);

import pinia from "@/stores";
// register the element Icons component
Object.keys(Icons).forEach(key => {
  app.component(key, Icons[key]);
});

app.use(ElementPlus).use(router).use(pinia);
app.mount(document.getElementById("app"));
