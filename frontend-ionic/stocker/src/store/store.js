import { defineStore } from 'pinia'

export const useStocksStore = defineStore({
  id: 'store',
  
  state: () => ({
    accessToken: null,
    stocks: [],
  }),

  
})