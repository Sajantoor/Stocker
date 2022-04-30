<template>
  <h1>
    Stockers Nearby
  </h1>

  <ion-content>
    <div class="stockersNearby">
    <ion-card>
      <ion-card-header>
      <div style="display: flex;">
          <ion-icon :icon="ellipseOutline" slot="start" size="large"></ion-icon>
          <div class="userInfo">
          <ion-card-title>User</ion-card-title>
          <ion-card-subtitle> email </ion-card-subtitle>
          </div>
          <div class="location">
          <h4>location</h4>
          </div>
      </div>
      
      </ion-card-header>
    </ion-card>
    </div>
  </ion-content>
</template>

<script setup>
import { IonContent, IonIcon, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
import { ellipseOutline } from 'ionicons/icons'  ;

</script>

<style scoped>

h1 {
  font-size: 2em;
  font-weight: 700;
  padding: 0;
  margin-left: 0.5em;
  margin-top: 0.5em;
  margin-bottom: 0;
}
.Header{
  padding-top: 20px;
  padding-left: 20px
}

.userData1{
  display: flex;
  gap: 40px;
  flex-flow: row;
  height: 50px;
  align-content: space-around;
}

.userData2{
  display: flex;
  gap: 10px;
  flex-flow: column;
  height: 10px;
  align-content: space-between;
  justify-content: space-around;
}

.profilePic{
  padding-left: 15px;
}

.email{
  padding-left: 120px;
}

.stocks{
  padding-left: 20px;
}
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

.location{
  padding-top: 10px;
  margin-left: auto;
  color: #000;
  font-weight: 900!important;
}

.userInfo{
    align-self: center;
    justify-items: center;
    padding-left: 20px;
    padding-top: 20px;
}

ion-icon{
    zoom: 2
}

</style>
