<template>
  <h1>
    My Stocks
  </h1>
  <ion-searchbar class="searchbar" slot="fixed"></ion-searchbar>
  
  <ion-fab class="add-stock-btn">
    <ion-fab-button @click="openModal()">
      <ion-icon :icon="add"></ion-icon>
    </ion-fab-button>
  </ion-fab>    

  <ion-content v-for="stock in store.stocks" :key="stock">
    <StockCard> 
      <template #symbol> 
        <ion-card-title> 
          {{ stock.symbol }}
        </ion-card-title>
      </template>

      <template #companyName> 
        <ion-card-subtitle> 
          {{ stock.name }}
        </ion-card-subtitle>
      </template>
    </StockCard>
  </ion-content>

</template>

<script setup>
import {
  IonContent,
  IonSearchbar,
  IonIcon,
  IonFab,
  IonFabButton,
  modalController,
  IonCardTitle,
  IonCardSubtitle
} from "@ionic/vue";

import { add } from 'ionicons/icons';
import Modal from "@/views/components/TheModal.vue";
import StockCard from '@/views/components/StockCard.vue'
import { BACKEND_SERVER } from "../utilities/constants.js";
import { useStore } from '@/store/store';
import { onMounted, ref } from "vue";
//eslint-disable-next-line
const store = useStore();
const stocks = ref([]);

const getUserStocks = async () => {
  const username = store.getUsername;
  console.log(username);
  const response = await fetch(`${BACKEND_SERVER}/get-user?username=${username}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  });

  const data = await response.json();
  console.log(data);
  const stockData = data[0].stocks;

  for (let i = 0; i < stockData.length; i++) {
    const stock = stockData[i];
    stocks.value.push(stock);
  }

  console.log(stocks.value);
}

onMounted(() => {
  getUserStocks();
});

const openModal = async () => {
  const modal = await modalController.create({
    component: Modal, //Modal is name of the component to render inside ionic modal
  });
  return modal.present();
};

</script>

<style scoped>

h1 {
  font-size: 2em;
  font-weight: 700;
  padding: 0;
  margin-left: 0.35em;
  margin-top: 0.5em;
  margin-bottom: 0;
}

.stock_price{
  margin-left: auto;
  color: #000;
  font-weight: 900!important;
}

.stock-list {
  height: 90%;
}

.add-stock-btn {
  bottom: 8em;
  right: 1em;
}
</style>
