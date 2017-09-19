import Vuex from 'vuex'
import * as mutations from './mutations.js'

const store = new Vuex.Store({
  mutations,
  state: {
    lists: {},
    activeType: null,
    count: 20,
    getters: {
      listData (state) {
        return state.lists
      },
      activeItems (state) {
        const {activeType, lists, count} = state
        var data = lists[activeType]
        return (activeType && data && data.length) ? data.slice(0, count) : []
      }
    }
  }
})

export default store
