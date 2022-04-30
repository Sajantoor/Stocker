<template>
  

      <ion-card @click="toggle()">
        <ion-card-header>
          <div style="display: flex;">
            <div>
            <ion-card-title>SYMBL</ion-card-title>
            <ion-card-subtitle>Company Name</ion-card-subtitle>
            </div>
            <div class="stock_price">
              <h4>$420.69</h4>
            </div>
          </div>
        </ion-card-header>
        <!-- toggled on -->
        <ion-card-content v-if="count" >
          <div style="display:flex; justify-content: space-between;">
            <div style="width : 100%; padding: 0px 10px 0px 0px;">
              <div style=" display:flex; justify-content: space-between;">
              <p>Open</p>
              <p>420.00</p>
              </div>
              <div style=" display:flex; justify-content: space-between;">
              <p>High</p>
              <p>420.00</p>
              </div>
              <div style=" display:flex; justify-content: space-between;">
              <p>Low</p>
              <p>420.00</p>
              </div>
            </div>
            <div style="width : 100%; padding: 0px 10px 0px 0px;">
              <div style=" display:flex; justify-content: space-between;">
              <p>Vol</p>
              <p>30.38M</p>
              </div>
              <div style=" display:flex; justify-content: space-between;">
              <p>P/E</p>
              <p>117.67</p>
              </div>
              <div style=" display:flex; justify-content: space-between;">
              <p>MC</p>
              <p>201.3B</p>
              </div>
            </div>
            <div style="width : 100%; padding: 0px 10px 0px 0px; ">
              <div style=" display:flex; justify-content: space-between;">
              <p>52W H</p>
              <p>469.00</p>
              </div>
              <div style=" display:flex; justify-content: space-between;">
              <p>52W L</p>
              <p>4.20</p>
              </div>
              <div style=" display:flex; justify-content: space-between;">
              <p>Avg Vol</p>
              <p>25.11M</p>
              </div>
            </div>
          </div>
        </ion-card-content>
      </ion-card>
</template>

<script setup>
import {
  
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/vue";

import { ref } from 'vue'

var count = ref(false);

function toggle() {
  count.value = ! count.value
}
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}

.stock_price{
  margin-left: auto;
  color: #000;
  font-weight: 900!important;
}
</style>
