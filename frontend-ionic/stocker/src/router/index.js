import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'
import MyStocks from '../views/MyStocks.vue'
import AddStock from '../views/components/AddStock.vue'
import OtherStockers from '../views/OtherStockers.vue'
import Login from "../views/LoginPage.vue";

const routes = [
  {
    path: '/',
    redirect: '/home'
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
        path: 'otherstockers',
        component: OtherStockers
      }
    ]
  },
  {
    path: '/addstock',
    name: 'Add Stock',
    component: AddStock,
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
