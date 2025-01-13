import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUserAuthMenuApi } from "../../api/modules/user/index";
import { getFlatMenuList } from "@/utils/menu"
import localCache from "@/utils/cache"
const authSyncThunk = createAsyncThunk("/auth", async () => {
  const res = await getUserAuthMenuApi();
  return res.data;
})

const authSlice = createSlice({
  name: "auth",
  initialState: {
    authMenuList:[]
  },
  reducers: {
    changeAuthKeyState: (state, action) => {
      const { payload } = action;
      state[payload.key] = payload.value;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(authSyncThunk.fulfilled, (state,action) => {
      state.authMenuList = action.payload;
      localCache.update('auth',"authMenuList",action.payload)
    })
  },
  selectors: {
    selectFlatMenuList:(state)=>{
      
      const flatMenu = getFlatMenuList(state.authMenuList)
      console.log(flatMenu)
      return flatMenu;
    }
  }
})
const {changeAuthKeyState } = authSlice.actions;
const {selectFlatMenuList} = authSlice.selectors;
export {
  authSlice,
  changeAuthKeyState,
  authSyncThunk,
  selectFlatMenuList
}