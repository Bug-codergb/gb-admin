<template>
  <div class="card table-main">
    <div class="table-header" :class="{ 'flx-align-center': !isExpand, 'flx-items-end': isExpand }">
      <div class="flx">
        <div class="header-button-lf" ref="tableHeaderLeft" :class="{ 'no-expand': !isExpand }">
          <slot name="tableHeader" />
        </div>
        <div v-if="toolButton" class="header-button-ri">
          <slot name="toolButton"> </slot>
        </div>
      </div>
      <div class="flx-center expand" @click="handleExpand">
        <div class="expand-text">
          {{ isExpand ? "收起" : "展开" }}
        </div>
        <el-icon v-if="!isExpand"><ArrowDown /></el-icon>
        <el-icon v-if="isExpand"><ArrowUp /></el-icon>
      </div>
    </div>
    <el-table ref="tableRef" :data="data ?? tableData" :border="border">
      <slot></slot>
      <template v-for="item in tableColumns" :key="item">
        <!-- 特殊列 -->
        <el-table-column
          v-if="item.type && ['selection', 'index', 'expand'].includes(item.type)"
          v-bind="item"
          :align="item.align ?? 'center'"
        >
          <template v-if="item.type === 'expand'" #default="scope">
            <component :is="item.render" v-bind="scope" v-if="item.render"></component>
            <slot v-else :name="item.type" v-bind="scope" />
          </template>
        </el-table-column>

        <TableColumn v-if="!item.type && item.prop && item.isShow" :column="item">
          <template v-for="slot in Object.keys($slots)" #[slot]="scope">
            <slot :name="slot" v-bind="scope"></slot>
          </template>
        </TableColumn>
      </template>
    </el-table>
    <slot name="pagination">
      <Pagination
        v-if="pagination"
        :pageable="pageable"
        :handle-size-change="handleSizeChange"
        :handle-current-change="handleCurrentChange"
      />
    </slot>
  </div>
</template>
<script setup name="ProTable" lang="jsx">
import { defineProps, ref, onMounted, defineExpose, computed, useTemplateRef, nextTick } from "vue";
import cloneDeep from "lodash/cloneDeep";
import TableColumn from "./components/TableColumn.vue";
import Pagination from "./components/Pagination.vue";
import { useTable } from "@/hooks/useTable.js";
const props = defineProps({
  columns: {
    type: Array,
    default() {
      return [];
    }
  },
  data: {
    type: Array,
    default: null
  },
  requestApi: {
    type: Function,
    default() {
      return () => {};
    }
  },
  requestAuto: {
    type: Boolean,
    default: false
  },
  dataCallback: {
    type: Function,
    default: null
  },
  pagination: {
    type: Boolean,
    default: false
  },
  initParam: {
    type: Object,
    default() {
      return {};
    }
  },
  border: {
    type: Boolean,
    default: false
  },
  toolButton: {
    type: Boolean,
    default: true
  },
  rowKey: {
    type: String,
    default: "id"
  },
  searchCol: {
    type: Number,
    default: 1
  }
});
const isExpand = ref(false);
const tableHeaderLeftRef = useTemplateRef("tableHeaderLeft");
const itemHeight = ref(0);
const tableHeaderLeftRawHeight = ref(0);
nextTick(() => {
  const tableHeaderLeftEl = tableHeaderLeftRef.value;
  tableHeaderLeftRawHeight.value = tableHeaderLeftEl.offsetHeight;
  let children = tableHeaderLeftEl.children;
  while (children && children.length < 2) {
    children = children[0] ? children[0].children : null;
  }
  if (children && children.length > 1) {
    isExpand.value = false;
    const firstChild = children[0];
    const style = getComputedStyle(firstChild);
    itemHeight.value = children[0].offsetHeight + parseInt(style.marginBottom);
    tableHeaderLeftEl.style.height = `${itemHeight.value}px`;
  } else {
    isExpand.value = true;
  }
  console.log(itemHeight.value);
  console.log(isExpand.value);
});
const handleExpand = () => {
  isExpand.value = !isExpand.value;
  const tableHeaderLeftEl = tableHeaderLeftRef.value;
  if (isExpand.value) {
    tableHeaderLeftEl.style.height = `auto`; //`${tableHeaderLeftRawHeight.value}px`;
  } else {
    tableHeaderLeftEl.style.height = `${itemHeight.value}px`;
  }
};

const { tableData, pageable, searchParam, searchInitParam, getTableList, search, handleSizeChange, handleCurrentChange } =
  useTable(props.requestApi, props.initParam, props.pagination, props.dataCallback, undefined);
const tableRef = ref();
onMounted(() => {
  props.requestAuto && getTableList();
  props.data && (pageable.value.total = props.data.length);
});

const tableColumns = computed(() => {
  const columns = cloneDeep(props.columns);
  columns.forEach(item => {
    item.isShow = item.isShow ?? true;
  });
  return columns;
});

//todo
const flatColumnsFunc = columns => {
  columns.forEach(item => {
    console.log(item);
    item.isShow = item.isShow ?? true;
  });
};
//todo
const flatColumns = computed(() => flatColumnsFunc(tableColumns.value));
defineExpose({
  search,
  tableRef
});
</script>
<style lang="scss" scoped>
.expand {
  cursor: pointer;
  margin: 0 0 15px 10px;
  .expand-text {
    white-space: nowrap;
    margin: 0 3px 0 0;
    color: var(--el-color-primary);
    font-size: 14px;
  }
  .el-icon {
    color: var(--el-color-primary);
  }
}
.no-expand {
  overflow: hidden;
}
</style>
