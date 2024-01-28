import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
  state() {
    return {
      userInfo: {},
      token: '',
      count: 666
    }
  },
  mutations: {
    add(state) {
      state.count++
    },
    setUserInfo(state, data) {
      state.userInfo = data
    },
    setToken(state, data) {
      state.token = data
    }
  },
  plugins: [createPersistedState()]
})

export default store
