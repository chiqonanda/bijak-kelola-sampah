<template>
  <div class="min-h-screen bg-gray-50 pb-20">
    <!-- Top Bar -->
    <div class="bg-gradient-to-r from-teal-500 to-blue-500 px-4 pt-10 pb-4 flex items-center gap-3">
      <button @click="$router.back()" class="text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <h1 class="text-white font-semibold text-base">Manajemen Penjemputan</h1>
    </div>

    <!-- Stat Pills -->
    <div class="grid grid-cols-4 border-b border-gray-100 bg-white">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="flex flex-col items-center py-3 gap-0.5"
        :class="stat.bg"
      >
        <p class="font-bold text-base" :class="stat.color">{{ stat.count }}</p>
        <p class="text-xs" :class="stat.color">{{ stat.label }}</p>
      </div>
    </div>

    <!-- Tab Filter -->
    <div class="grid grid-cols-4 bg-white border-b border-gray-100">
      <button
        v-for="tab in tabs"
        :key="tab"
        @click="activeTab = tab"
        class="py-2.5 text-xs font-medium transition-colors"
        :class="activeTab === tab
          ? 'text-gray-800 border-b-2 border-gray-800'
          : 'text-gray-400'"
      >
        {{ tab }}
      </button>
    </div>

    <!-- List -->
    <div class="divide-y divide-gray-100">
      <div
        v-for="item in filteredList"
        :key="item.id"
        @click="$router.push({ name: 'DetailPenjemputan', params: { id: item.id } })"
        class="bg-white px-4 py-3 flex items-start justify-between cursor-pointer active:opacity-70 transition-opacity"
        :class="item.bgClass"
      >
        <div class="flex items-start gap-3 flex-1">
          <!-- Icon -->
          <div class="mt-0.5 flex-shrink-0">
            <svg v-if="item.status === 'Menunggu'" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <svg v-else-if="item.status === 'Dijadwalkan'" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <svg v-else-if="item.status === 'Dalam Proses'" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <svg v-else class="w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <div class="flex-1">
            <p class="text-gray-800 text-sm font-semibold">{{ item.nama }}</p>
            <p class="text-gray-400 text-xs mt-0.5">{{ item.waktu }}</p>
            <!-- Tags hanya untuk Menunggu -->
            <div v-if="item.tags && item.tags.length" class="flex gap-1.5 mt-2 flex-wrap">
              <span
                v-for="(tag, i) in item.tags.slice(0, 2)"
                :key="tag"
                class="bg-white border border-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded-full"
              >{{ tag }}</span>
              <span
                v-if="item.tags.length > 2"
                class="bg-white border border-gray-200 text-gray-500 text-xs px-2 py-0.5 rounded-full"
              >+{{ item.tags.length - 2 }}</span>
            </div>
            <!-- Berat untuk Jadwal/Proses/Selesai -->
            <p v-if="!item.tags || !item.tags.length" class="text-gray-700 text-sm font-semibold mt-1">
              {{ item.berat }} kg
            </p>
          </div>
        </div>

        <div class="flex flex-col items-end gap-2 ml-3 flex-shrink-0">
          <span :class="badgeClass(item.status)" class="text-xs font-medium px-2 py-0.5 rounded-full">
            {{ item.status }}
          </span>
          <p v-if="item.tags && item.tags.length" class="text-gray-700 text-sm font-semibold">
            {{ item.berat }} kg
          </p>
        </div>
      </div>

      <div v-if="filteredList.length === 0" class="py-16 text-center text-gray-400 text-sm">
        Tidak ada data untuk tab ini.
      </div>
    </div>

    <!-- Bottom Navigation -->
    <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex">
      <button @click="$router.push('/petugas')" class="flex-1 flex flex-col items-center py-3 gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <span class="text-xs text-gray-400">Beranda</span>
      </button>
      <button class="flex-1 flex flex-col items-center py-3 gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        <span class="text-xs text-indigo-600 font-medium">Penjemputan</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const tabs = ['Semua', 'Menunggu', 'Jadwal', 'Selesai']
const activeTab = ref('Semua')

const allPenjemputan = [
  {
    id: 1, nama: 'RT 02 Mawar',   waktu: '17 Mar 2026',
    tags: ['Plastik', 'Kertas', 'Logam'], berat: 32.5,
    status: 'Menunggu', bgClass: 'bg-amber-50',
  },
  {
    id: 2, nama: 'RT 05 Melati',  waktu: '17 Mar 2026',
    tags: ['Plastik', 'Kaca'], berat: 28,
    status: 'Menunggu', bgClass: 'bg-amber-50',
  },
  {
    id: 3, nama: 'RT 07 Anggrek', waktu: '18 Mar 2026',
    tags: ['Plastik', 'Kertas', 'Organik'], berat: 35.5,
    status: 'Menunggu', bgClass: 'bg-amber-50',
  },
  {
    id: 4, nama: 'RT 01 Tulip',   waktu: '18 Mar 2026 • 09:00 WIB',
    tags: [], berat: 29.5,
    status: 'Dijadwalkan', bgClass: 'bg-blue-50',
  },
  {
    id: 5, nama: 'RT 03 Dahlia',  waktu: '18 Mar 2026 • 11:00 WIB',
    tags: [], berat: 26,
    status: 'Dijadwalkan', bgClass: 'bg-blue-50',
  },
  {
    id: 6, nama: 'RT 08 Sakura',  waktu: '17 Mar 2026 • 14:00 WIB',
    tags: [], berat: 31,
    status: 'Dalam Proses', bgClass: 'bg-purple-50',
  },
  {
    id: 7, nama: 'RT 04 Seroja',  waktu: '17 Mar 2026',
    tags: [], berat: 24.5,
    status: 'Selesai', bgClass: 'bg-green-50',
  },
  {
    id: 8, nama: 'RT 06 Kenanga', waktu: '18 Mar 2026',
    tags: [], berat: 27.5,
    status: 'Selesai', bgClass: 'bg-green-50',
  },
]

const stats = computed(() => [
  {
    label: 'Menunggu', count: allPenjemputan.filter(p => p.status === 'Menunggu').length,
    color: 'text-amber-500', bg: 'bg-amber-50',
  },
  {
    label: 'Jadwal', count: allPenjemputan.filter(p => p.status === 'Dijadwalkan').length,
    color: 'text-blue-500', bg: 'bg-blue-50',
  },
  {
    label: 'Proses', count: allPenjemputan.filter(p => p.status === 'Dalam Proses').length,
    color: 'text-purple-500', bg: 'bg-purple-50',
  },
  {
    label: 'Selesai', count: allPenjemputan.filter(p => p.status === 'Selesai').length,
    color: 'text-green-500', bg: 'bg-green-50',
  },
])

const tabStatusMap = {
  Semua:    null,
  Menunggu: 'Menunggu',
  Jadwal:   'Dijadwalkan',
  Selesai:  'Selesai',
}

const filteredList = computed(() => {
  const filter = tabStatusMap[activeTab.value]
  if (!filter) return allPenjemputan
  return allPenjemputan.filter(p => p.status === filter)
})

function badgeClass(status) {
  const map = {
    Menunggu:     'bg-amber-100 text-amber-600',
    Dijadwalkan:  'bg-blue-100 text-blue-600',
    'Dalam Proses': 'bg-purple-100 text-purple-600',
    Selesai:      'bg-green-100 text-green-600',
  }
  return map[status] ?? 'bg-gray-100 text-gray-600'
}
</script>