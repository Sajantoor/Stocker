<template>
  <ion-page id="login-page">
    <button @click="login">Login with Google</button>
  </ion-page>
</template>

<script setup>
import { IonPage } from "@ionic/vue";
import { onMounted } from "@vue/runtime-core";
// import { trendingUpOutline, map, person } from "ionicons/icons";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
} from "firebase/auth";

onMounted(() => checkAuth());

async function initApp() {
  console.log(process.env);
  // eslint-disable-next-line
  const app = initializeApp({
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_APP_ID,
    measurementId: process.env.VUE_APP_MEASUREMENT_ID,
  });
}

async function checkAuth() {
  initApp();
  const auth = getAuth();
  const result = await getRedirectResult(auth);

  if (!result || !result.user) {
    console.log("User not signed in");
  } else {
    console.log("User signed in");
    console.log(result.user);

    const credential = GoogleAuthProvider.credentialFromResult(result);
    // eslint-disable-next-line
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // TOOD: Call backend with user information
    // TODO: Save this token and use it for future requests
    // TOOD: To be stored in database
    // eslint-disable-next-line
    const userObject = {
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
    };
  }
}

async function login() {
  initApp();
  const auth = getAuth();

  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
}
</script>

<style scoped>
</style>
