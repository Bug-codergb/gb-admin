import localCache from "../../utils/cache";
import { createSlice } from "@reduxjs/toolkit"
const routeSlice = createSlice({
  name:"route",
  initialState: {
    prevRoute:null
  },
  reducers: {
    changeRouteKeyState: (state, action) => {
      const { payload } = action;
      state[payload.key] = payload.value;
      localCache.update("route", payload.key, payload.value);
    }
  }
})
export const { changeRouteKeyState } = routeSlice.actions
export {
  routeSlice
}