/**
 * v-copy
 * 复制某个值至剪贴板
 * 接收参数：string类型/Ref<string>类型/Reactive<string>类型
 */
import { ElMessage } from "element-plus";
const copy = {
  mounted(el, binding) {
    el.copyData = binding.value;
    el.addEventListener("click", handleClick);
  },
  updated(el, binding) {
    el.copyData = binding.value;
  },
  beforeUnmount(el) {
    el.removeEventListener("click", handleClick);
  }
};

async function handleClick(_this) {
  try {
    await navigator.clipboard.writeText(_this.copyData);
    ElMessage({
      type: "success",
      message: "复制成功"
    });
  } catch (err) {
    console.error("复制操作不被支持或失败: ", err);
  }
}

export default copy;