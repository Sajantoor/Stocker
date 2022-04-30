import { createRouter, createWebHistory } from "@ionic/vue-router";
// import { RouteRecordRaw } from 'vue-router';
import HomePage from "../views/HomePage.vue";
import MyStocks from "../views/components/MyStocks.vue";
import Login from "../views/LoginPage.vue";

const routes = [
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: "/home",
        name: "Home",
        component: HomePage,
    },
    {
        path: "/mystocks",
        name: "My Stocks",
        component: MyStocks,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
