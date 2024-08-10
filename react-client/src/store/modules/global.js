import { createSlice } from '@reduxjs/toolkit'
const globalSlice = createSlice({
  name: "global",
  initialState: {
    isBreadCrumb: false,
    isCollapse: false,
    primaryColor:"#3875f6"
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