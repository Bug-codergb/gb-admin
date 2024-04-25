import { createApp } from "vue";
import ElementPlus from "element-plus";
import "./styles/element.scss";
// element css
import "element-plus/dist/index.css";
// element icons
import * as Icons from "@element-plus/icons-vue";

import router from "@/router/index.js";
console.log(router.getRoutes())
import App from "./App.vue"
const app = createApp(App)

import pinia from "@/stores";
// register the element Icons component
Object.keys(Icons).forEach(key => {
  app.component(key, Icons[key]);
});

app.use(ElementPlus).use(router).use(pinia);
app.mount(document.getElementById("app"))