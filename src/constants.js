const CACHE_PREFIX = 'password-generator:'
export const CACHE_KEYS = (() => {
  let keys = {
    CONFIG: 'config',
  }
  for (let name in keys) {
    keys[name] = `${CACHE_PREFIX}${keys[name]}`
  }
  return keys
})()
