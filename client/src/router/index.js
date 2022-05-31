import { createRouter, createWebHistory } from "vue-router"
import ViewHome from '../views/ViewHome.vue'
import ViewCalendario from '../views/ViewCalendario.vue'
import ViewClassifica from '../views/ViewClassifica.vue'
import ViewPiloti from '../views/ViewPiloti.vue'
import ViewStorico from '../views/ViewStorico.vue'
import ViewDona from '../views/ViewDona.vue'
import ViewBiografia from '../views/ViewBiografia.vue'

const routes = [
    {
        path: '/',
        name: 'Home', 
        component: ViewHome
    },
    {
        path: '/calendario',
        name: 'Calendario', 
        component: ViewCalendario 
    },
    {
        path: '/classifica',
        name: 'Classifica', 
        component: ViewClassifica
    },
    {
        path: '/piloti',
        name: 'Piloti', 
        component: ViewBiografia
    },
    {
        path: '/storico',
        name: 'Storico', 
        component: ViewStorico
    },
    {
        path: '/dona',
        name: 'Dona', 
        component: ViewDona
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
