import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/auth/LoginView.vue'
import RegisterView from '../views/auth/RegisterView.vue'

import AddWaste from '../views/rt/AddWaste.vue'
import DashboardAdmin from '../views/admin/DashboardAdmin.vue'
import DashboardRT from '../views/rt/DashboardRT.vue'
import QuestRT from '../views/rt/QuestRT.vue'
import TamanRT from '../views/rt/TamanRT.vue'
import PeringkatRT from '../views/rt/PeringkatRT.vue'
import AddWasteStep2 from '../views/rt/AddWasteStep2.vue'
import AddWasteStep3 from '../views/rt/AddWasteStep3.vue'

import DashboardPetugas from '../views/petugas/DashboardPetugas.vue'

const routes = [
  { path: '/', component: LoginView },
  { path: '/register', component: RegisterView },

  { path: '/admin', component: DashboardAdmin },
  { path: '/rt', component: DashboardRT },
  { path: '/petugas', component: DashboardPetugas },

  { path: '/admin/rt', component: { template: '<h1>RT Page</h1>' } },
  { path: '/admin/petugas', component: { template: '<h1>Petugas Page</h1>' } },
  { path: '/admin/statistik', component: { template: '<h1>Statistik Page</h1>' } },

  { path: '/rt/add', component: AddWaste },
  { path: '/rt/quest', component: QuestRT },
  { path: '/rt/taman', component: TamanRT },
  { path: '/rt/peringkat', component: PeringkatRT },
  { path: '/rt/add-step2', component: AddWasteStep2 },
  { path: '/rt/add-step3', component: AddWasteStep3 },

]

export default createRouter({
  history: createWebHistory(),
  routes,
})