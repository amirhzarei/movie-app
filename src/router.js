import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage/HomePage.vue";
import DetailPage from "./components/DetailPage/DetailPage.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  { path: "/DetailPage/:id", name: "DetailPage", component: DetailPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
