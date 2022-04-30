<template>
  <ion-content>
    <h1>My Account</h1>

    <div class="AccountInfo">
      <ion-card>
        <ion-card-content>
          <div class="userData1">
              <div class="profilePic">
                <ion-avatar>
                  <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
                </ion-avatar>        
              </div>
              <p>
                <strong>Username</strong>
              </p>
          </div>
        
          <div class="userData2">
            <div class="email"> 
              <p>
                <strong>Email</strong>
              </p>
            </div>
          </div>
        </ion-card-content>
      </ion-card>
    </div>

    <div class="list">
    <ion-list>
        <ion-item>
          <ion-label>
            <ion-icon :icon="notificationsOutline" slot="start" size="small"></ion-icon>
            &ensp;Notifications
          </ion-label>
          <ion-toggle slot="end"></ion-toggle>
        </ion-item>

        <ion-item>
          <ion-label>
            <ion-icon :icon="pinOutline" slot="start" size="small"></ion-icon>
            &ensp;Turn Locations On
            </ion-label>
          <ion-radio slot="end"></ion-radio>
        </ion-item>

        <ion-item>
          <ion-label>
            <ion-icon :icon="personOutline" slot="start" size="small"></ion-icon>
            &ensp;Privacy
          </ion-label>
          <ion-icon :icon="chevronForwardOutline" slot="end"></ion-icon>
        </ion-item>

        <ion-item>
          <ion-label>
            <ion-icon :icon="constructOutline" slot="start" size="small"></ion-icon>
            &ensp;Security
          </ion-label>
          <ion-icon :icon="chevronForwardOutline" slot="end"></ion-icon>
        </ion-item>

        <ion-item>
          <ion-label>
            <ion-icon :icon="flagOutline" slot="start" size="small"></ion-icon>
            &ensp;Lorem ipsum
          </ion-label>
          <ion-icon :icon="chevronForwardOutline" slot="end"></ion-icon>
        </ion-item>

        <ion-item>
          <ion-icon :icon="chevronForwardOutline" slot="end"></ion-icon>
          <ion-label>
            Logout 
          </ion-label>
        </ion-item>

        </ion-list>
    </div>          
  </ion-content>
</template>

<script setup>
import { IonContent, IonList, IonIcon, IonRadio, IonItem, IonToggle, IonLabel, IonCard, IonCardContent, IonAvatar } from '@ionic/vue';
import { chevronForwardOutline, notificationsOutline, pinOutline, personOutline,constructOutline, flagOutline } from 'ionicons/icons'  ;
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
</style>
