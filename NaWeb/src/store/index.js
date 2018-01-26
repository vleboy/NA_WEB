import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  show: false,
  url: ''
}

const getters = {
  showVideo: state => state.show,
  showUrl: state => state.url
}

const actions = {
  showView: ({ commit }, videoUrl) => commit('SHOW_VIEW', videoUrl),
  closeView: ({ commit }) => commit('CLOSE_VIEW')
}

const mutations = {
  SHOW_VIEW: (state, videoUrl) => [state.show, state.url] = [true, videoUrl.videoUrl],
  CLOSE_VIEW: (state) => [state.show, state.url] = [false, '']
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

