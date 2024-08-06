import { createSlice } from '@reduxjs/toolkit'
const globalSlice = createSlice({
  name: "global",
  initialState: {
    isBreadCrumb: false,
    isCollapse:false
  },
  reducers: {
    changeKeyState: (state, action) => {
      const { payload } = action;
      state[payload.key] = payload.value;
    }
  }
})

export const { changeKeyState} = globalSlice.actions
export {
  globalSlice
}