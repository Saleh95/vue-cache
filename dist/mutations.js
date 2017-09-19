import Vue from 'vue'

export function initStore (state, {val}) {
  Object.assign(state, val)
}

export function setActiveType (state, {type}) {
  state.activeType = type
}

export function setList (state, {type, val}) {
  val.forEach(item => {
    Vue.set(state.lists[type], item.id, item)
  })
}

export function appendList (state, {type, id, val}) {
  state.lists[type][id] = val
}

export function appendDetail (state, {type, id, key, val}) {
  state.lists[type][id][key] = val
}
