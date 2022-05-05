# Stocker
> A mobile, social media app for tracking your stock portfolio. SFU Mountain Madness 2022 Submission

![Stocker Logo](../main/frontend/public/assets/stocker.png)

### Table of Contents
* [About](#about)
* [Technologies](#technologies)
* [Future Features](#future-features)
* [Getting Started](#getting-started)
* [Contributions](#contributions)

## About
Stocker is a mobile app used to keep people updated with their stocks of their choice. It allows other stock traders to contact one another and build relationships among them. It also lets other stock traders to keep up to date with the latest stock in the market is up. People are able to locate and meet up with one another. You can finally find the person who is shorting one of your stocks and ... have a nice conversation with them!

## Technologies
For the front end, Vue and Ionic was used to create the app. 
The backend used express and firebase for the database. 

## Future Features
Plan on including an interactive map for the nearby stockers, where the user can see other stockers current location and clicking their profile picture will open up their favourite stocks or stocks they are currently watching. This will improve the user experience.

## Get Started
* [Install Ionic](https://ionicframework.com/docs/intro/cli): this is used to build the app. 
* [Install Vue](https://vuejs.org/guide/quick-start.html)

* Clone the repo:

    `git clone https://github.com/Sajantoor/stocker.git`

 * For the frontend: 

    `cd stocker/frontend`

    Create a `.env` file with the following content:
    ```
    VUE_APP_FIREBASE_API_KEY=
    VUE_APP_AUTH_DOMAIN=
    VUE_APP_PROJECT_ID=
    VUE_APP_STORAGE_BUCKET=
    VUE_APP_MESSAGING_SENDER_ID=
    VUE_APP_APP_ID=
    VUE_APP_MEASURE_ID=G-
    ```

    `npm install`

    `npm run serve`


* For the backend:

    `cd stocker/backend`

    Create a `.env` file with the following content:

    ```
    FIREBASE_API_KEY=
    AUTH_DOMAIN=
    PROJECT_ID=
    STORAGE_BUCKET=
    MESSAGING_SENDER_ID=
    APP_ID=
    MEASURE_ID=
    ```

    `npm install`

    `npm run dev` or `npm start`


## Creators
* Sajan Toor
* Alfonso Ocampo
* TJ Poddar
* Ritam Singal
