<template>
  <ion-page> 

    <!-- <ion-header collapse="condense">
      <ion-title size="large">My Stocks</ion-title>
    </ion-header> -->
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
      <ion-fab-button>
        <ion-icon :icon="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>
    

  </ion-page>
</template>

<script setup>
import {
  IonContent,
  IonSearchbar,
  IonIcon

} from "@ionic/vue";
 import StockCard from '../components/StockCard.vue'
 import { add } from 'ionicons/icons';

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
