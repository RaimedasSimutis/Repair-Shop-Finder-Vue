// import Vue from 'vue'
// import Vuex from 'vuex'
import axios from '@/packages/axios'

export default {
  strict: process.env.NODE_ENV === 'development',
  state: () => ({
    repairShopsList: null,
    cityName: null,
    nextPageToken: null
  }),
  getters: {
    getRepairShopsList: state => {
      return state.repairShopsList
    }
  },
  mutations: {
    updateRepairShopsList (state, data) {
      state.repairShopsList = data
    },
    updateCityName (state, city) {
      // console.log('city updated: ', city)
      state.cityName = city
    },
    updateNextPageToken (state, token) {
      // console.log('token updated', token)
      state.nextPageToken = token
    }
  },
  actions: {
    async fetchRepairShops ({ commit }, city) {
      try {
        const { data } = await axios.get(`/repairShops/getAll/${city}`)
        // console.log(data.results)
        commit('updateCityName', city)
        // commit('updateNextPageToken', data.nextPageToken)
        commit('updateRepairShopsList', data.results)
      } catch (error) {
        // console.log(error)
        alert('search failed')
        // commit('updateRepairShopsList', ['not found'])
      }
    },
    async fetchMoreRepairShops ({ commit }) {
      try {
        const { data } = await axios.get('/repairShops/getMore/')
        // console.log(data)
        commit('updateCityName', data)
      } catch (error) {
        // console.log(error)
        alert('search failed')
        commit('updateRepairShopsList', ['not found'])
      }
    },
    async fetchLocationByIP ({ dispatch }) {
      try {
        const { data } = await axios.get('https://ipinfo.io?token=7a4a105d1e0755')
        // console.log(data.city)
        dispatch('fetchRepairShops', data.city)
      } catch (error) {
        // console.log('Location by IP fetch failed', error)
      }
    }

  },
  modules: {
  }
}
