import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/auth/LoginView.vue'
import RegisterView from '../views/auth/RegisterView.vue'
import DashboardAdmin from '../views/admin/DashboardAdmin.vue'
import DashboardPetugas from '../views/petugas/DashboardPetugas.vue'
import DashboardRT from '../views/rt/DashboardRT.vue'
import AddWaste from '../views/rt/AddWaste.vue'
import AddWasteStep2 from '../views/rt/AddWasteStep2.vue'
import AddWasteStep3 from '../views/rt/AddWasteStep3.vue'
import QuestRT from '../views/rt/QuestRT.vue'
import TamanRT from '../views/rt/TamanRT.vue'
import PeringkatRT from '../views/rt/PeringkatRT.vue'


const routes = [
  // Auth
  { path: '/', component: LoginView },
  { path: '/register', component: RegisterView },

  // Admin
  { path: '/admin', component: DashboardAdmin },
  {
    path: '/admin/statistik',
    name: 'StatistikSampah',
    component: () => import('../views/admin/StatistikSampah.vue'),
  },
  {
    path: '/admin/leaderboard',
    name: 'LeaderboardKelurahan',
    component: () => import('../views/admin/LeaderboardKelurahan.vue'),
  },

  // Petugas
  { path: '/petugas', component: DashboardPetugas },
  {
    path: '/petugas/penjemputan',
    name: 'ManajemenPenjemputan',
    component: () => import('../views/petugas/ManajemenPenjemputan.vue'),
  },

  {
    path: '/petugas/daftar-penjemputan',
    name: 'daftarPenjemputan',
    // --- PERBAIKAN: Disarankan pakai lazy load biar nggak error import ---
    component: () => import('../views/petugas/daftarPenjemputan.vue')
  },

  {
    path: '/petugas/penjemputan/:id',
    name: 'DetailPenjemputan',
    component: () => import('../views/petugas/DetailPenjemputan.vue'),
    props: true,
  },

  // RT
  { path: '/rt',            component: DashboardRT    },
  { path: '/rt/add',         component: AddWaste       },
  { path: '/rt/add-step2',   component: AddWasteStep2  },
  { path: '/rt/add-step3',   component: AddWasteStep3  },
  { path: '/rt/quest',       component: QuestRT        },
  { path: '/rt/taman',       component: TamanRT        },
  { path: '/rt/peringkat',   component: PeringkatRT    },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router