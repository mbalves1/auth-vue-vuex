import Vuex from 'vuex'
import Vue from 'vue'
import http from '@/http'

Vue.use(Vuex)

const estado = {
  token: null,
  user: {}
}

const mutations = {
  DEFINIR_USER_LOG(state, { token, user }) {
    state.token = token
    state.user = user
  },
  DESLOGAR_USER(state) {
    state.token = null
    state.user = {}
  }
}

const actions = {
  login({ commit }, user) {
    return new Promise((resolve, reject) => {
      http.post('auth/login', user)
        .then(response => {
          commit('DEFINIR_USER_LOG', {
            token: response.data.access_token,
            user: response.data.user
          })
          resolve(response.data)
        })
        .catch(err => {
          console.log(err)
          reject(err)
        })
    })
  }
}

export default new Vuex.Store({
  state: estado,
  mutations,
  actions
})