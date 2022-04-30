import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'store',
  
  state: () => ({
    username: '',
    accessToken: null,
    stocks: [],
  }),

  actions: {
    setAccessToken(token) {
      this.accessToken = token
    },
    setUsername(username) {
      this.username = username
    }
  },

  getters: {
    getAccessToken: (state) => {
      return state.accessToken
    },
    getUsername: (state) => {
      return state.username
    }
  }
})