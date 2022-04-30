<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>
          <center>Stocker Logo</center>
          </ion-title>
      </ion-toolbar>
    </ion-header>
  
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div class="Header">
          <font face="Arial" size="5px">
            <strong>
              <padding>
                My Account
              </padding>
              </strong>
          </font>
      </div>

      <div class="AccountInfo">
        <ion-card>
          <ion-card-header>           
          </ion-card-header>
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

        <div class="stocks">
        <h1><strong>Top Stocks</strong></h1>
        </div>
        <ion-card>
            <ion-card-header>
            </ion-card-header>
            <ion-card-content>
                stocks
            </ion-card-content>
        </ion-card>

        <ion-card>
          <ion-card-header>
          </ion-card-header>
          <ion-card-content>
              stocks
          </ion-card-content>
        </ion-card>

        <ion-card>
          <ion-card-header>
          </ion-card-header>
          <ion-card-content>
              stocks
          </ion-card-content>
        </ion-card>
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
  </ion-page>
</template>

<script setup>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/vue';
import { chevronForwardOutline, notificationsOutline, pinOutline, personOutline,constructOutline, flagOutline } from 'ionicons/icons'  ;

// import { defineComponent } from 'vue';

// export default defineComponent({
//   name: 'HomePage',
//   components: {
//     IonContent,
//     IonHeader,
//     IonPage,
//     IonTitle,
//     IonToolbar,
//     IonIcon,
//     chevronForwardOutline
//   }
// });
</script>

<style scoped>
.Header{
  padding-top: 20px;
  padding-left: 20px
}

.list{
  
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
</style>
