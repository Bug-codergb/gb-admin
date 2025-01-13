import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUserAuthMenuApi } from "../../api/modules/user/index";
import { formatMenu } from "@/utils/menu"
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
      state.authMenu = action.payload;
      localCache.update('auth',"authMenuList",action.payload)
    })
  },
  selectors: {
    flatMenuList:(state)=>{
      console.log(1)
      return formatMenu(state.authMenuList);
    }
  }
})
const {changeAuthKeyState } = authSlice.actions;
export {
  authSlice,
  changeAuthKeyState,
  authSyncThunk
}