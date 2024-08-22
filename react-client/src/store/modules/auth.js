import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const authSyncThunk = createAsyncThunk("/auth", async () => {
  
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
      
    })
  },
  selectors: {
    
  }
})


export const {changeAuthKeyState} = authSlice.actions
export {
  authSlice
}