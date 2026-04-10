<template>
  <div class="min-h-screen bg-gray-50 pb-10">
    <div class="bg-white px-4 pt-10 pb-4 border-b border-gray-100 sticky top-0 z-20">
      <div class="flex items-center gap-4">
        <button 
          @click="$router.back()" 
          class="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-xl active:scale-90 transition-transform"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div>
          <h1 class="text-gray-800 text-lg font-bold">Semua Penjemputan</h1>
          <p class="text-gray-400 text-xs">Total {{ filteredList.length }} data ditemukan</p>
        </div>
      </div>

      <div class="mt-4 relative">
        <span class="absolute inset-y-0 left-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>
        <input 
          v-model="searchQuery"
          type="text" 
          placeholder="Cari nama RT..." 
          class="w-full bg-gray-100 border-none rounded-xl py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-indigo-500 transition-all"
        />
      </div>

      <div class="flex gap-2 mt-4 overflow-x-auto no-scrollbar">
        <button 
          v-for="tab in tabs" 
          :key="tab.id"
          @click="activeTab = tab.id"
          :class="[
            'px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all',
            activeTab === tab.id 
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' 
              : 'bg-gray-100 text-gray-500'
          ]"
        >
          {{ tab.label }}
        </button>
      </div>
    </div>

    <div class="px-4 mt-4 space-y-3">
      <div v-if="filteredList.length === 0" class="py-20 text-center">
        <p class="text-gray-400 text-sm">Tidak ada data penjemputan.</p>
      </div>

      <div
        v-for="item in filteredList"
        :key="item.id"
        class="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex flex-col gap-3 active:scale-[0.98] transition-transform"
        @click="$router.push({ name: 'DetailPenjemputan', params: { id: item.id } })"
      >
        <div class="flex justify-between items-start">
          <div>
            <span 
              :class="[
                'text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md mb-2 inline-block',
                getStatusStyle(item.status)
              ]"
            >
              {{ item.status }}
            </span>
            <h3 class="text-gray-800 font-bold text-base">{{ item.nama }}</h3>
            <p class="text-gray-400 text-xs mt-1 flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {{ item.tanggal }}
            </p>
          </div>
          <div class="text-right">
            <p class="text-indigo-600 text-lg font-black">{{ item.berat }}<span class="text-xs ml-0.5">kg</span></p>
          </div>
        </div>

        <div class="flex gap-1.5 flex-wrap border-t border-gray-50 pt-3">
          <span 
            v-for="tag in item.tags" 
            :key="tag" 
            class="bg-gray-50 text-gray-500 text-[10px] px-2 py-1 rounded-lg border border-gray-100"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeTab = ref('semua')
const searchQuery = ref('')

const tabs = [
  { id: 'semua', label: 'Semua' },
  { id: 'menunggu', label: 'Menunggu' },
  { id: 'dijadwalkan', label: 'Dijadwalkan' },
  { id: 'selesai', label: 'Selesai' },
]

// Mock data gabungan
const masterData = ref([
  { id: 1, nama: 'RT 02 Mawar', tanggal: '17 Mar 2026', tags: ['Plastik', 'Kertas'], berat: 32.5, status: 'menunggu' },
  { id: 2, nama: 'RT 05 Melati', tanggal: '17 Mar 2026', tags: ['Plastik', 'Kaca'], berat: 28, status: 'menunggu' },
  { id: 3, nama: 'RT 07 Anggrek', tanggal: '18 Mar 2026', tags: ['Organik'], berat: 35.5, status: 'menunggu' },
  { id: 4, nama: 'RT 01 Tulip', tanggal: '18 Mar 2026 • 09:30', tags: ['Logam', 'Kertas'], berat: 29.5, status: 'dijadwalkan' },
  { id: 5, nama: 'RT 03 Dahlia', tanggal: '18 Mar 2026 • 11:00', tags: ['Plastik'], berat: 26, status: 'dijadwalkan' },
  { id: 6, nama: 'RT 04 Seroja', tanggal: '16 Mar 2026', tags: ['Kaca', 'Plastik'], berat: 34.5, status: 'selesai' },
  { id: 7, nama: 'RT 06 Kamboja', tanggal: '15 Mar 2026', tags: ['Kertas'], berat: 12.0, status: 'selesai' },
])

const filteredList = computed(() => {
  return masterData.value.filter(item => {
    const matchTab = activeTab.value === 'semua' || item.status === activeTab.value
    const matchSearch = item.nama.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchTab && matchSearch
  })
})

const getStatusStyle = (status) => {
  switch (status) {
    case 'menunggu': return 'bg-amber-100 text-amber-600'
    case 'dijadwalkan': return 'bg-blue-100 text-blue-600'
    case 'selesai': return 'bg-green-100 text-green-600'
    default: return 'bg-gray-100 text-gray-600'
  }
}
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>