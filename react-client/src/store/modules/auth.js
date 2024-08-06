import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const authSyncThunk = createAsyncThunk("/auth", async () => {
  
})

const authSlice = createSlice({
  name: "auth",
  initialState: {
    authMenu:[]
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(authSyncThunk.fulfilled, (state,action) => {
      
    })
  },
  selectors: {
    
  }
})

const reducer = authSlice.reducer;
export {
  authSlice
}