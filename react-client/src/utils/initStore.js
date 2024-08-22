import localCache from "../utils/cache"
import { changeKeyState } from "../store/modules/global"
import {changeAuthKeyState } from "../store/modules/auth";
import { changeUserKeyState} from "../store/modules/user";
import {changeRouteKeyState } from "../store/modules/route"
function getCacheState(store,reducer,key) {
  const globalCache = localCache.get(key);
  if (globalCache) {
    for (const key in globalCache) {
      store.dispatch(reducer({ key,value: globalCache[key]}))   
    }
  }
}
export default function initStore(store) {
  getCacheState(store,changeKeyState,"global",)
  getCacheState(store,changeUserKeyState,"user",)
  getCacheState(store,changeRouteKeyState,"route",)
  getCacheState(store,changeAuthKeyState,"auth",)
}