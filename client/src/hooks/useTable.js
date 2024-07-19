import { reactive, computed, toRefs } from "vue";
export const useTable = (api, initParam, isPageable, dataCallback, requestError) => {
  const state = reactive({
    tableData: [],
    pageable: {
      pageNum: 1,
      pageSize: 10,
      total: 0
    },
    searchParam: {},
    searchInitParam: {},
    totalParam: {}
  });
  const pageParam = computed({
    get: () => {
      console.log(state.pageable);
      return {
        pageNum: state.pageable.pageNum,
        pageSize: state.pageable.pageSize
      };
    },
    set: newVal => {
      console.log("我是分页更新之后的值", newVal);
    }
  });
  const getTableList = async () => {
    if (!api) return;
    try {
      Object.assign(state.totalParam, initParam, isPageable ? pageParam.value : {});
      console.log(pageParam.value);
      let { data } = await api({ ...state.searchInitParam, ...state.totalParam });
      dataCallback && (data = dataCallback(data));
      state.tableData = isPageable ? data.rows : data;
      if (isPageable) {
        state.pageable.total = data.total;
      }
    } catch (e) {
      requestError && requestError(e);
    }
  };

  const updateTotalParam = () => {};

  const search = async () => {
    state.pageable.pageNum = 1;
    await getTableList();
  };

  const handleSizeChange = value => {
    state.pageable.pageSize = value;
    state.pageable.pageNum = 1;
    getTableList();
  };
  const handleCurrentChange = val => {
    state.pageable.pageNum = val;
    console.log(state.pageable);
    getTableList();
  };

  return {
    ...toRefs(state),
    getTableList,
    search,
    handleSizeChange,
    handleCurrentChange
  };
};
