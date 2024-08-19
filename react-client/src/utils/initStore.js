import localCache from "../utils/cache"
import { changeKeyState } from "../store/modules/global"
export default function initStore(store) {
  const globalCache = localCache.get("global");
  if (globalCache) {
    for (const key in globalCache) {
      store.dispatch(changeKeyState({ key,value: globalCache[key]}))   
    }
  }
}