export const SNACKBAR_TIMEOUT = 2000

export const DEFAULT_LENGTH = 16
export const DEFAULT_CHECKBOXES = {
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: false,
}

export const MAX_LENGTH = 1024

export const ENABLED_CONFIG_STORES = [
  'cache',
  'querystring',
]

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
