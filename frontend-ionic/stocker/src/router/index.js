import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'
import MyStocks from '../views/MyStocks.vue'
import Login from "../views/LoginPage.vue"
import AccountsPage from "../views/AccountsPage.vue"
import NearbyPage from '../views/NearbyPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/home/mystocks'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
    children: [
      {
        path: 'mystocks',
        component: MyStocks
      },
      {
        path: 'nearby',
        component: NearbyPage
      },
      {
        path: 'account',
        component: AccountsPage
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
