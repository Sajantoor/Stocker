<template>
  <ion-page>

    <ion-content>
      <ion-button @click="openModal()">Open Modal</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonContent,  IonButton, modalController} from "@ionic/vue";
import Modal from "@/views/components/TheModal.vue";
// import { ref } from "vue";

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

.stock_price {
  margin-left: auto;
  color: #000;
  font-weight: 900 !important;
}

.stock-list {
  height: 90%;
}

.add-stock-btn {
  margin-bottom: 5em;
}
</style>
