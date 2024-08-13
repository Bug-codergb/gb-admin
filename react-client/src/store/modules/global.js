import { createSlice } from '@reduxjs/toolkit'
const globalSlice = createSlice({
  name: "global",
  initialState: {
    isBreadCrumb: true,
    isCollapse: false,
    primaryColor: "#3875f6",
    isWatermark: true,
    isDark:false
  },
  reducers: {
    changeKeyState: (state, action) => {
      const { payload } = action;
      console.log(action)
      state[payload.key] = payload.value;
    }
  }
})

export const { changeKeyState} = globalSlice.actions
export {
  globalSlice
}