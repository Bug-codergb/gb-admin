import { configureStore } from '@reduxjs/toolkit'
import { getShowMenu, getFlatMenu } from "@/utils/menu.jsx";
import { authSlice } from "./modules/auth"
import { globalSlice } from "./modules/global"
import { userSlice}  from "./modules/user"
import { routeSlice } from "./modules/route"

const store = configureStore({
  reducer: {
    global: globalSlice.reducer,
    auth: authSlice.reducer,
    user: userSlice.reducer,
    route:routeSlice.reducer
  }
})

const routes = []

export const showMenuList= []//getShowMenu(routes)
export const flatMenuList = []//getFlatMenu(routes)
export { routes,store };
