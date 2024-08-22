import { createSlice } from "@reduxjs/toolkit";
import localCache from "../../utils/cache"
const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: "",
    avatarUrl: "",
    token:""
  },
  reducers: {
    changeUserKeyState(state, action) {
      console.log(state,action)
      const { payload } = action;
      state[payload.key] = payload.value;
      localCache.update("user",payload.key,payload.value)
    }
  }
})
export const {changeUserKeyState } = userSlice.actions;
export {
  userSlice
}