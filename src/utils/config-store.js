import cache from 'yields-store'
import querystring from 'querystring'
import { ENABLED_CONFIG_STORES, DEFAULT_CHECKBOXES, CACHE_KEYS } from '../constants'

const ConfigStore = ({ save, load }) => {
  return {
    save,
    load,
  }
}

let availableStores = {}

availableStores.cache = ConfigStore({
  save (config) {
    cache(CACHE_KEYS.CONFIG, config)
  },
  load () {
    return cache(CACHE_KEYS.CONFIG) || {}
  },
})

availableStores.querystring = ConfigStore({
  save (config) {
    let query = {
      length: config.length,
      ...config.checkboxes,
    }
    let search = '?' + querystring.stringify(query)
    try {
      if (window.history) {
        window.history.replaceState(void 0, void 0, search)
      } else {
        window.location.replace(search)
      }
    } catch (error) {
      console.error(error)
    }
  },
  load () {
    const qs = querystring.parse(window.location.search.slice(1))
    let checkboxes = {}
    Object.keys(DEFAULT_CHECKBOXES).forEach((name) => {
      if (!(name in qs)) {
        return
      }
      checkboxes[name] = qs[name] !== 'false'
    })
    return {
      length: qs.length,
      checkboxes,
    }
  },
})

const store = ConfigStore({
  save (config) {
    ENABLED_CONFIG_STORES.forEach((name) => {
      availableStores[name].save(config)
    })
  },
  load () {
    return ENABLED_CONFIG_STORES.map((name) => availableStores[name].load())
  },
})

export default store
