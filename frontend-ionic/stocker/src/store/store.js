import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'store',
  
  state: () => ({
    accessToken: null,
    stocks: [],
  }),

  actions: {
    setAccessToken(token) {
      this.accessToken = token
    }
  },

  getters: {
    getAccessToken: (state) => {
      return state.accessToken
    }
  }
})