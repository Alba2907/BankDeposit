import { createStore, createLogger } from 'vuex'
// регистрируем модули
import auth from './modules/auth.module'
import request from './modules/request.module'


// мы добавляем логер но только режиме разработчика
const plugins = []

if (process.env.NODE_ENV === 'development') {
  plugins.push(createLogger())
}

export default createStore({
  plugins,

  state() {
    return {
      message: null,
      sidebar: false
    }
  },
  mutations: {
    setMessage(state, message) {
      state.message = message
    },
    clearMessage(state) {
      state.message = null
    },
    openSidebar(state) {
      state.sidebar = true
    },
    closeSidebar(state) {
      state.sidebar = false
    },
  },
  actions: {
    setMessage({commit}, message) {
      commit('setMessage', message)
      setTimeout(() => {
        commit('clearMessage')
      }, 5000)
    }
  },
  modules: {
    auth, request
  }
})
