//! 全局store

export default (handleRequest, API, RESTORE_MUTATION) => {
  const state = {
    user: {},
    reloadHash: ''
  }

  const mutations = {
    RESTORE_MUTATION: RESTORE_MUTATION,
    // 清空缓存
    RESET(state, payload = {}) {
      state.user = {}
    },
    // 记录重载页面
    SAVE_RELOAD_HASH(state, hash) {
      state.reloadHash = hash || ''
    },
  }

  const actions = {
    reset({commit}, data = {}) {
      commit('RESET')
    },
    savaReloadHash({commit}, hash) {
      commit('SAVE_RELOAD_HASH', hash)
    }
  }

  const getters = {}


  return {
    state,
    mutations,
    actions,
    getters
  }
}
