import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV === 'development',
  state: () => ({
    results: [
      {
        id: 1,
        title: 'Autovita',
        description: 'Pusu gatve'
      },
      {
        id: 2,
        title: 'Eoltas',
        description: 'Mainu gatve'
      },
      {
        id: 3,
        title: 'Signeda',
        description: 'Alu gatve'
      }
    ]
  }),
  getters: {
    getResults: state => {
      return state.results
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
