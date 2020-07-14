import Vue from 'vue'
import Vuex from 'vuex'

import palettesJSON from './palettes.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    palettes: palettesJSON
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
