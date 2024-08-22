import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUserAuthMenuApi } from "../../api/modules/user/index";

const authSyncThunk = createAsyncThunk("/auth", async () => {
  const res = await getUserAuthMenuApi();
  console.log(res)
  return res.data;
})

const authSlice = createSlice({
  name: "auth",
  initialState: {
    authMenu:[]
  },
  reducers: {
    changeAuthKeyState: (state, action) => {
      const { payload } = action;
      state[payload.key] = payload.value;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(authSyncThunk.fulfilled, (state,action) => {
      state.authMenu = []
    })
  },
  selectors: {

  }
})
const {changeAuthKeyState } = authSlice.actions;
export {
  authSlice,
  changeAuthKeyState
}