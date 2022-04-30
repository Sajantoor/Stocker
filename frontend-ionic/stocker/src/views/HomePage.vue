<template>
  <ion-page id="home-page">

    <div class="grid">
      <ion-header>
        <ion-img id="logo" :src="require(`../../public/assets/stocker.png`)"></ion-img>
      </ion-header>

      <div class="inner-page">
        <MyStocks ></MyStocks>
      <!-- <MyStocks class="inner-page"></MyStocks> -->
      </div>

      <ion-tab-bar class="toolbar">
        <ion-tab-button tab="stocks">
          <ion-icon class="icon-size" :icon="trendingUpOutline"></ion-icon>
          <ion-label class="icon-label">My Stocks</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="other stockers">
          <ion-icon class="icon-size" :icon="map"></ion-icon>
          <ion-label class="icon-label">Other Stockers</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="account">
          <ion-icon class="icon-size" :icon="person"></ion-icon>
          <ion-label class="icon-label">Account</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </div>
    
  </ion-page>
</template>

<script setup>
import { IonHeader, IonPage, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/vue';
import { trendingUpOutline, map, person } from 'ionicons/icons';

import MyStocks from './components/MyStocks.vue';

</script>

<style scoped>

#logo {
  width: 12em;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.grid {
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

.inner-page {
  height: auto;
  grid-row-start: 2;
  grid-row-end: 3;
}
.toolbar {
  height: 5em;
  grid-row-start: 3;
  grid-row-end: 4;
}

.icon-size {
  font-size: 4em;
}

.icon-label {
  font-size: 1.2em;
}
</style>
