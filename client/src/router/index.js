import { createRouter, createWebHistory } from "vue-router";
import ViewHome from "../views/ViewHome.vue";
import ViewCalendario from "../views/ViewCalendario.vue";
import ViewClassifica from "../views/ViewClassifica.vue";
import ViewPiloti from "../views/ViewPiloti.vue";
import ViewStorico from "../views/ViewStorico.vue";
import ViewDona from "../views/ViewDona.vue";
import ViewBiografia from "../views/ViewBiografia.vue";
import ViewDonaSuccess from "../views/ViewDonaSuccess.vue";
import ViewDonaCancel from "../views/ViewDonaCancel.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: ViewHome,
  },
  {
    path: "/calendario",
    name: "Calendario",
    component: ViewCalendario,
  },
  {
    path: "/classifica",
    name: "Classifica",
    component: ViewClassifica,
  },
  {
    path: "/piloti",
    name: "Piloti",
    component: ViewPiloti,
  },
  {
    path: "/piloti/:driverId",
    name: "Pilota",
    component: ViewBiografia,
  },
  {
    path: "/storico",
    name: "Storico",
    component: ViewStorico,
  },
  {
    path: "/dona",
    name: "Dona",
    component: ViewDona,
  },
  {
    path: "/dona/success",
    name: "Dona Success",
    component: ViewDonaSuccess,
  },
  {
    path: "/dona/cancel",
    name: "Dona Cancel",
    component: ViewDonaCancel,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
