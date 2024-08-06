import { createSlice } from '@reduxjs/toolkit'
const authSlice = createSlice({
  name: "auth",
  initialState: {
    authMenu:[]
  },
  reducers: {
    
  }
})
const reducer = authSlice.reducer;
export {
  authSlice
}