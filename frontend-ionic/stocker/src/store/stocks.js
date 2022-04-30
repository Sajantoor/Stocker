import { defineStore } from 'pinia'

export const useStocksStore = defineStore({
  id: 'stocks',
  
  state: () => ({
    stocks: [],
  }),

  
})