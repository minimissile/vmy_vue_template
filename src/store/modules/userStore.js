// 用户信息
export default (handleRequest, API) => {
  const state = {
    user: {
      name: '张三'
    },
    dynamicList: []
  }

  const mutations = {
    SAVE_USER_INFO(state, payload = {}) {
      state.user = payload
    },

    SAVE_DYNAMIC_LIST(state, payload = []) {
      state.dynamicList = payload
    }
  }

  const getters = {}

  const actions = {
    // 保存用户信息
    saveUserInfo({commit}, data = {}) {
      commit('SAVE_USER_INFO', data)
    },

    // 获取动态列表
    dynamicList({commit}, params = {}) {
      return handleRequest.get(API["dynamic.list"], {params, err: true, loading: true,id: 'dynamic.list'}).then((data = {}) => {
        const rows = data.rows || []
        commit('SAVE_DYNAMIC_LIST', rows)
        return rows
      })
    }
  }

  return {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
  }
}
