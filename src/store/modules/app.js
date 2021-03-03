const state = {
  collapsed: false // 展开
}

const mutations = {
  SET_COLLAPSED(state, payload) {
    state.collapsed = payload
  }
}

const actions = {}

export default {
  state,
  mutations,
  actions
}
