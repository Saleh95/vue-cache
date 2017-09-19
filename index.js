import store from './dist/store.js'
import Data from './dist/data.js'
import CachedData from './dist/storage.js'

const cache = {
  install (Vue, options) {
    (function init () {
      var cachedData = new CachedData(options.appkey)
      cachedData.get()
      .then(val => {
        if (val.length > 0) {
          store.commit('initStore', val)
        }
      })
    })()

    let dataHandler = new Data(options.http)

    Vue.prototype.$data = {
      fetchList: (path, type) => {
        return store.state.lists[type].length > 0
        ? Promise.resolve(store.state.lists[type])
        : dataHandler.fetch(path)
        .then(ids => store.commit('setList', {type: type, val: ids}))
      },
      fetchDetail: (path, type, keys) => {
        return keys && keys[0] in store.state.lists[type]
        ? Promise.resolve(store.state.lists[type])
        : Promise.all(keys.map(key => {
          dataHandler.fetch(`${path}/${keys[key]}`)
          .then(ids => store.commit('addItem', {type: type, key: key, val: ids}))
        }))
      },
      fetchItem: (path, id, type) => {
        return store.lists[type][id]
        ? Promise.resolve(store.lists[type][id])
        : dataHandler.fetchById(path, id)
        .then(val => {
          store.commit('appendList', {type: type, id: id, val: val})
        })
      },
      addData: (path, type, data) => {
        return dataHandler.create(path, data)
        .then(() => {
          var id = store.lists[type].length
          this.fetchItem(path, id, type)
        })
      }
    }
  }
}

export default cache
