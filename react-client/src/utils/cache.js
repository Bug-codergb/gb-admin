class LocalCache {
  set(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  get(key) {
    if (key && typeof key === "string") {
      const value = window.localStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      }
    }
    return null;
  }
  remove(key) {
    if (key && typeof key === "string") {
      window.localStorage.removeItem(key);
    }
  }
  clear() {
    window.localStorage.clear();
  }
  update(objKey,key,value) {
    let cache = this.get(objKey);
    !cache && (cache = {})
    cache[key] = value;
    this.set("global",cache);
  }
}
export default new LocalCache();
