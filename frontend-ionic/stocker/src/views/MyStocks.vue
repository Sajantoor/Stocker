<template>
  <ion-content> 
    <h1>
      My Stocks
    </h1>

    <ion-searchbar></ion-searchbar>

    <ion-content >
      <StockCard></StockCard>
      <StockCard></StockCard>
      <StockCard></StockCard>
      <StockCard></StockCard>
      <StockCard></StockCard>
      <StockCard></StockCard>
      <StockCard></StockCard>
      <StockCard></StockCard>
      <StockCard></StockCard>
    </ion-content>

    <ion-fab class="add-stock-btn" vertical="bottom" horizontal="end">
      <ion-fab-button @click="openModal()">
        <ion-icon :icon="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>    

  </ion-content>
</template>

<script setup>
import {
  IonContent,
  IonSearchbar,
  IonIcon,
  IonFab,
  IonFabButton,
  modalController
} from "@ionic/vue";

import { add } from 'ionicons/icons';
import Modal from "@/views/components/TheModal.vue";
import StockCard from '@/views/components/StockCard.vue'

import { useStore } from '@/store/store'
//eslint-disable-next-line
const store = useStore();

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
  margin-bottom: 5em;
}
</style>
