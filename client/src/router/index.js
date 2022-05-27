import { createRouter, createWebHistory } from "vue-router"
import ItemGranpremio from '../components/ItemGranpremio.vue'
import ItemCalendario from '../components/ItemCalendario.vue'
import ItemClassifica from '../components/ItemClassifica.vue'
import ItemPiloti from '../components/ItemPiloti.vue'
import ItemStorico from '../components/ItemStorico.vue'

const routes = [
    {
        path: '/',
        name: 'Home', 
        component: ItemGranpremio
    },
    {
        path: '/calendario',
        name: 'Calendario', 
        component: ItemCalendario 
    },
    {
        path: '/classifica',
        name: 'Classifica', 
        component: ItemClassifica
    },
    {
        path: '/piloti',
        name: 'Piloti', 
        component: ItemPiloti
    },
    {
        path: '/storico',
        name: 'Storico', 
        component: ItemStorico
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
