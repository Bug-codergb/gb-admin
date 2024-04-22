<template>
  <div>
    <button @click="login">登录</button>
  </div>
</template>
<script setup>
import { initDynamicRouter } from "@/router/modules/dynamicRouter";
import { useRouter } from "vue-router"
import { HOME_URL} from "@/config/index"
const router = useRouter();
const login = () => {
  console.log(1)
  initDynamicRouter();
  router.push({
    path:HOME_URL
  })
}
</script>