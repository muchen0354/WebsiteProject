import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const state = {
  nav: 1
}

const SET_NAV = 'SET_NAV'

const mutations = {
  [SET_NAV] (state, val) {
    state.nav = val
  }
}

const getters = {
  nav (state) {
    return state.nav
  }
}

const actions = {
  actionNav ({commit}) {
    commit('navSelect')
  }
}

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
