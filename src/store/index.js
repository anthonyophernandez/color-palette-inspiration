import Vue from 'vue'
import Vuex from 'vuex'

import palettesJSON from './palettes.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    palettes: []
  },
  mutations: {
    LOAD_PALETTES (state) {
      state.palettes = palettesJSON
    }
  },
  actions: {
    loadPalettes ({ commit }) {
      commit('LOAD_PALETTES')
    }
  },
  modules: {
  }
})
