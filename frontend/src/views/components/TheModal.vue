<template>

  <ion-content class="ion-padding">
    <ion-searchbar show-cancel-button="cancel" @ionCancel = "closeModal" v-model="searchQuery" @search="queryAPI"></ion-searchbar>
    <div>

    </div>
    <ion-list v-for="stock in stocks" :key="stock">
      <ion-item @click="addStock(stock)">
        <ion-label>{{stock["1. symbol"]}}</ion-label>
        <ion-label style ="text-align: right;">{{stock["2. name"]}}</ion-label>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script setup>
import {
  IonContent,
  IonSearchbar,
  IonList,
  IonLabel,
  IonItem,
  modalController,
  // IonList
} from "@ionic/vue";
import { ref } from "vue";
import { useStore } from '@/store/store'

const store = useStore();

const stocks = ref([]);
const searchQuery = ref("");

const closeModal = () => {
  modalController.dismiss();
};

function addStock(stock) {
  let stockSymbol = stock["1. symbol"];
  let stockName = stock["2. name"];
  store.addStock({symbol: stockSymbol, name: stockName});
  console.log(store.getAllStocks);
  closeModal();
}

async function queryAPI() {
  const stockAPIKey = process.env.VUE_APP_STOCK_API_KEY || "IQ2B4DRX54AR4MEM";
  const response = await fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchQuery.value}&apikey=${stockAPIKey}`);
  const responseJSON = await response.json();
  const stockQueryArray = responseJSON.bestMatches; 
  let stockLength = stockQueryArray.length; 
  // Update the state
  // clear the array first
  stocks.value.length = 0;
  // populate the array with new items
  for (var i = 0; i < stockLength; i++) {
    stocks.value.push(stockQueryArray[i]);
  }

  // console.log(stocks.value);
}
</script>